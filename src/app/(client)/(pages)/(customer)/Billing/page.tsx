"use client";

import { AuthLoader, Button, ClientOnly, Container } from "@/components/common";
import { Textarea } from "./form/textarea";
import { RadioGroup, RadioGroupItem } from "./form/radio-group";
import { Summary } from "./summary";

import {
  decodeToken,
  getCartItems,
  viewAllAddresses,
  createOrder,
} from "@/helpers";
import { formatPrice } from "@/utils/shad-utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Payhere, AccountCategory } from "@payhere-js-sdk/client";
import {
  Customer,
  CurrencyType,
  PayhereCheckout,
  CheckoutParams,
} from "@payhere-js-sdk/client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/common/ui/drawer";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

Payhere.init(
  "1225382",
  AccountCategory.SANDBOX,
  "MTM4OTgyOTM5ODQxNDUzODM3OTgyMzMxMjA1OTEzMTQ4MzIzNzgwNA=="
);

const Billing = (props: Props) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);

  const [total, setTotal] = useState(0);
  const [generatedHash, setGeneratedHash] = useState("");
  const [isBillingDrawerOpen, setIsBillingDrawerOpen] = useState(false);
  const [isShippingDrawerOpen, setIsShippingDrawerOpen] = useState(false);
  const [billingAddress, setBillingAddress] = useState(1);
  const [shippingAddress, setShippingAddress] = useState(1);

  function onPayhereCheckoutError(errorMsg: any) {
    alert(errorMsg);
  }
  const [orderId, setOrderId] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [userId, setUserId] = useState(0);

  function checkout(hash: any, orderId: any) {
    const customer = new Customer({
      first_name: "Demo",
      last_name: "User",
      phone: "+94771234567",
      email: "user@example.com",
      address: "No. 50, Highlevel Road",
      city: "Panadura",
      country: "Sri Lanka",
    });

    const checkoutData = new CheckoutParams({
      returnUrl: `http://localhost:3000/return${hash}`,
      cancelUrl: "http://localhost:3000/cancel",
      notifyUrl: `https://www.green-supermarket.com/api/v1/order/payhere/${orderId}`,
      order_id: orderId.toString(),
      itemTitle: "Demo Item",
      currency: CurrencyType.LKR,
      amount: total,
      deliveryAddress: "No. 46, Galle Road, Kalutara South",
      deliveryCity: "Kalutara",
      deliveryCountry: "Sri Lanka",
      hash: hash,
      custom1: "",
      custom2: "",
      platform: "",
    });

    const checkout = new PayhereCheckout(
      customer,
      checkoutData,
      onPayhereCheckoutError
    );
    checkout.start();
  }

  const generateHash = async () => {
setGlobalLoading(true);
    try {
      const res = await createOrder(
        userId,
        0,
        0,
        "Card",
        billingAddress,
        shippingAddress
      );
      console.log(res);
      const updatedOrderId = res.orderId;
      setOrderId(updatedOrderId);

      try {
        const response = await axios.post(
          "https://www.green-supermarket.com/api/v1/payhere/generate-hash",
          {
            merchantID: process.env.NEXT_PUBLIC_MERCHANT_ID,
            merchantSecret: process.env.NEXT_PUBLIC_MERCHANT_SECRET as string,
            orderID: updatedOrderId,
            amount: total,
            currency: "LKR",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          const generatedHash = data.hash;
          setGeneratedHash(generatedHash);
          console.log("this is ", updatedOrderId);
          checkout(generatedHash, updatedOrderId);
        } else {
          console.error("Failed to generate hash");
          throw new Error("Failed to generate hash");
        }
        setGlobalLoading(false);
      } catch (error) {
        console.error("Error generating hash:", error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const decode = async () => {
      const jwtToken = localStorage.getItem("jwtToken");
      if (!jwtToken) {
        setUser(false);
        setLoading(false);
        return;
      }
      try {
        const res = await decodeToken(jwtToken!);
        const { data } = res;
        setUserId(data.id);
        console.log(data);
        const { cartId, id } = data;
        const cartItems = await getCartItems(cartId);
        setTotal(cartItems.totalAmount);
        setCart(cartItems.cartItems);
        const address = await viewAllAddresses(id);
        // console.log(address);
        setAddresses(address);
        setUser(true);
        setLoading(false);
      } catch (error) {
        setUser(false);
        setLoading(false);
      }
    };
    decode();
  }, []);

  useEffect(() => {
    const fetchAddresses = async () => {
      const res = await viewAllAddresses(userId);
      const { data } = res;
      setAddresses(data);
    };
    fetchAddresses();
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(cart);
      console.log(addresses);
      console.log(userId);
    }
  }, [cart, addresses, loading, userId]);

  const router = useRouter();
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        router.push("/");
        return;
      }

      try {
        const { status } = await decodeToken(jwtToken);
        if (status === 200) {
          setTokenValid(true);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/");
      }
    };

    checkTokenValidity();
  }, [router]);

  if (!tokenValid) {
    return <AuthLoader />;
  }

  const handleBillingDrawerClose = (id: number) => {
    setBillingAddress(id);
    setIsBillingDrawerOpen(false);
  };

  const handleShippingDrawerClose = (id: number) => {
    setShippingAddress(id);
    setIsShippingDrawerOpen(false);
  };

  console.log("billing address", billingAddress);
  console.log("shipping address", shippingAddress);

  return (
    <ClientOnly>
      <Container>
        <div className="flex md:flex-row flex-col gap-8 lg:my-5 my-3 pt-[24px]">
          <div className="w-full flex flex-col ">
            <div className=" flex flex-col  gap-4">
              <div className="font-medium text-xl text-center lg:text-left pb-3">
                Billing Information{" "}
              </div>

              <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start md:items-start">
                <Drawer
                  open={isBillingDrawerOpen}
                  onOpenChange={setIsBillingDrawerOpen}
                >
                  <DrawerTrigger>
                    <Button
                      variant="ghost"
                      onClick={() => setIsBillingDrawerOpen(true)}
                    >
                      Set Billing Address
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    {addresses && addresses.length === 0 ? (
                      <div className="text-center text-gray-500 max-w-[1200px] mx-auto py-10">
                        <Image
                          src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/6992bd9a-900f-4ccb-9e22-4007bbe5f4a0.jpg"
                          width={300}
                          height={300}
                          alt="empty shopping cart hippo"
                        />
                        <div>
                          <div className="text-xl font-semibold">
                            No addresses available
                          </div>
                          <div className="text-sm">
                            Add an address to continue
                          </div>
                          <Button
                            onClick={() => router.push("/address-book")}
                            className="mt-5"
                            variant="ghost"
                          >
                            Go to address
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row overflow-x-auto mx-auto gap-4 lg:max-w-[1200px] py-10">
                        {addresses?.map((card: any) => (
                          <DrawerClose
                            key={card.id}
                            className={`border-[2px] ${
                              billingAddress === card.id
                                ? "border-green-400"
                                : "border-gray-50"
                            } rounded-lg p-4`}
                            onClick={() => handleBillingDrawerClose(card.id)}
                          >
                            <div className="flex gap-4 justify-between">
                              <div className="flex flex-col gap-3">
                                <div className="uppercase text-sm font-medium text-gray-200 pb-2">
                                  {card.locationName} address
                                </div>
                                <div className="font-medium text-base">
                                  {card.firstName} {card.lastName}
                                </div>
                                <div className="text-sm text-gray-200">
                                  {card.address}, {card.city}, {card.province}{" "}
                                  {card.postalCode}
                                </div>
                                <div className="font-medium text-sm">
                                  {card.email}
                                </div>
                                <div className="font-medium text-sm">
                                  {card.phoneNumber}
                                </div>
                              </div>
                            </div>
                          </DrawerClose>
                        ))}
                      </div>
                    )}
                  </DrawerContent>
                </Drawer>
                <Drawer
                  open={isShippingDrawerOpen}
                  onOpenChange={setIsShippingDrawerOpen}
                >
                  <DrawerTrigger>
                    <Button
                      variant="ghost"
                      onClick={() => setIsShippingDrawerOpen(true)}
                    >
                      Set Shipping Address
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    {addresses && addresses.length === 0 ? (
                      <div className="text-center text-gray-500 max-w-[1200px] mx-auto py-10">
                        <Image
                          src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/6992bd9a-900f-4ccb-9e22-4007bbe5f4a0.jpg"
                          width={300}
                          height={300}
                          alt="empty shopping cart hippo"
                        />
                        <div>
                          <div className="text-xl font-semibold">
                            No addresses available
                          </div>
                          <div className="text-sm">
                            Add an address to continue
                          </div>
                          <Button
                            onClick={() => router.push("/address-book")}
                            className="mt-5"
                            variant="ghost"
                          >
                            Go to address
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <DrawerTrigger className="flex flex-col md:flex-row overflow-x-auto mx-auto gap-4 lg:max-w-[1200px] py-10">
                        {addresses?.map((card: any) => (
                          <DrawerClose
                            key={card.id}
                            className={`border-[2px] ${
                              shippingAddress === card.id
                                ? "border-green-400"
                                : "border-gray-50"
                            } rounded-lg p-4`}
                            onClick={() => handleShippingDrawerClose(card.id)}
                          >
                            <div className="flex gap-4 justify-between">
                              <div className="flex flex-col gap-3">
                                <div className="uppercase text-sm font-medium text-gray-200 pb-2">
                                  {card.locationName} address
                                </div>
                                <div className="font-medium text-base">
                                  {card.firstName} {card.lastName}
                                </div>
                                <div className="text-sm text-gray-200">
                                  {card.address}, {card.city}, {card.province}{" "}
                                  {card.postalCode}
                                </div>
                                <div className="font-medium text-sm">
                                  {card.email}
                                </div>
                                <div className="font-medium text-sm">
                                  {card.phoneNumber}
                                </div>
                              </div>
                            </div>
                          </DrawerClose>
                        ))}
                      </DrawerTrigger>
                    )}
                  </DrawerContent>
                </Drawer>
              </div>

              {/* divider */}
              <div className="bg-gray-200/40 w-full h-[0.25px] "></div>
              {/* inputs */}
              <div></div>
              <div>
                <div className="flex flex-col pt-4">
                  <div className="font-medium text-lg">Additional Info</div>
                  <div className="text-sm pt-[24px]">
                    Order Notes (Optional)
                  </div>
                </div>
                <div className="pt-2">
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    className="resize-none focus-visible:outline-green-400/40 focus-visible:border-none"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* order summury */}
          <div className="flex flex-col w-ful gap-3 border rounded-lg py-5 pl-5 border-gray-200/40 pt-8 ">
            <div className="font-medium">Order Summary</div>
            <div className="flex flex-col gap-3">
              <div className="flex w-full flex-col  overflow-y-auto max-h-[calc(100vh-230px)] md:max-h-[calc(100vh-250px)]">
                {/* TODO: Cart logic */}
                {cart.map((product: any, index) => (
                  <div key={index} className="pr-5 py-2">
                    <Summary
                      imageSrc={product.product.productImage}
                      name={product.product.productName}
                      price={product.product.currentPrice}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col pr-5 gap-4">
                <div className="bg-gray-200/40 w-full h-[0.25px] mt-4 mr-5"></div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex text-sm pt-4">
                    <div className="flex-1">Shipping</div>
                    <div className="font-medium">Free</div>
                  </div>
                  <div className="flex text-sm pt-2 pb-4">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="bg-gray-200/40 w-full h-[0.25px] mr-5"></div>
                </div>
                {/* Radio Group */}
                <div className="flex flex-col gap-3 pt-4">
                  <div>Payment Method</div>
                  <div>
                    <RadioGroup defaultValue="comfortable" className="text-sm">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <label htmlFor="r1">Cash on Delivery</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <label htmlFor="r2">Credit / Debit Card</label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="py-4">
                  <Button className="w-full" onClick={generateHash} loading={globalLoading}>
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Billing;


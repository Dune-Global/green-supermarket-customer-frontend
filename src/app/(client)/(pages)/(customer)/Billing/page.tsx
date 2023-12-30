"use client";
import React, { useEffect, useState } from "react";
import { CitySelect, ProvinceSelect } from "./selectcomponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./form/accordion";
import { AuthLoader, Button, ClientOnly, Container } from "@/components/common";
import { Checkbox } from "./form/checkbox";
import { Input } from "@/components/common/ui/input";
import shippinginfo from "./shippinginfo";
import { Textarea } from "./form/textarea";
import { RadioGroup, RadioGroupItem } from "./form/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "./form/select";
import { Summary } from "./summary";
import productList from "@/data/products/product-details";
import { decodeToken, getCartItems, viewAllAddresses } from "@/helpers";
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

  const [total, setTotal] = useState(0);

  const [generatedHash, setGeneratedHash] = useState("");

  function onPayhereCheckoutError(errorMsg: any) {
    alert(errorMsg);
  }

  function checkout(hash: any) {
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
      notifyUrl: "https://www.green-supermarket.com/api/v1/order/payhere",
      order_id: "112233",
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
    try {
      const response = await axios.post(
        "https://www.green-supermarket.com/api/v1/payhere/generate-hash",
        {
          merchantID: 1225382,
          merchantSecret:
            "OTI2NDg2NDc5MzkyNzQyNDU2NjU2MzM1NTExOTExODk4NzQzODA=",
          orderID: 112233,
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
        console.log(generatedHash);
        setGeneratedHash(generatedHash);
        checkout(generatedHash);
      } else {
        console.error("Failed to generate hash");
        throw new Error("Failed to generate hash");
      }
    } catch (error) {
      console.error("Error generating hash:", error);
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
        const { cartId } = data;
        const cartItems = await getCartItems(cartId);
        setTotal(cartItems.totalAmount);
        setCart(cartItems.cartItems);
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
    if (!loading) {
      console.log(cart);
    }
  }, [cart, loading]);

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

  return (
    <ClientOnly>
      <Container>
        <div className="flex md:flex-row flex-col gap-8 lg:my-5 my-3 pt-[24px]">
          <div className="w-full flex flex-col ">
            <div className=" flex flex-col  gap-4">
              <div className="font-medium text-xl text-center lg:text-left pb-3">
                Billing Information{" "}
              </div>
              <div className="flex flex-col gap-2">
                <div>Select from saved addresses</div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select address" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-gray-0 z-50">
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* divider */}
              <div className="bg-gray-200/40 w-full h-[0.25px] my-4"></div>
              {/* inputs */}
              <div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4">
                    {" "}
                    {/* input name */}
                    <div className="flex-1  ">
                      <div>First name</div>
                      <div className="pt-2">
                        <Input
                          className=" rounded-md border-gray-200/40"
                          placeholder="Your first name"
                          name="items"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div>Last name</div>
                      <div className="pt-2">
                        <Input
                          className="rounded-md border-gray-200/40"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    {/* input street */}
                    <div>Street Address</div>
                    <div className="pt-2">
                      <Input
                        className="rounded-md border-gray-200/40"
                        placeholder="Your address"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row lg:gap-5 gap-2">
                    <div className="flex-1">
                      <div>Province / State</div>
                      <div className=" pt-2">
                        <ProvinceSelect />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div>City</div>
                      <div className="pt-2">
                        <CitySelect />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex">Zip Code</div>
                      <div className="pt-2">
                        <Input
                          className="rounded-md border-gray-200/40"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    {" "}
                    {/* input name */}
                    <div className="flex-1 ">
                      <div>Email</div>
                      <div className="pt-2">
                        <Input
                          className=" rounded-md border-gray-200/40"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div>Phone</div>
                      <div className="pt-2">
                        <Input
                          className="rounded-md border-gray-200/40"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* Click part */}
                    <Accordion
                      type="single"
                      collapsible
                      className=" items-center w-full bg-gray-0 "
                    >
                      <AccordionItem value="item-1">
                        <div className="flex items-center gap-3">
                          <AccordionTrigger>
                            <Checkbox />
                          </AccordionTrigger>
                          <label
                            htmlFor="terms"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Ship to a different address.
                          </label>
                        </div>
                        <AccordionContent>{shippinginfo()}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* divider */}
                <div className="bg-gray-200/40 w-full h-[0.25px] mt-6"></div>
              </div>
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
              <div className="flex items-center gap-3 pt-4">
                <Checkbox />
                <label
                  htmlFor="terms"
                  className=" text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save details for next time.
                </label>
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
                  <Button className="w-full" onClick={generateHash}>
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

// const [formData, setFormData] = useState({
//   merchant_id: "1225340",
//   return_url: "http://localhost:3001",
//   cancel_url: "http://localhost:8080/api/v1/payhere/generate-hash",
//   notify_url: "https://green-supermarket-customer-frontend.vercel.app/",
//   order_id: "ItemNo12345",
//   items: "Door bell wirelesss",
//   currency: "LKR",
//   amount: "100",
//   first_name: "Samaan",
//   last_name: "Pereraa",
//   email: "wasath.vt@gmail.com",
//   phone: "0771234561",
//   address: "No.1, Galle Road,Col",
//   city: "Colombos",
//   country: "Sri Lankas",
//   delivery_address: "No. 46, Galle road, Kalutara South",
// });

// console.log(total.toString());
// console.log(formData.amount);

// <div>
//   <input
//     type="text"
//     name="order_id"
//     value={formData.order_id}
//     onChange={(e) =>
//       setFormData({ ...formData, order_id: e.target.value })
//     }
//   />
//   {/* Other form inputs... */}
//   <button onClick={generateHash}>Generate Hash & Pay</button>
// </div>

// const redirectToPaymentCheckout = (hash: any) => {
//   const form = document.createElement("form");
//   form.method = "POST";
//   form.action = "https://sandbox.payhere.lk/pay/checkout";

//   Object.keys(formData).forEach((key) => {
//     if (key !== "hash") {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = key;
//       input.value = formData[key as keyof typeof formData];
//       form.appendChild(input);
//     }
//   });

//   const hashInput = document.createElement("input");
//   hashInput.type = "hidden";
//   hashInput.name = "hash";
//   hashInput.value = hash;
//   form.appendChild(hashInput);

//   document.body.appendChild(form);
//   form.submit();
// };

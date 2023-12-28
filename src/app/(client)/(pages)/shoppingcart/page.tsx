"use client";
import { Button, Container, Count } from "@/components/common";
import { ProductList } from "@/data";
import { formatPrice } from "@/utils/shad-utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function ShoppingCart() {
  const totalPrice = ProductList.reduce(
    (total, product) => total + product.currentPrice,
    0
  );

  return (
    <Container>
      <div className="flex flex-col gap-5 mt-5">
        <div className="font-medium text-center w-full text-lg">
          Shopping Cart
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex flex-col w-full items-center gap-6 border border-gray-50 rounded-lg p-5 ">
            <div className="flex flex-row gap-2">
              <div>
                <ShoppingCartIcon className="text-gray-600" />
              </div>
              <div className="text-base text-gray-600">Your cart is empty!</div>
              {/* <div className="border rounded-full py-1 px-4">
                <Count />
              </div> */}
            </div>
            <div>
              <Link href="/products">
                <Button className="bg-green-400/10 hover:bg-green-400 hover:text-gray-0 text-green-400 font-medium">
                  Add more to cart
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/4 w-full border border-gray-50 rounded-lg p-5 flex flex-col gap-4">
            <div className="font-medium text-center lg:text-left">
              Cart Total
            </div>
            <div className="flex flex-col space-y-1.5 text-sm">
              <div className="flex text-xs md:text-sm">
                <span className="flex-1">Subtotal:</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="bg-gray-200/40 w-full h-[0.25px]"></div>

              <div className="flex text-xs md:text-sm">
                <span className=" flex-1">Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="bg-gray-200/40 w-full h-[0.25px]"></div>

              <div className="flex text-xs md:text-sm">
                <span className="flex-1">Total:</span>
                <span className="font-semibold">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <div className="text-center  ">
              <Link href="/Billing">
                <Button className="w-full">Proceed to checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

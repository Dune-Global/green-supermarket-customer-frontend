"use client";

import { ShoppingCart } from "lucide-react";
import { ClientOnly } from "@/components/common";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/common/top-menu/sheet";
import { Separator } from "@/components/common/top-menu/separator";
import { formatPrice } from "@/utils/shad-utils";
import Link from "next/link";
import { Button } from "@/components/common";
import Image from "next/image";
import { useMediaQuery } from "@/hooks";
import { ProductCard } from "../products";
import { ProductList } from "@/data";

const Cart = () => {
  const totalPrice = ProductList.reduce(
    (total, product) => total + product.currentPrice,
    0
  );

  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <ClientOnly>
      <div className="flex justify-end">
        <Sheet>
          {!isMobile && (
            <SheetTrigger className="group  -m-2 flex items-center p-2">
              <div className="relative">
                <ShoppingCart
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0  group-hover:text-gray-400"
                  strokeWidth={1.2}
                />
                <span className=" flex justify-center items-center bg-green-600 rounded-full w-4 h-4 ml-2 text-[8px] text-end font-medium text-gray-50 group-hover:text-gray-0 absolute -top-[6px] -right-[8px]">
                  {ProductList.length}
                </span>
              </div>
              <span className="text-xs pl-4">{formatPrice(totalPrice)}</span>
            </SheetTrigger>
          )}
          {isMobile && (
            <SheetTrigger className="group relative -m-2 flex items-center p-2">
              <ShoppingCart
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0  group-hover:text-gray-400"
                strokeWidth={1.2}
              />
              {isMobile && (
                <span className=" flex justify-center items-center bg-green-600 rounded-full w-4 h-4 ml-2 text-[8px] text-end font-medium text-gray-50 group-hover:text-gray-0 absolute top-[33px] -right-[1px]">
                  {ProductList.length}
                </span>
              )}
            </SheetTrigger>
          )}
          <SheetContent className="flex justify-between w-full flex-col pr-0 sm:max-w-lg">
            {ProductList.length > 0 ? (
              <>
                <div>
                  <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>
                      Shopping Cart ({ProductList.length})
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex w-full flex-col pr-6 overflow-y-auto max-h-[calc(100vh-230px)] md:max-h-[calc(100vh-250px)]">
                    {/* TODO: Cart logic */}
                    {ProductList.map((product, index) => (
                      <div key={index}>
                        <ProductCard
                          productId={product.productId}
                          variant="cart"
                          productImage={product.productImage}
                          productName={product.productName}
                          currentPrice={product.currentPrice}
                        />
                        <Separator className="bg-gray-50" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 pr-6">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex text-xs md:text-sm">
                      <span className=" flex-1">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex text-xs md:text-sm">
                      <span className="flex-1">Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                  <div className="h-full flex flex-col w-full">
                    <SheetFooter>
                      <div className="flex flex-col w-full gap-y-4">
                        <SheetTrigger asChild>
                          <Link href="/checkout">
                            <Button className="w-full">Checkout</Button>
                          </Link>
                        </SheetTrigger>
                        <SheetClose asChild>
                          <Button variant="ghost">Back to shopping</Button>
                        </SheetClose>
                      </div>
                    </SheetFooter>
                  </div>
                </div>
              </>
            ) : (
              <>
                <SheetHeader className="space-y-2.5 pr-6">
                  <SheetTitle>Shopping Cart ({ProductList.length})</SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                  <div
                    aria-hidden="true"
                    className="relative mb-4 h-60 w-60 text-muted-foreground"
                  >
                    <Image
                      src="/hippo-empty-cart.png"
                      fill
                      alt="empty shopping cart hippo"
                    />
                  </div>
                  <div className="text-xl font-semibold">
                    Your cart is empty
                  </div>
                  <SheetTrigger asChild>
                    <Link href="/products">
                      <Button className="text-sm" variant="link">
                        Add items to your cart to checkout
                      </Button>
                    </Link>
                  </SheetTrigger>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </ClientOnly>
  );
};

export default Cart;

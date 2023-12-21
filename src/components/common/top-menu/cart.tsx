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
import { Button } from "@/components/common/buttons";
import Image from "next/image";
import { useBreakpoint, useMediaQuery } from "@/hooks";

const Cart = () => {
  const itemCount = 2;

  const total = 1677;

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
                  {itemCount}
                </span>
              </div>
              <span className="text-xs pl-4">{formatPrice(total)}</span>
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
                  {itemCount}
                </span>
              )}
            </SheetTrigger>
          )}
          <SheetContent className="flex justify-between w-full flex-col pr-0 sm:max-w-lg">
            {itemCount > 0 ? (
              <>
                <div>
                  <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
                  </SheetHeader>
                  <div className="flex w-full flex-col pr-6">
                    {/* TODO: Cart logic */}
                    cart items
                  </div>
                  <Separator className="bg-gray-50" />
                </div>
                <div className="space-y-4 pr-6">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex">
                      <span className="flex-1">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex">
                      <span className="flex-1">Total</span>
                      <span>{formatPrice(total)}</span>
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
                  <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
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
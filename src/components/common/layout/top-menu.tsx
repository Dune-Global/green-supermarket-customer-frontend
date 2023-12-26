"use client";

import { Cart, SearchBar } from "../top-menu";

import { BrandIcon } from "@/components/common";

import { useMediaQuery } from "@/hooks";
import { NavigationMenuAvatar } from "../navigation-menu";
import { ClientOnly } from "@/components/common";
import Link from "next/link";

export default function TopMenu() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <ClientOnly>
      <div className="bg-gray-0  z-50 top-0 flex items-center justify-center h-[70px]">
        <div className="relative mx-auto w-full max-w-[1500px] xl:px-20 md:px-10 sm:px-10 px-6">
          <div className="flex justify-between w-full items-center">
            <div>
              <Link href="/">
                <BrandIcon size="large" mode="dark" />
              </Link>
            </div>
            <div className="hidden lg:flex">
              <SearchBar />
            </div>
            <div className="flex gap-6">
              <div className="lg:hidden">
                <SearchBar />
              </div>
              <Cart />
              {isMobile && <NavigationMenuAvatar />}
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

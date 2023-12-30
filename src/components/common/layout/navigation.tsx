"use client";

import ClientOnly from "../client-only";
import {
  NavigationMenuTextDropdown,
  NavigationMenuAvatar,
  NavigationMenuCategory,
  NavigationMenuHamburger,
} from "../navigation-menu";
import { useMediaQuery } from "@/hooks";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      <div className="bg-green-0  z-50 top-0 flex items-center justify-center h-[60px] ">
        <div className="relative mx-auto w-full max-w-[1500px] xl:px-20 md:px-10 sm:px-10 px-6">
          <div className="flex justify-between items-center">
            <NavigationMenuCategory />
            {!isMobile && <NavigationMenuTextDropdown />}
            {!isMobile && <NavigationMenuAvatar />}
            {isMobile && <NavigationMenuHamburger />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

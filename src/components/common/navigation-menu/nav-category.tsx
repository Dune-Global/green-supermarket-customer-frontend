import { CategoryNavDetails } from "@/data";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/utils/shad-utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/common/navigation-menu/category-menu";

import Image from "next/image";

import { useMediaQuery } from "@/hooks";

const style = {
  navMenu:
    "z-10 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
};

export default function NavigationMenuCategory() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      {/* Category dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>All Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              {isMobile && (
                <ul className="grid gap-3 p-6 w-[200px] md:w-[400px] lg:w-[900px] lg:grid-cols-[.45fr_1fr]">
                  <div className="grid md:grid-cols-2">
                    {CategoryNavDetails.map((components) => (
                      <ListItem
                        key={components.title}
                        title={components.title}
                        href={components.href}
                      ></ListItem>
                    ))}
                  </div>
                </ul>
              )}
              {!isMobile && (
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[900px] lg:grid-cols-[.45fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="relative hidden lg:flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50/50 to-muted no-underline outline-none focus:shadow-md">
                        <Image
                          alt=""
                          src="/assets/images/nav-menu-img.png"
                          objectFit="cover"
                          fill
                          className="rounded-md opacity-90"
                        />
                      </div>
                    </NavigationMenuLink>
                  </li>

                  <div className="grid md:grid-cols-2">
                    {CategoryNavDetails.map((components) => (
                      <ListItem
                        key={components.title}
                        title={components.title}
                        href={components.href}
                      >
                        {components.description}
                      </ListItem>
                    ))}
                  </div>
                </ul>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-400/5 hover:text-gray-800 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-green-600 leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-gray-400/80">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

"use client";
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
  navigationMenuTriggerStyle,
} from "@/components/common/navigation-menu";

import {
  HomeNavDetails,
  OffersNavDetails,
  AccountNavDetails,
  PageLinks,
} from "@/data";

const style = {
  navMenu: "z-10 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
}

export default function NavigationMenuTextDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home dropdown */}
        <NavigationMenuItem>
          {/* <Link href={PageLinks[0].path}> */}
            <NavigationMenuTrigger>{PageLinks[0].title}</NavigationMenuTrigger>
          {/* </Link> */}
          <NavigationMenuContent>
            <ul className={`${style.navMenu}`}>
              {HomeNavDetails.map((components) => (
                <ListItem
                  key={components.title}
                  title={components.title}
                  href={components.href}
                >
                  {components.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Offers dropdown */}
        <NavigationMenuItem>
          <Link href={PageLinks[1].path}>
            <NavigationMenuTrigger>{PageLinks[1].title}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className={`${style.navMenu}`}>
              {OffersNavDetails.map((components) => (
                <ListItem
                  key={components.title}
                  title={components.title}
                  href={components.href}
                >
                  {components.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Profile dropdown */}
        <NavigationMenuItem>
          <Link href={PageLinks[2].path}>
            <NavigationMenuTrigger>{PageLinks[2].title}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className={`${style.navMenu}`}>
              {AccountNavDetails.map((components) => (
                <ListItem
                  key={components.title}
                  title={components.title}
                  href={components.href}
                >
                  {components.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About us dropdown */}
        <NavigationMenuItem>
          <Link href={PageLinks[3].path} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {PageLinks[3].title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact us dropdown */}
        <NavigationMenuItem>
          <Link href={PageLinks[4].path} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {PageLinks[4].title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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

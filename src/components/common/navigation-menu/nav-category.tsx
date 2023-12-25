import React, { useEffect, useState } from "react";
import { cn } from "@/utils/shad-utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/common/navigation-menu/category-menu";

import { getMainCategories } from "@/helpers";
import { Skeleton } from "@/components/common/ui/skeleton";
import { IMainCategoryNavData } from "@/types";

import Image from "next/image";

import { useMediaQuery } from "@/hooks";

const style = {
  navMenu:
    "z-10 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
};

export default function NavigationMenuCategory() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [categories, setCategories] = useState<IMainCategoryNavData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: IMainCategoryNavData[] =
          await getMainCategories();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const renderSkeletons = (): JSX.Element[] => {
    return Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="border border-gray-50 rounded-lg flex flex-col items-center p-4 py-6"
      >
        <Skeleton className="w-auto h-24 md:h-32" />
        <Skeleton
          className="text-center text-md pt-4"
          style={{ width: "80%" }}
        />
      </div>
    ));
  };

  const imageSkeleton = (): JSX.Element[] => {
    return Array.from({ length: 2 }).map((_, index) => (
      <div
        key={index}
        className="border border-gray-50 rounded-lg flex flex-col items-center p-4 py-6"
      >
        <Skeleton className="w-auto h-24 md:h-40" />
        <Skeleton
          className="text-center text-md pt-4"
          style={{ width: "80%" }}
        />
      </div>
    ));
  };

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
                    {loading ? (
                      renderSkeletons()
                    ) : categories.length === 0 ? (
                      <div className="text-center text-gray-500 text-xs md:text-sm">
                        No categories found.
                      </div>
                    ) : (
                      categories.map((components) => (
                        <ListItem
                          key={components.mainCategoryId}
                          title={components.mainCategoryName}
                          href={components.slug}
                        ></ListItem>
                      ))
                    )}
                  </div>
                </ul>
              )}
              {!isMobile && (
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[900px] lg:grid-cols-[.45fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      {loading ? (
                        imageSkeleton()
                      ) : categories.length === 0 ? (
                        <div></div>
                      ) : (
                        <div className="relative hidden lg:flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50/50 to-muted no-underline outline-none focus:shadow-md">
                          <Image
                            alt=""
                            src="/assets/images/nav-menu-img.png"
                            objectFit="cover"
                            fill
                            className="rounded-md opacity-90"
                          />
                        </div>
                      )}
                    </NavigationMenuLink>
                  </li>

                  <div className="grid md:grid-cols-2">
                    {loading ? (
                      renderSkeletons()
                    ) : categories.length === 0 ? (
                      <div className="text-center text-gray-500">
                        No categories found.
                      </div>
                    ) : (
                      categories.map((components) => (
                        <ListItem
                          key={components.mainCategoryId}
                          title={components.mainCategoryName}
                          href={components.slug}
                        >
                          {components.mainCategoryDesc}
                        </ListItem>
                      ))
                    )}
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

"use client";

import { Button, ClientOnly, Container } from "@/components/common";
import { HomeIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { ProductList } from "@/data";
import Image from "next/image";
import { StarRating } from "@/components/common";
import { Count } from "@/components/common";
import Link from "next/link";
import { ItemLogos } from "@/data";
import { formatPrice } from "@/utils/shad-utils";

export default function page({ params }: { params: { item: number } }) {
  const style = {
    path: "font-medium text-xs md:text-sm lg:text-lg text-gray-600",
  };
  const filteredProducts = ProductList.filter(
    (product) => product.productId === Number(params.item)
  );

  return (
    <ClientOnly>
      <Container>
        <div>ProductId: {params.item}</div>
        <div className="pt-[60px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-gray-600">
                    <HomeIcon className="h-[14px] md:h-[20px]" />
                  </div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className={style.path}>Category</div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className={style.path}>{product.mainCategoryName}</div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className="font-medium text-xs md:text-sm lg:text-lg text-green-400">
                    {product.productName}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row pt-[60px] items-center justify-center gap-16 md:gap-12 lg:gap-24">
                  <div className="flex gap-4">
                    <div>
                      <Image
                        src={product.productImage}
                        alt="hero1"
                        width={120}
                        height={40}
                        className="border-2 border-green-400 rounded-xl p-2"
                      />
                    </div>
                    <div>
                      <Image
                        src={product.productImage}
                        alt="hero1"
                        width={360}
                        height={40}
                        className="border-2 border-green-400 rounded-xl p-4"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-16 md:gap-8 lg:gap-16">
                      <div className="text-3xl lg:text-5xl font-semibold">
                        {product.productName}
                      </div>
                      <div
                        className={`flex flex-row items-center text-md md:text-sm lg:text-base rounded-lg md:py-1 lg:py-0 px-3 ${
                          product.stockAvailableUnits > 0
                            ? "text-green-600 bg-green-400/20"
                            : "text-gray-600 bg-gray-400/20"
                        }`}
                      >
                        {product.stockAvailableUnits > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </div>
                    </div>
                    <div className="pt-6 flex flex-row md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 text-gray-400 text-lg">
                      <div className="flex gap-2">
                        <div className="flex items-center">{product.rate}</div>
                        <div className="flex items-center">
                          <StarRating rating={product.rate} size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="pt-10 text-2xl lg:text-4xl font-medium">
                      {formatPrice(product.currentPrice)}{" "}
                      {product.measuringUnit}
                    </div>
                    <div className="pt-10 flex items-center gap-4 w-full">
                      <div className="w-full">
                        <Button className="w-full">
                          Add to cart
                          <ShoppingCartIcon className="pl-2 h-4" />
                        </Button>
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        <Count />
                      </div>
                    </div>
                    <div className="flex items-center pt-8 gap-2">
                      <div className="text-lg">Share item :</div>
                      <div>
                        {ItemLogos.map((item) => (
                          <Link href={item.link} key={item.id}>
                            <Button
                              size="icon"
                              className="transition-all bg-gray-0 group hover:bg-green-400 mx-1"
                            >
                              <item.icon
                                strokeWidth={2}
                                className="transition-all fill-gray-600 group-hover:stroke-green-400 group-hover:fill-gray-0"
                              />
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Product not found</div>
          )}
        </div>
      </Container>
    </ClientOnly>
  );
}

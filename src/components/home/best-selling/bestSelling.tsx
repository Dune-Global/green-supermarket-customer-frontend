"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import { BestSellingDetails } from "@/data";
import React from "react";

export default function BestSelling() {
  return (
    <Container>
      <div className="pb-[60px]">
        <div className="pb-10">
          <p className="uppercase text-green-400 text-center">Best Deals</p>
          <p className="text-2xl md:text-4xl font-semibold pt-4 text-center">
            Best Selling Products
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BestSellingDetails.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              imageSrc={product.imageSrc}
              price={product.price}
              isStock={product.isStock}
              discount={product.discount}
              strikedPrice={product.strikedPrice}
              per={product.per}
              variant="default"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

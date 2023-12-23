"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import { ProductDetails } from "@/data";
import React from "react";

export default function Products() {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {ProductDetails.map((product, index) => (
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
    </Container>
  );
}

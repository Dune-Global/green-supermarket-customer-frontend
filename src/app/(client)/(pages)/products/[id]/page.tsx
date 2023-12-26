"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common";
import { ProductList } from "@/data";
import React from "react";

export default function page({ params }: { params: { id: number } }) {
  const filteredProducts = ProductList.filter(
    (product) => product.mainCategory.mainCategoryId === Number(params.id)
  );
  return (
    <Container>
      <div>page: {params.id}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              productId={product.productId}
              key={index}
              productName={product.productName}
              productImage={product.productImage}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              stockAvailableUnits={product.stockAvailableUnits}
              discountRate={product.discount?.discountRate}
              measuringUnit={product.measuringUnit}
              variant="default"
            />
          ))
        ) : (
          <div>No products found in this category.</div>
        )}
      </div>
    </Container>
  );
}

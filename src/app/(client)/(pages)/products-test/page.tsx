"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import { ProductList } from "@/data";
import React from "react";

export default function Products() {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {ProductList.map((product, index) => (
          <ProductCard
            mainCategoryId={product.mainCategory.mainCategoryId}
            subCatOneId={product.l1Category.subCatOneId}
            subCatOneName={product.l1Category.subCatOneName}
            subCatTwoId={product.l2Category?.subCatTwoId}
            subCatTwoName={product.l2Category?.subCatTwoName}
            productId={product.productId}
            key={index}
            productName={product.productName}
            productImage={product.productImage}
            originalPrice={product.originalPrice}
            currentPrice={product.currentPrice}
            stockAvailableUnits={product.stockAvailableUnits}
            discountRate={product.discount?.discountRate}
            measuringUnit={product.measuringUnit}
            variant="default"
          />
        ))}
      </div>
    </Container>
  );
}

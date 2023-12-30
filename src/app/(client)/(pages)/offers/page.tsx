"use client";

import { Button, Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import { BestSellingDetails } from "@/data";
import React from "react";

export default function BestSelling() {
  return (
    <Container>
      <div className="pt-[60px]">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl">Best Deals</div>
          <div className="font-semibold">
            <Button variant={"outline"} arrow>View all</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
          {BestSellingDetails.map((product, index) => (
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
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              stockAvailableUnits={product.stockAvailableUnits}
              discountRate={product.discount?.discountRate}
              measuringUnit={product.measuringUnit}
              variant="default"
            />
          ))}
        </div>
        <div className="bg-gray-200/40 w-full h-[0.25px] my-[60px]"></div>
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl">Organic Sale</div>
          <div className="font-semibold">
            <Button variant={"outline"} arrow>View all</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
          {BestSellingDetails.map((product, index) => (
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
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              stockAvailableUnits={product.stockAvailableUnits}
              discountRate={product.discount?.discountRate}
              measuringUnit={product.measuringUnit}
              variant="default"
            />
          ))}
        </div>
        <div className="bg-gray-200/40 w-full h-[0.25px] my-[60px]"></div>
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl">Christmas Sale</div>
          <div className="font-semibold">
            <Button variant={"outline"} arrow>View all</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-9">
          {BestSellingDetails.map((product, index) => (
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
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              stockAvailableUnits={product.stockAvailableUnits}
              discountRate={product.discount?.discountRate}
              measuringUnit={product.measuringUnit}
              variant="default"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

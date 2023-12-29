"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import { ProductList } from "@/data";
import { getAllProducts } from "@/helpers";
import { getAllProductsWithSub } from "@/helpers/getAllProductsWithSub";
import { IProductDetailsData } from "@/types";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [allProducts, setAllProducts] = useState<IProductDetailsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: IProductDetailsData[] =
          await getAllProductsWithSub();
        setAllProducts(fetchedCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(allProducts);
    }
  }, [allProducts, loading]);

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {allProducts.map((product, index) => (
          <ProductCard
            mainCategoryId={
              product.mainCategory ? product.mainCategory.mainCategoryId : 0
            }
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

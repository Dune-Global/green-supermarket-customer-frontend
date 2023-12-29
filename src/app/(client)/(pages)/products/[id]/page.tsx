"use client";

import { ClientOnly, Container, ProductCard } from "@/components/common";
import { getAllProducts, getMainCategories } from "@/helpers";
import { IProductDetailsData } from "@/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const [categories, setCategories] = useState<IProductDetailsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProductDetailsData[] = await getAllProducts(params.id);
        setCategories(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [params.id]);

  useEffect(() => {
    if (!loading) {
      console.log(categories);
    }
  }, [categories, loading]);

  return (
    <ClientOnly>
      <Container>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
          {categories.map((product) => (
            <ProductCard
              key={product.productId}
              mainCategoryId={params.id}
              subCatOneId={product.l1Category.subCatOneId}
              subCatOneName={product.l1Category.subCatOneName}
              subCatTwoId={product.l2Category?.subCatTwoId}
              subCatTwoName={product.l2Category?.subCatTwoName}
              productId={product.productId}
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
    </ClientOnly>
  );
}

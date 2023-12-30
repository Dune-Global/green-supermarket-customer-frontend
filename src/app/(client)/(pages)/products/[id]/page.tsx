"use client";

import { ClientOnly, Container, ProductCard } from "@/components/common";
import { Skeleton } from "@/components/common/ui/skeleton";
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

  const renderSkeletons = (): JSX.Element[] => {
    return Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="border border-gray-50 rounded-lg flex flex-col items-center p-4 py-6"
      >
        <Skeleton className="w-auto h-40 md:h-60" />
        <Skeleton
          className="text-center text-md pt-4"
          style={{ width: "80%" }}
        />
      </div>
      // <div
      //   key={index}
      //   className="border border-gray-50 flex items-center space-x-4 rounded-lg justify-between flex-col  p-4 py-8 h-64 md:h-[350px] gap-3"
      // >
      //   <Skeleton className="h-10 md:h-56 md:w-[170px] rounded-md" />
      //   <div className="space-y-2">
      //     <Skeleton className="h-4 w-[250px]" />
      //     <Skeleton className="h-4 w-[200px]" />
      //   </div>
      // </div>
    ));
  };

  return (
    <Container>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {loading
          ? renderSkeletons()
          : categories.map((product) => (
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
  );
}

import { Container } from "@/components/common";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getMainCategories } from "@/helpers";
import { Skeleton } from "@/components/common/ui/skeleton";
import { IMainCategoryData } from "@/types";
import Image from "next/image";

export default function Categories() {
  const [categories, setCategories] = useState<IMainCategoryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: IMainCategoryData[] =
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

  return (
    <Container>
      <div className="py-[60px]">
        <div className="pb-10">
          <p className="uppercase text-green-400 text-center">Category</p>
          <p className="text-2xl md:text-4xl font-semibold pt-4 text-center">
            Shop by Category
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {loading
              ? renderSkeletons()
              : categories?.map((component) => (
                  <div key={component.mainCategoryId}>
                    <Link href={`/products/${component.mainCategoryId}`}>
                      <div className="border border-gray-50 hover:border-green-400 hover:shadow-md hover:shadow-green-400/20 rounded-lg flex flex-col items-center p-4 py-6">
                        <Image
                          src={component.imgUrl}
                          alt={component.mainCategoryName}
                          className="w-auto h-24 md:h-32"
                          width={1000}
                          height={1000}
                        />
                        <p className="text-center text-md pt-4">
                          {component.mainCategoryName}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { Container } from "@/components/common";
import { ProductCard } from "@/components/common/products";
import React, { useEffect, useState } from "react";
import { topDeals } from "@/helpers";
import { Skeleton } from "@/components/common/ui/skeleton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function BestSelling() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    topDeals()
      .then((res) => {
        console.log(res);
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const SkeletonComp = () => {
    return (
      <div className="flex flex-col justify-between place-items-end border border-gray-50  max-w-[325px] min-h-[280px] lg:min-h-[350px] rounded-md shadow-sm py-7 px-4">
        <div className="flex flex-row justify-between w-full"></div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <Skeleton className="w-full h-[20px] rounded-md z-10" />
          <Skeleton className="w-[60%] h-[20px] rounded-md z-10" />
        </div>
      </div>
    );
  };

  const filteredProducts = search
    ? products.filter((product: any) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <Container>
      <>Search: {search}</>
      <div className="pb-[60px]">
        <div className="pb-10">
          <p className="uppercase text-green-400 text-center">Best Deals</p>
          <p className="text-2xl md:text-4xl font-semibold pt-4 text-center">
            Offers & Discounts
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonComp key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product: any, index: any) => (
              <Link
                href={`${BASE_URL}/products/${product.l1Category.mainCategoryId}/${product.productId}`}
                key={product.productId}
              >
                <ProductCard
                  mainCategoryId={product.productId}
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

// "use client";

// import { Container } from "@/components/common";
// import { ProductCard } from "@/components/common/products";
// import { BestSellingDetails } from "@/data";
// import React, { useEffect, useState } from "react";
// import { topDeals } from "@/helpers";
// import { Skeleton } from "@/components/common/ui/skeleton";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export default function BestSelling() {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   const searchParams = useSearchParams();

//   const search = searchParams.get("search");

//   useEffect(() => {
//     topDeals()
//       .then((res) => {
//         console.log(res);
//         setProducts(res);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setLoading(false);
//       });
//   }, []);

//   const SkeletonComp = () => {
//     return (
//       <div className="flex flex-col justify-between place-items-end border border-gray-50  max-w-[325px] min-h-[280px] lg:min-h-[350px] rounded-md shadow-sm py-7 px-4">
//         <div className="flex flex-row justify-between w-full"></div>
//         <div className="w-full flex flex-col gap-2 justify-center items-center">
//           <Skeleton className="w-full h-[20px] rounded-md z-10" />
//           <Skeleton className="w-[60%] h-[20px] rounded-md z-10" />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <Container>
//       <>Search: {search}</>
//       <div className="pb-[60px]">
//         <div className="pb-10">
//           <p className="uppercase text-green-400 text-center">Best Deals</p>
//           <p className="text-2xl md:text-4xl font-semibold pt-4 text-center">
//             Offers & Discounts
//           </p>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {Array.from({ length: 4 }).map((_, index) => (
//               <SkeletonComp key={index} />
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {products.map((product: any, index: any) => (
//               <Link
//                 href={`${BASE_URL}/products/${product.l1Category.mainCategoryId}/${product.productId}`}
//                 key={product.productId}
//               >
//                 <ProductCard
//                   mainCategoryId={product.productId}
//                   subCatOneId={product.l1Category.subCatOneId}
//                   subCatOneName={product.l1Category.subCatOneName}
//                   subCatTwoId={product.l2Category?.subCatTwoId}
//                   subCatTwoName={product.l2Category?.subCatTwoName}
//                   productId={product.productId}
//                   productName={product.productName}
//                   productImage={product.productImage}
//                   originalPrice={product.originalPrice}
//                   currentPrice={product.currentPrice}
//                   stockAvailableUnits={product.stockAvailableUnits}
//                   discountRate={product.discount?.discountRate}
//                   measuringUnit={product.measuringUnit}
//                   variant="default"
//                 />
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }

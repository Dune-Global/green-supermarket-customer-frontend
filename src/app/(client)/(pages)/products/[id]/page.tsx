// "use client";

// import { ClientOnly, Container, PriceRangeSlider } from "@/components/common";
// import { ProductCard } from "@/components/common";
// import { ProductList } from "@/data";
// import React, { useEffect, useState } from "react";
// import { useMediaQuery } from "@/hooks";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./accordion";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   SelectLabel,
//   SelectGroup,
// } from "./select";
// import { IProductDetailsData } from "@/types";

// type RangeType = {
//   min: number;
//   max: number;
// };

// type FetchProductsForCategory = (
//   category: string
// ) => Promise<IProductDetailsData[]>;

// const initialCategory = ""; // Define initial category
// const initialProducts: IProductDetailsData[] = []; // Define initial products
// const fetchProductsForCategory: FetchProductsForCategory = async (category) => {
//   // Define fetchProductsForCategory function
//   // Replace this with your actual implementation
//   return [];
// };

// export default function Page({ params }: { params: { id: number } }) {
//   const [category, setCategory] = useState(initialCategory);
//   const [ProductList, setProductList] =
//     useState<IProductDetailsData[]>(initialProducts);

//   useEffect(() => {
//     // Fetch new products when the category changes
//     fetchProductsForCategory(category).then((newProducts) => {
//       setProductList(newProducts);
//     });
//   }, [category]);

//   const style = {
//     label: "inline-flex items-center",
//     input: "form-radio text-green-500",
//     text: "ml-2 text-gray-900",
//   };

//   const [priceRange, setPriceRange] = React.useState<RangeType>({
//     min: 0,
//     max: 50000,
//   });

//   // State to track max price
//   const [maxPrice, setMaxPrice] = React.useState<number>(50000);

//   const handlePriceRangeChange = (range: RangeType) => {
//     setPriceRange(range);
//   };

//   const isMobile = useMediaQuery("(max-width: 1024px)");
//   const [selectedSubCategory, setSelectedSubCategory] = React.useState<
//     string | null
//   >(null);

//   function handleSubCategoryChange(subCatOneName: string | null) {
//     setSelectedSubCategory(subCatOneName);
//     setCategory(subCatOneName || initialCategory); // Update category state
//   }

//   const subCategoriesSet = new Set<string>();
//   const subCategories = ProductList.filter(
//     (product) => product.mainCategory.mainCategoryId === Number(params.id)
//   ).map((product) => product.l1Category.subCatOneName);

//   const uniqueSubCategories = subCategories.filter((subCat) => {
//     if (subCategoriesSet.has(subCat)) {
//       return false;
//     }
//     subCategoriesSet.add(subCat);
//     return true;
//   });

//   const filteredProducts = ProductList.filter(
//     (product) =>
//       (!selectedSubCategory ||
//         product.l1Category.subCatOneName === selectedSubCategory) &&
//       product.mainCategory.mainCategoryId === Number(params.id) &&
//       product.currentPrice >= priceRange.min &&
//       product.currentPrice <= priceRange.max
//   );
//   const findMaxCurrentPrice = (products: IProductDetailsData[]): number => {
//     return Math.max(...products.map((product) => product.currentPrice), 0);
//   };
//   // Update max price whenever filteredProducts change
//   React.useEffect(() => {
//     const maxPriceFromFilteredProducts = findMaxCurrentPrice(filteredProducts);
//     setMaxPrice(maxPriceFromFilteredProducts);
//   }, [filteredProducts]);

//   return (
//     <ClientOnly>
//       <Container>
//         <div className="flex mt-6 flex-col lg:flex-row justify-between">
//           {isMobile && (
//             <div>
//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value="subCategories">
//                   <AccordionTrigger className="font-medium text-lg">
//                     Subcategories
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="flex flex-col gap-3">
//                       <label className={style.label}>
//                         <input
//                           className={style.input}
//                           type="radio"
//                           name="subCatFilter"
//                           checked={!selectedSubCategory}
//                           onChange={() => handleSubCategoryChange(null)}
//                         />
//                         <span className={style.text}>All</span>
//                       </label>
//                       {uniqueSubCategories.map((subCatOneName, index) => (
//                         <label key={index} className={style.label}>
//                           <input
//                             className={style.input}
//                             type="radio"
//                             name="subCatFilter"
//                             checked={subCatOneName === selectedSubCategory}
//                             onChange={() =>
//                               handleSubCategoryChange(subCatOneName)
//                             }
//                           />
//                           <span className={style.text}>{subCatOneName}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//               <PriceRangeSlider
//                 max={maxPrice}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 filteredProducts={filteredProducts}
//                 products={ProductList}
//               />
//             </div>
//           )}
//           {!isMobile && (
//             <div className="mr-2 min-w-[20%] ">
//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value="subCategories">
//                   <AccordionTrigger className="font-medium text-lg">
//                     Subcategories
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="flex flex-col gap-3">
//                       <label className={style.label}>
//                         <input
//                           className={style.input}
//                           type="radio"
//                           name="subCatFilter"
//                           checked={!selectedSubCategory}
//                           onChange={() => handleSubCategoryChange(null)}
//                         />
//                         <span className={style.text}>All</span>
//                       </label>
//                       {uniqueSubCategories.map((subCatOneName, index) => (
//                         <div key={index}>
//                           <label className={style.label}>
//                             <input
//                               className={style.input}
//                               type="radio"
//                               name="subCatFilter"
//                               checked={subCatOneName === selectedSubCategory}
//                               onChange={() =>
//                                 handleSubCategoryChange(subCatOneName)
//                               }
//                             />
//                             <span className={style.text}>{subCatOneName}</span>
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//               <PriceRangeSlider
//                 max={maxPrice}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 filteredProducts={filteredProducts}
//                 products={ProductList}
//               />
//             </div>
//           )}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 my-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <ProductCard
//                   mainCategoryId={product.mainCategory.mainCategoryId}
//                   subCatOneId={product.l1Category.subCatOneId}
//                   subCatOneName={product.l1Category.subCatOneName}
//                   subCatTwoId={product.l2Category?.subCatTwoId}
//                   subCatTwoName={product.l2Category?.subCatTwoName}
//                   productId={product.productId}
//                   key={index}
//                   productName={product.productName}
//                   productImage={product.productImage}
//                   currentPrice={product.currentPrice}
//                   originalPrice={product.originalPrice}
//                   stockAvailableUnits={product.stockAvailableUnits}
//                   discountRate={product.discount?.discountRate}
//                   measuringUnit={product.measuringUnit}
//                   variant="default"
//                 />
//               ))
//             ) : (
//               <div>No products found in this category.</div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </ClientOnly>
//   );
// }

"use client";

import { ClientOnly, Container, PriceRangeSlider } from "@/components/common";
import { ProductCard } from "@/components/common";
import { ProductList } from "@/data";
import React from "react";
import { useMediaQuery } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "./select";

type RangeType = {
  min: number;
  max: number;
};

export default function Page({ params }: { params: { id: number } }) {
  const style = {
    label: "inline-flex items-center",
    input: "form-radio text-green-500",
    text: "ml-2 text-gray-900",
  };

  const [priceRange, setPriceRange] = React.useState<RangeType>({
    min: 0,
    max: 50000,
  });
  const handlePriceRangeChange = (range: RangeType) => {
    setPriceRange(range);
  };

  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState<
    string | null
  >(null);

  function handleSubCategoryChange(subCatOneName: string | null) {
    setSelectedSubCategory(subCatOneName);
  }

  const subCategoriesSet = new Set<string>();
  const subCategories = ProductList.filter(
    (product) => product.mainCategory.mainCategoryId === Number(params.id)
  ).map((product) => product.l1Category.subCatOneName);

  const uniqueSubCategories = subCategories.filter((subCat) => {
    if (subCategoriesSet.has(subCat)) {
      return false;
    }
    subCategoriesSet.add(subCat);
    return true;
  });

  const filteredProducts = ProductList.filter(
    (product) =>
      (!selectedSubCategory ||
        product.l1Category.subCatOneName === selectedSubCategory) &&
      product.mainCategory.mainCategoryId === Number(params.id) &&
      product.currentPrice >= priceRange.min &&
      product.currentPrice <= priceRange.max
  );

  return (
    <ClientOnly>
      <Container>
        <div className="flex mt-6 flex-col lg:flex-row justify-between">
          {isMobile && (
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="subCategories">
                  <AccordionTrigger className="font-medium text-lg">
                    Subcategories
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3">
                      <label className={style.label}>
                        <input
                          className={style.input}
                          type="radio"
                          name="subCatFilter"
                          checked={!selectedSubCategory}
                          onChange={() => handleSubCategoryChange(null)}
                        />
                        <span className={style.text}>All</span>
                      </label>
                      {uniqueSubCategories.map((subCatOneName, index) => (
                        <label key={index} className={style.label}>
                          <input
                            className={style.input}
                            type="radio"
                            name="subCatFilter"
                            checked={subCatOneName === selectedSubCategory}
                            onChange={() =>
                              handleSubCategoryChange(subCatOneName)
                            }
                          />
                          <span className={style.text}>{subCatOneName}</span>
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <PriceRangeSlider
                onPriceRangeChange={handlePriceRangeChange}
                selectedCategoryId={Number(params.id)} // Pass the selected category ID
                selectedSubCategory={selectedSubCategory}
              />
            </div>
          )}
          {!isMobile && (
            <div className="mr-2 min-w-[20%] ">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="subCategories">
                  <AccordionTrigger className="font-medium text-lg">
                    Subcategories
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3">
                      <label className={style.label}>
                        <input
                          className={style.input}
                          type="radio"
                          name="subCatFilter"
                          checked={!selectedSubCategory}
                          onChange={() => handleSubCategoryChange(null)}
                        />
                        <span className={style.text}>All</span>
                      </label>
                      {uniqueSubCategories.map((subCatOneName, index) => (
                        <div key={index}>
                          <label className={style.label}>
                            <input
                              className={style.input}
                              type="radio"
                              name="subCatFilter"
                              checked={subCatOneName === selectedSubCategory}
                              onChange={() =>
                                handleSubCategoryChange(subCatOneName)
                              }
                            />
                            <span className={style.text}>{subCatOneName}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <PriceRangeSlider
                onPriceRangeChange={handlePriceRangeChange}
                selectedCategoryId={Number(params.id)} // Pass the selected category ID
                selectedSubCategory={selectedSubCategory}
              />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 my-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
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
              ))
            ) : (
              <div>No products found in this category.</div>
            )}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
}

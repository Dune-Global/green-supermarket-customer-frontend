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

export default function Page({ params }: { params: { id: number } }) {
  const style = {
    label: "inline-flex items-center",
    input: "form-radio text-green-500",
    text: "ml-2 text-gray-900",
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
      product.mainCategory.mainCategoryId === Number(params.id)
  );

  return (
    <ClientOnly>
      <Container>
        <div className="flex mt-6 flex-col lg:flex-row justify-between">
          {isMobile && (
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="subCategories">
                  <AccordionTrigger>Filter by Subcategory</AccordionTrigger>
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
              <PriceRangeSlider />
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
                        <>
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
                        </>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <PriceRangeSlider />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
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

"use client";

import {
  Button,
  ClientOnly,
  Container,
  ProductCard,
} from "@/components/common";
import { Slider } from "@/components/common/ui/slider";
import { Skeleton } from "@/components/common/ui/skeleton";
import { getAllProducts, getL1SubCategories, getMainCategories } from "@/helpers";
import { IProductDetailsData, IL1SubCategoryResponse, ISubCategoryBrandResponse } from "@/types";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { useMediaQuery } from "@/hooks";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { getAllBrands } from "@/helpers/getAllBrands";

export default function Page({ params }: { params: { id: number } }) {
  const [categories, setCategories] = useState<IProductDetailsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState([0, 30000]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [l1Subcategories, setL1Subcategories] = useState<IL1SubCategoryResponse[] | null>(null);
  const [brands, setBrands] = useState<ISubCategoryBrandResponse[] | null>(null);

  const handleRangeChange = (value: number[]) => {
    setRange(value);
  };

  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProductDetailsData[] = await getAllProducts(params.id);
        const subCategories: IL1SubCategoryResponse[] = await getL1SubCategories(params.id);
        const brands: ISubCategoryBrandResponse[] = await getAllBrands(params.id);
        setCategories(products);
        setL1Subcategories(subCategories);
        setBrands(brands);
        console.log("brands are", brands);
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

  const style = {
    label: "inline-flex items-center",
    input: "flex items-center justify-center form-radio text-green-500",
    text: "ml-2 text-gray-900",
  };

  const renderSkeletons = (): JSX.Element[] => {
    return Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="border border-gray-50 rounded-lg flex flex-col items-center p-4 py-32"
      >
        <Skeleton className="min-w-[195px] h-40 md:h-6 " />
        <Skeleton className="text-center text-md pt-8" />
      </div>
    ));
  };

  return (
    <Container>
      <ClientOnly>
        <div
          className={`flex mt-6 flex-col lg:flex-row ${loading ? "justify-around" : "justify-between"
            }`}
        >
          {isMobile && (
            <div className="w-full relative">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="subCategories">
                  <AccordionTrigger className="font-medium text-lg">
                    Subcategories
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1 py-2">
                    <div className="flex flex-col rounded-lg max-w-full">
                      <div className="flex flex-col justify-center gap-4">
                        {/* Subcategories */}
                        {l1Subcategories && l1Subcategories.map((subcategory) => (
                          <div key={subcategory.subCategoryId} className="flex items-center gap-1">
                            <input
                              className={`${style.input}`}
                              type="radio"
                              id={subcategory.subCatOneName}
                              name="subcategory"
                              value={subcategory.subCatOneName}
                              checked={selectedSubcategory === subcategory.subCatOneName}
                              onChange={() => setSelectedSubcategory(subcategory.subCatOneName)}
                            />
                            <label className={style.label}>
                              <span className={style.text}>{subcategory.subCatOneName}</span>
                            </label>
                          </div>
                        ))}
                        <Separator className="bg-gray-50/50 my-3 z-50 h-1" />

                        {/* Brand */}
                        <span className="text-lg font-medium">Brand</span>
                        {
                          brands && brands.map((brand) => (
                            <div key={brand.brandId} className="flex items-center gap-1">
                              <input
                                className={style.input}
                                type="radio"
                                id={brand.brandName}
                                name="brand"
                                value={brand.brandName}
                                checked={selectedBrand === brand.brandName}
                                onChange={() => setSelectedBrand(brand.brandName)}
                              />
                              <label className={style.label}>
                                <span className={style.text}>{brand.brandName}</span>
                              </label>
                            </div>
                          ))
                        }
                        <Separator className="bg-gray-50/50 my-3 z-50 h-1" />

                        {/* Price Slider */}
                        <span className="text-lg font-medium">Price</span>
                        <div className="p-5">
                          <Slider
                            minStepsBetweenThumbs={1}
                            max={30000}
                            min={0}
                            step={1}
                            value={range}
                            onValueChange={handleRangeChange}
                            formatLabel={(value) => `${value}`}
                          />
                        </div>
                        <Button
                          onClick={() => {
                            console.log(
                              "Selected Subcategory:",
                              selectedSubcategory
                            );
                            console.log("Selected Brand:", selectedBrand);
                            console.log("Slider Value:", range);
                          }}
                          className="mt-4 font-medium"
                        >
                          <span className="flex gap-4 items-center justify-center">
                            Filter <SlidersHorizontal size={14} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
          {!isMobile && (
            <div className="mr-2 min-w-[20%] ">
              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="subCategories">
                  <AccordionTrigger className="font-medium text-lg">
                    Subcategories
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col rounded-lg max-w-full">
                      <div className="flex flex-col justify-center gap-4">
                        {/* Subcategories */}
                        {l1Subcategories && l1Subcategories.map((subcategory) => (
                          <div key={subcategory.subCategoryId} className="flex items-center gap-1">
                            <input
                              className={`${style.input}`}
                              type="radio"
                              id={subcategory.subCatOneName}
                              name="subcategory"
                              value={subcategory.subCatOneName}
                              checked={selectedSubcategory === subcategory.subCatOneName}
                              onChange={() => setSelectedSubcategory(subcategory.subCatOneName)}
                            />
                            <label className={style.label}>
                              <span className={style.text}>{subcategory.subCatOneName}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator className="bg-gray-50/50 my-3 z-50 h-1" />

                    {/* Brand */}
                    <div className="flex flex-col rounded-lg max-w-full">
                      <span className="text-lg font-medium py-3">Brand</span>
                      <div className="flex flex-col justify-center gap-4">
                        {
                          brands && brands.map((brand) => (
                            <div key={brand.brandId} className="flex items-center gap-1">
                              <input
                                className={style.input}
                                type="radio"
                                id={brand.brandName}
                                name="brand"
                                value={brand.brandName}
                                checked={selectedBrand === brand.brandName}
                                onChange={() => setSelectedBrand(brand.brandName)}
                              />
                              <label className={style.label}>
                                <span className={style.text}>{brand.brandName}</span>
                              </label>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <Separator className="bg-gray-50/50 my-3 z-50 h-1" />
                    <span className="text-lg font-medium">Price</span>

                    {/* Price Slider */}
                    <div className="pt-5">
                      <Slider
                        minStepsBetweenThumbs={1}
                        max={30000}
                        min={0}
                        step={1}
                        value={range}
                        onValueChange={handleRangeChange}
                        formatLabel={(value) => `${value}`}
                      />
                    </div>
                    <Button className="mt-10 font-medium w-full">
                      <span className="flex gap-4 items-center justify-center">
                        Filter <SlidersHorizontal size={14} />
                      </span>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
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
        </div>
      </ClientOnly>
    </Container>
  );
}

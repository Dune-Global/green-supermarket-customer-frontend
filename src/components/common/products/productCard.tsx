"use client";

import React from "react";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/common/buttons";
import Image from "next/image";
import { formatPrice } from "@/utils/shad-utils";
import { ClientOnly } from "@/components/common";
import { deleteCartItem } from "@/helpers";
import { useRouter } from "next/navigation";

type CardProps = {
  mainCategoryId: number;
  subCatOneId: number;
  subCatOneName: string;
  subCatTwoId?: number;
  subCatTwoName?: string;
  cartItemId?: number;
  productId: number;
  productName: string;
  productImage: string;
  originalPrice?: number;
  currentPrice: number;
  stockAvailableUnits?: number;
  measuringUnit?: string;
  discountRate?: number | null;
  variant?: "default" | "cart";
};

const ProductCard: React.FC<CardProps> = ({
  mainCategoryId,
  productId,
  productName,
  productImage,
  originalPrice,
  currentPrice,
  stockAvailableUnits,
  measuringUnit,
  discountRate,
  cartItemId,
  variant = "default",
}: CardProps) => {
  const showOutOfStock = stockAvailableUnits === 0;

  const deleteItem = () => {
    console.log(cartItemId);
    deleteCartItem(cartItemId!)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const router = useRouter();

  const handleClick = () => {
    console.log("mainCategoryId:", mainCategoryId);
    console.log("productId:", productId);
    router.push(`/products/${mainCategoryId}/${productId}`);
  };

  return (
    <div>
      {variant === "default" && (
        <div
          onClick={handleClick}
          className="flex cursor-pointer flex-col justify-evenly items-center border border-gray-50 hover:border-green-400 max-w-[325px] min-h-[280px] lg:min-h-[350px] rounded-md shadow-sm hover:shadow-[0_0px_15px_-3px_rgba(0,0,0,0.25)] hover:shadow-green-400/30 group transition-all p-4"
        >
          {showOutOfStock ? (
            <>
              <div className="flex justify-center sm:justify-between items-center w-full">
                <span className="bg-gray-800 text-gray-0 text-[10px] px-[6px] py-[3px] rounded-[4px] ">
                  Out of Stock
                </span>
                <Button
                  size="sicon"
                  className="hidden sm:inline-flex bg-gray-0 transition-all duration-200 group-hover:bg-green-400 hover:text-gray-0 self-end"
                >
                  <ShoppingCart
                    strokeWidth={1.3}
                    size={17}
                    className=" text-gray-600 transition-all duration-200 group-hover:text-gray-0 "
                  />
                </Button>
              </div>
            </>
          ) : (
            <>
              {discountRate && (
                <>
                  <div className="flex justify-center sm:justify-between items-center w-full">
                    <span className=" bg-red-400 text-gray-0 text-[10px] px-[6px] py-[3px] rounded-[4px] uppercase">
                      {`${discountRate}% off`}
                    </span>
                    <Button
                      size="sicon"
                      className="hidden sm:inline-flex bg-gray-0 transition-all duration-200 group-hover:bg-green-400 hover:text-gray-0 self-end"
                    >
                      <ShoppingCart
                        strokeWidth={1.3}
                        size={17}
                        className=" text-gray-600 transition-all duration-200 group-hover:text-gray-0 "
                      />
                    </Button>
                  </div>
                </>
              )}
              {!discountRate && (
                <>
                  <Button
                    size="sicon"
                    className="hidden sm:inline-flex bg-gray-0 transition-all duration-200 group-hover:bg-green-400 hover:text-gray-0 self-end"
                  >
                    <ShoppingCart
                      strokeWidth={1.3}
                      size={17}
                      className=" text-gray-600 transition-all duration-200 group-hover:text-gray-0 "
                    />
                  </Button>
                </>
              )}
            </>
          )}
          <Image
            className="object-contain max-h-[120px] sm:max-h-[140px] md:max-h-[150px] lg:max-h-[250px] min-w-[200px]"
            src={productImage}
            width={115}
            height={115}
            alt="product image"
          />
          <h3 className="text-center text-xs mt-1 md:mt-0 md:text-sm">
            {productName}
          </h3>
          <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:gap-3 justify-center items-center ">
            <span className=" md:mt-0 md:-mb-0 text-xs text-gray-400 line-through">
              {originalPrice && formatPrice(originalPrice)}
            </span>
            <div className="flex justify-center items-center">
              <span className="text-xs text-green-400 font-medium">
                {formatPrice(currentPrice)}
              </span>
              <span className="text-xs text-green-400 font-medium ">
                /{measuringUnit}
              </span>
            </div>
          </div>
        </div>
      )}
      {variant === "cart" && (
        <div className="flex justify-between items-center gap-6 text-gray-800 my-4">
          <div className="flex items-center gap-4">
            <Image
              className="object-contain max-h-[90px]"
              src={productImage}
              width={100}
              height={100}
              alt="product"
            />
            <div className="flex flex-col">
              <h3 className="text-sm ">{productName}</h3>
              <span className="font-semibold text-xs">
                {formatPrice(currentPrice)}
              </span>
            </div>
          </div>
          <div className="transition-all group hover:border-red-400 border border-gray-400 rounded-full p-[2px] cursor-pointer">
            <X
              onClick={deleteItem}
              className="transition-all group-hover:text-red-400"
              strokeWidth={1.5}
              size={16}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

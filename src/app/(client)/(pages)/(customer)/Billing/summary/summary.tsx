"use client";
import React from "react";
import Image from "next/image";
import { formatPrice } from "@/utils/shad-utils";
type SummaryProps = {
  name: string;
  imageSrc: string;
  price: number;
  discount?: string;
  strikedPrice?: number;
  per?: string;
};

const Summary: React.FC<SummaryProps> = ({
  name,
  imageSrc,
  price,
  discount,
  strikedPrice,
  per,
}: SummaryProps) => {
  return (
    <div className="flex flex-row lg:gap-3 py-1 justify-between items-center">
      <div className="">
        <Image
          className="object-contain md:max-h-[50px] lg:max-h-[60px]  md:min-w-[60px] flex-1 items-start"
          src={imageSrc}
          width={50}
          height={50}
          alt="product image"
        />
      </div>

      <div className="flex-1  justify-center text-left text-xs mt-1 md:mt-0  ">{name}</div>

      <div className="flex-1 flex-col md:flex-row mt-2 md:mt-0 md:gap-3 justify-center items-center ">
        <span className=" md:mt-0 md:-mb-0 text-xs text-gray-400 line-through">
          {strikedPrice && formatPrice(strikedPrice)}
        </span>
        <div className="flex justify-center items-center">
          <span className="text-xs text-green-400 font-medium">
            {formatPrice(price)}
          </span>
          <span className="text-xs text-green-400 font-medium ">{per}</span>
        </div>
      </div>
    </div>
  );
};
export default Summary;

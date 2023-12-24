import { Button, Container } from "@/components/common";
import { HomeIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import productDetails from "@/data/products/productDetails";
import Image from "next/image";
import { StarRating } from "@/components/common/star-rating";
import { Count } from "@/components/common/counter";
import Link from "next/link";
import { ItemLogos } from "@/data/items";

type Props = {};

const Item = (props: Props) => {
  const style = {
    path: "font-medium text-xs md:text-sm lg:text-lg text-gray-600",
  };
  return (
    <Container>
      <div className="pt-[60px]">
        {productDetails.map(
          (product) =>
            product.id === 6 && (
              <div key={product.id}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-gray-600">
                    <HomeIcon className="h-[14px] md:h-[20px]" />
                  </div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className={style.path}>Category</div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className={style.path}>{product.category}</div>
                  <div className="text-md md:text-xl">&gt;</div>
                  <div className="font-medium text-xs md:text-sm lg:text-lg text-green-400">
                    {product.name}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row pt-[60px] items-center justify-center gap-16 md:gap-12 lg:gap-24">
                  <div className="flex gap-4">
                    <div>
                      <Image
                        src="/assets/images/products/tomatoes.png"
                        alt="hero1"
                        width={120}
                        height={40}
                        className="border-2 border-green-400 rounded-xl p-2"
                      />
                    </div>
                    <div>
                      <Image
                        src="/assets/images/products/tomatoes.png"
                        alt="hero1"
                        width={360}
                        height={40}
                        className="border-2 border-green-400 rounded-xl p-4"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-16 md:gap-8 lg:gap-16">
                      <div className="text-3xl lg:text-5xl font-semibold">
                        Tomatoes
                      </div>
                      <div className="flex flex-row items-center text-md md:text-sm lg:text-xl text-green-600 bg-green-400/20 rounded-lg md:py-1 lg:py-0 px-3">
                        {product.isStock}
                      </div>
                    </div>
                    <div className="pt-6 flex flex-row md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 text-gray-400 text-lg">
                      <div className="flex gap-2">
                        <div className="flex items-center">
                          {product.rate}.0
                        </div>
                        <div className="flex items-center">
                          <StarRating rate={product.rate} size={20} />
                        </div>
                      </div>

                      <div className="text-sm md:text-md flex items-center">
                        {product.code}
                      </div>
                    </div>
                    <div className="pt-10 text-2xl lg:text-4xl font-medium">
                      Rs. {product.price}.00 {product.per}
                    </div>
                    <div className="pt-10 flex items-center gap-4 w-full">
                      <div className="w-full">
                        <Button className="w-full">
                          Add to cart
                          <ShoppingCartIcon className="pl-2 h-4" />
                        </Button>
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        <Count />
                      </div>
                    </div>
                    <div className="flex items-center pt-8 gap-2">
                      <div className="text-lg">Share item :</div>
                      <div>
                        {ItemLogos.map((item) => (
                          <Link href={item.link} key={item.id}>
                            <Button
                              size="icon"
                              className="bg-gray-0 hover:bg-green-400 mx-1"
                            >
                              <item.icon
                              strokeWidth={2}
                                className="fill-gray-600 hover:stroke-green-400 hover:fill-gray-0"
                              />
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Container>
  );
};

export default Item;

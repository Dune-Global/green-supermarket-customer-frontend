import React from "react";
import { Button } from "../../common";
import Image from "next/image";
import Conainer from "@/components/common/container";


const goToFreshVegetablesPage = () => {
  window.location.href = 'https://shop.green-supermarket.com/products/1';
};

export default function HeroUp() {
  return (
    <Conainer>
      <div className="flex flex-col lg:flex-row gap-4 py-[24px]">
        <div className="w-full h-1/3 md:h-auto lg:w-2/3 relative overflow-hidden">
          <div className="h-full py-10">
            <Image
            quality={100}
              src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/7ee7c354-0580-49bc-97be-42a71dfd2cb5.png"
              alt="hero1"
              fill
              className="rounded-lg object-center object-cover"
              style={{ zIndex: -1 }}
              priority
            />
            <div className="flex flex-col items-start justify-center text-left text-gray-0 pl-10 h-full pb-4">
              <h1 className="text-[28px] md:text-[44px] font-medium">
                Fresh & Healthy
              </h1>
              <h1 className="text-[28px] md:text-[44px] font-medium pb-8">
                Organic Food
              </h1>
              <div>
                <span className="pr-2 font-medium text-[16px] md:text-[18px]">
                  Sale up to{" "}
                </span>
                <span className="bg-orange-400 rounded-md py-[4px] px-[12px] font-medium text-[16px] md:text-[18px]">
                  30% OFF
                </span>
              </div>
              <p className="pt-4 md:pb-8 invisible md:visible text-sm font-normal">
                Free shipping on all your orders.
              </p>
              <Button variant="white" size="lg" arrow onClick={goToFreshVegetablesPage}>
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-2/3 lg:w-1/3 md:h-auto lg:h-full flex flex-col md:flex-row lg:flex-col gap-4">
          <div
            className="w-full h-64 rounded-lg bg-cover"
            style={{
              backgroundImage:
                "url('https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/f5394720-2ef3-4d79-81db-86c292eb7a55.png')",
            }}
          >
            <div className="text-[14px] pl-10 font-medium pt-8">
              <span>SPECIAL SALE</span>
            </div>
            <div className="text-[30px] pt-2 pl-10 font-medium">
              <span>10% OFF</span>
            </div>
            <div className="text-[14px] pt-2 pl-10 font-normal">
              <span>Only Fruits & Vegetables</span>
            </div>
            <div className="pt-2">
              <Button variant="secondary" size="lg" arrow onClick={goToFreshVegetablesPage}>
                Shop now
              </Button>
            </div>
          </div>
          <div
            className="flex items-center justify-center w-full h-64 rounded-lg bg-cover"
            style={{
              backgroundImage:
                "url('https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/01328697-1bcb-478f-ad87-9b49e8dae4ab.png')",
            }}
          >
            <div className="flex flex-col items-center text-gray-0 w-full h-full justify-center px-4">
              <div className="text-[14px] font-medium">
                <span>BEST DEAL</span>
              </div>
              <div className="text-[28px] md:text-[30px] pt-2 font-normal">
                <span>Special Products </span>
              </div>
              <div className="text-[28px] md:text-[30px] font-normal">
                <span>Deal of the Month</span>
              </div>
              <div className="pt-2">
                <Button variant="secondary" size="lg" arrow onClick={goToFreshVegetablesPage}>
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Conainer>
  );
}

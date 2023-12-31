import React from "react";
import Countdown from "../countdown/countdown";
import { Button } from "../../common";
import Image from "next/image";

const goToFreshVegetablesPage = () => {
  window.location.href = 'https://shop.green-supermarket.com/products/1';
};

export default function CountdownSec() {
  return (
    <div>
      <div className="bg-green-0 flex flex-col md:flex-row items-center justify-center text-center">
        <div className="px-8 pt-8 visible md:invisible lg:visible">
          <Image
            src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/00ae8188-2cca-43f2-be6f-1d18fce8be6f.png"
            alt="countdown-left"
            width={600}
            height={600}
            quality={100}
          />
        </div>
        <div>
          <div className="uppercase text-green-400 pt-11">BEST DEALS</div>
          <div className="text-2xl md:text-4xl font-semibold pt-4">
            <p className="pb-2">Our Special Products</p>
            <p>Deal of the Month</p>
          </div>
          <div className="py-6">
            <Countdown />
          </div>
          <div className="pb-11">
            <Button size="lg" arrow onClick={goToFreshVegetablesPage}>
              Shop now
            </Button>
          </div>
        </div>
        <div className="px-10 visible md:invisible lg:visible">
          <Image
            src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/9206a88a-8f8d-42b7-b7c5-e423b45b5182.png"
            alt="countdown-right"
            width={500}
            height={100}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

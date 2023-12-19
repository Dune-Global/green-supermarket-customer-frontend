import React from "react";
import Countdown from "../countdown/countdown";
import { Button } from "../../common";
import Image from "next/image";

export default function CountdownSec() {
  return (
    <div>
      <div className="bg-green-0 flex flex-col md:flex-row items-center justify-center text-center">
        <div className="px-8 pt-8 visible md:invisible lg:visible">
          <Image
            src="/assets/images/countdown-left.png"
            alt="countdown-left"
            width={600}
            height={600}
          />
        </div>
        <div>
          <div className="text-green-400 text-sm pt-11">BEST DEALS</div>
          <div className="text-2xl md:text-4xl font-semibold pt-4">
            <p className="pb-2">Our Special Products</p>
            <p>Deal of the Month</p>
          </div>
          <div className="py-6">
            <Countdown />
          </div>
          <div className="pb-11">
            <Button size="lg" arrow>
              Shop now
            </Button>
          </div>
        </div>
        <div className="px-10 visible md:invisible lg:visible">
          <Image
            src="/assets/images/countdown-right.png"
            alt="countdown-right"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

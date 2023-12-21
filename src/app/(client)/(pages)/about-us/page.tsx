import { BrandIcon, Container } from "@/components/common";
import { para1, para2, para3 } from "./content";
import Image from "next/image";

export default function AboutUs() {
  const style = {
    plusicon: "md:pt-20 lg:px-14 px-5 text-center",
    plustext: "font-semibold md:text-6xl",
  };
  return (
    <div className="flex flex-col md:gap-5">
    <Container>
      <div className="flex flex-col md:gap-3 ">
        <div className="md:flex text-center md:text-4xl md:gap-2 text-xl font-medium  ">
          Welcome to
          <div className="">
            <span className="text-green-400">GREEN</span>SUPERMARKET
          </div>
        </div>
        <div className="flex flex-col gap-10 text-justify md:leading-loose text-sm py-2">
          {para1}
        </div>

        <div className=" gap-10 items-center md:grid md:grid-cols-2 ">
          <div className="">
            <Image
              src="/assets/images/about-us.png"
              alt="Image 2"
              width={800}
              height={100}
            />
          </div>
          <div className="flex flex-row text-justify md:leading-loose text-sm py-2 ">
            {para2}
          </div>
        </div>
      </div>
    </Container>

    {/* Background Image */}
    <div>
      <div className=" flex items-center  bg-[url('/assets/images/about-us-bg.png')] w-full h-[450px] md:h-96 bg-cover bg-no-repeat bg-center   ">
        <div className="mx-auto w-full max-w-[1500px] xl:px-20 md:px-10 sm:px-10 px-6 ">
          <div className="flex  lg:flex-row flex-col justify-between text-gray-0 w-full items-center h-[100%] my-auto gap-5 lg:gap-28 py-">
            <div className="md:py-5 flex flex-col lg:gap-3 gap-2 ">
              <div className="flex text-sm lg:text-justify md:text-center leading-loose md:w-[px] text-center ">
                {para3}
              </div>
              <div className="lg:pt-9 text-center lg:text-left pt-4">
                Management Board
              </div>
              <div className="flex justify-center lg:justify-start">
              
                <BrandIcon mode="light" />
              </div>
            </div>

            <div className="flex flex-grow justify-center md:gap-14 gap-5 ">
              <div className="flex flex-col md:justify-center items-center">
                <div className="lg:text-5xl md:text-4xl text-lg font-semibold">12,000+</div>
                <div>Products</div>
              </div>
              <div className="bg-gray-0/70 w-[0.25px] lg:h-[200px] md:h-[100px]"/>
              <div className="flex flex-col md:justify-center items-center">
                <div className="lg:text-5xl md:text-4xl text-lg font-semibold">100+</div>
                <div>Staff</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

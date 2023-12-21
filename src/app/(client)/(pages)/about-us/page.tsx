import { BrandIcon, Container } from "@/components/common";
import { para1, para2, para3 } from "./content";
import Image from "next/image";
import { ClientOnly } from "@/components/common";

export default function AboutUs() {
  return (
    <ClientOnly>
      <div className="flex flex-col md:gap-5">
        <Container>
          <div className="flex flex-col md:gap-3 py-6 gap-5 my-6 md:my-8">
            <div className="flex flex-col justify-center gap-[6px] md:flex-row md:items-center lg:justify-start text-center md:text-4xl md:gap-2 text-2xl font-medium  ">
              Welcome to
              <BrandIcon mode="dark" size="large" align="center" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-10 text-justify leading-relaxed md:leading-loose text-base ">
                {para1}
              </div>
              <div className=" md:gap-10 items-center grid lg:grid-cols-2 space-y-2 ">
                <div className="justify-self-center my-4">
                  <Image
                    src="/assets/images/about-us.png"
                    alt="Image 2"
                    width={800}
                    height={100}
                  />
                </div>
                <div className="flex flex-row text-justify leading-relaxed md:leading-loose text-base  ">
                  {para2}
                </div>
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
                    <BrandIcon mode="light" size="small" />
                  </div>
                </div>
                <div className="flex flex-grow justify-center md:gap-14 gap-5 ">
                  <div className="flex flex-col md:justify-center items-center">
                    <div className="lg:text-5xl md:text-4xl text-lg font-semibold">
                      12,000+
                    </div>
                    <div>Products</div>
                  </div>
                  <div className="bg-gray-0/70 w-[0.25px] lg:h-[200px] md:h-[100px]" />
                  <div className="flex flex-col md:justify-center items-center">
                    <div className="lg:text-5xl md:text-4xl text-lg font-semibold">
                      100+
                    </div>
                    <div>Staff</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

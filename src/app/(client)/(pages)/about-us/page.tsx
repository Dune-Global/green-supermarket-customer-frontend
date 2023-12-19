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
              <Image src="/image.png" alt="Image 2" width={800} height={100} />
            </div>
            <div className="flex flex-row text-justify md:leading-loose text-sm py-2 ">
              {para2}
            </div>
          </div>
        </div>
      </Container>

      {/* Background Image */}
      <div
        className=" bg-cover bg-center "
        style={{
          backgroundImage: 'url("/Image/Group 114.png")',
          height: "70vh",
        }}
      >
        <Container>
          <div className="">
            <div>
              <div className="md:grid md:grid-cols-2 flex flex-col items-center">
                <div className="">
                  <div className=" text-gray-0 md:text-left  md:pt-24 md:leading-loose leading-normal text-sm text-justify py-5  ">
                    {para3}
                  </div>
                  <div className=" flex flex-col gap- text-gray-0 md:pt-5 md:items-start items-center">
                    <div className="md:text-xl">Edward Smith </div>
                    <div className="flex md:text-xl text-lg ">
                      CEO-
                      <div>
                        <BrandIcon mode="light" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-gray-0 flex flex-row items-center divide-x  pt-10 text-lg">
                  <div className={style.plusicon}>
                    
                    <span className={style.plustext}>12,000+</span>
                    <div className="">Products</div>
                  </div>
                  

                  <div className={style.plusicon}>
                    <span className={style.plustext}> 100+</span>
                    <div className="">Staff</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

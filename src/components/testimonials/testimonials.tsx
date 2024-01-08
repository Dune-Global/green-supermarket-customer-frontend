import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { StarRating } from "../common/star-rating";
import {ITestimonials} from "@/types"
import axios from "axios";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots !static",
    className:
      "relative max-w-[1500px] xxl:max-w-[1430px] mx-auto xxl:px-8 xl:px-8 md:px-10 sm:px-10 px-6",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          speed: 500,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const [TestimonialsData, setTestimonialsData] = useState<ITestimonials[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/customers/testimonials/all-testimonials");
        setTestimonialsData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="bg-green-0 p-12 grid grid-cols-1">
      <div className="">
        <h2 className="uppercase text-green-400 m-2 text-center">
          Client Testimonials
        </h2>
        <h1 className="text-gray-900 text-2xl md:text-4xl font-semibold m-4 text-center">
          What our Clients Say
        </h1>
        <Slider {...settings}>

          {
          TestimonialsData.map((item,index) => (
            <div key={index}>
              <div className="bg-gray-0 mt-4 mb-4 sm:mx-4 p-8">
                <div>
                  <Image
                    src="/assets/icons/quote.svg"
                    alt="quote"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-base my-5">{item.review}</p>
                <div className="flex flex-row">
                  <div className="">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={item.reviwer.imageUrl as string}
                        alt="person"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row xl:flex-col xxl:flex-row grow">
                    <div>
                      <div className="font-medium pl-5 lg:pl-4">
                        {item.reviwer.firstname +" "+ item.reviwer.lastname}
                      </div>
                      <div className="-2 text-gray-200 pl-5 lg:pl-4">
                        {"Customer"}
                      </div>
                    </div>
                    <div className="flex flex-row grow lg:justify-end pt-2 lg:pt-0 xl:pt-2 xxl:pt-0 xl:justify-start xxl:justify-end xl:pl-4 items-center pl-5 lg:pl-0 xxl:pl-0">
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

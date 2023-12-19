import React from "react";
import { HeroMid } from "@/data/hero";
import Image from "next/image";
import Container from "@/components/common/container";

export default function HeroMiddle() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between p-8 shadow-lg shadow-gray-50/40 rounded-lg">
        {HeroMid.map((components) => (
          <div key={components.id} className="flex flex-row p-4">
            <div className="flex items-center pr-4">
              <Image
                src={components.image}
                alt={components.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-semibold sm:text-md md:text-sm lg:text-md">{components.title}</p>
              <p className="pt-2 text-gray-400 sm:text-[16px] md:text-sm lg:text-[16px]">
                {components.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

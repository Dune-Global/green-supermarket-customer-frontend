import React from "react";
import { HeroDow } from "@/data/hero";
import Image from "next/image";
import { Button } from "../../common";
import Container from "@/components/common/container";

export default function HeroDown() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4 justify-between my-[60px]">
        {HeroDow.map((components) => (
          <div
            key={components.id}
            className={`flex flex-row ${
              components.id === 1 ? "text-gray-900" : "text-gray-0"
            }`}
          >
            <div className="flex items-start justify-center">
              <Image
                src={components.image}
                alt={components.title}
                width={1000}
                height={40}
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg max-h-[550px]"
              />
              <div className="absolute flex flex-col items-center pt-10">
                <div className="text-gray-0 text-center">
                  <h1 className="text-sm font-medium">{components.title}</h1>
                  <p className="mt-4 text-4xl md:text-xl lg:text-4xl">
                    {components.description1}
                  </p>
                  <p className="mt-1 text-4xl md:text-xl lg:text-4xl">
                    {components.description2}
                  </p>
                </div>
                <div className="pt-8">
                  <Button variant="white" size="lg" arrow>
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

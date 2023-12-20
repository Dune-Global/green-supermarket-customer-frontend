import { Container } from "@/components/common";
import React from "react";
import { Category } from "@/data/categories";
import Link from "next/link";

export default function Categories() {
  return (
    <Container>
      <div className="py-[60px]">
        <div className="pb-10">
          <p className="uppercase text-green-400 text-center">Category</p>
          <p className="text-2xl md:text-4xl font-semibold pt-4 text-center">
            Shop by Category
          </p>
        </div>
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Category.map((components) => (
                <div key={components.id}>
                    <Link href={components.link}>
                    <div className="border border-gray-50 hover:border-green-400 hover:shadow-md hover:shadow-green-400/20 rounded-lg flex flex-col items-center p-4 py-6">
                        <img
                        src={components.image}
                        alt={components.title}
                        className="w-auto h-24 md:h-32"
                        />
                        <p className="text-center text-md pt-4">
                        {components.title}
                        </p>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
      </div>
    </Container>
  );
}

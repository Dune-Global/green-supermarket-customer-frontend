"use client";

import {
  TestimonialsSection,
  HeroSection,
  CountdownSection,
  Categories,
  BestSelling,
} from "@/components";

export default function Home() {
  return (
    <>
      <div id="featured" className="scroll-mt-28">
        <HeroSection />
      </div>
      <div id="best-selling" className="scroll-mt-36">
        <BestSelling />
      </div>
      <div id="deals" className="scroll-mt-48">
        <CountdownSection />
      </div>
      <div id="categories" className="scroll-mt-20">
        <Categories />
      </div>
      <div id="testimonials" className="scroll-mt-36">
        <TestimonialsSection />
      </div>
    </>
  );
}

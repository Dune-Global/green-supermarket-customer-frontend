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
    <div>
      <HeroSection />
      <BestSelling />
      <CountdownSection />
      <Categories />
      <TestimonialsSection />
      
    </div>
  );
}

"use client";

import {
  TestimonialsSection,
  HeroSection,
  CountdownSection,
  Categories,
  BestSelling,
} from "@/components";
import Billing from "./(pages)/(customer)/Billing/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BestSelling />
      <CountdownSection />
      <Categories />
      <TestimonialsSection/>
      
    </div>
  );
}

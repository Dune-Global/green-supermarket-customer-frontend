"use client";

import {
  TestimonialsSection,
  HeroSection,
  CountdownSection,
  Categories
} from "@/components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CountdownSection />
      <Categories />
      <TestimonialsSection />
    </div>
  );
}

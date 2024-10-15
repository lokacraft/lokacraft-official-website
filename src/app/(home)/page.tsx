import { AppleCardsCarouselDemo } from "@/components/material/apple";
import { Globe } from "@/components/material/heroglobe";
import Hero from "@/components/material/landing/home/Hero";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <Hero />
      {/* Featured Products */}
      <AppleCardsCarouselDemo />
      {/* Key Features */}
      {/* Testimonial */}
      <div className="h-screen w-full flex items-center justify-center ">
      
      </div>
      
    </div>
  );
}

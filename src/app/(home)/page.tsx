import { AppleCardsCarouselDemo } from "@/components/material/apple";
import { Globe } from "@/components/material/heroglobe";
import AboutHome from "@/components/material/landing/home/AboutHome";
import ContactBanner from "@/components/material/landing/home/ContactBanner";
import FeaturedClient from "@/components/material/landing/home/FeaturedClient";
import Hero from "@/components/material/landing/home/Hero";
import { ValueProposition } from "@/components/material/landing/home/ValueProposition";
import VisiMisi from "@/components/material/landing/home/VisiMisi";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen flex flex-col divide-y-[1.5px] divide-gray-500 overflow-x-hidden">
      {/* Hero */}
      <Hero />
      {/* featured client */}
      <FeaturedClient />
      {/* about home */}
      <AboutHome />
      {/* vision and mission */}
      <VisiMisi />
      {/* Service&Product */}
      {/* Value Proposition */}
      <ValueProposition />
      {/* Featured Products */}
      <AppleCardsCarouselDemo />
      {/* contact banner */}
      <ContactBanner />
      {/* Key Features */}
      {/* Testimonial */}
      {/* <div className="h-screen w-full flex items-center justify-center ">
      
      </div> */}
      
    </div>
  );
}

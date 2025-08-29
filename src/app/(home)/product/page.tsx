import React from "react";
import Hero from "@/components/material/landing/product/Hero";
import {ProductList} from "@/components/material/landing/product/ProductList";
import ProductPhilosophy from "@/components/material/landing/product/ProductPhilosophy";
import { IndustriesMarquee } from "@/components/material/landing/product/IndustriesMarquee";
import ContactBanner from "@/components/material/landing/product/ContactBanner";

function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-[#121212]">
      {/* Hero */}
      <Hero />
      <div className="pt-[40vh] gap-10 text-center flex justify-center flex-col items-center w-full mx-auto">
        <h1 className="text-[86px] font-light">Our Flagship Products</h1>
        <p className="text-[34px] font-extralight">
          We provide comprehensive solutions for all your business <br />
          needs, from marketing to management, with fast, <br />
          professional, and reliable products.
        </p>
      </div>
      <ProductList />
      <ProductPhilosophy />
      <IndustriesMarquee />
      <ContactBanner />
    </div>
  );
}

export default AboutPage;

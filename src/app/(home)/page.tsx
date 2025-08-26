import AboutHome from "@/components/material/landing/home/AboutHome";
import ContactBanner from "@/components/material/landing/home/ContactBanner";
import FeaturedClient from "@/components/material/landing/home/FeaturedClient";
import Hero from "@/components/material/landing/home/Hero";
import ProductService from "@/components/material/landing/home/ProductService";
import WhyChoseUs from "@/components/material/landing/home/WhyChoseUs";
import VisiMisi from "@/components/material/landing/home/VisiMisi";
import OurProduct from "@/components/material/landing/home/OurProduct";
import ProjectCard from "@/components/material/landing/home/ProjectCard";

export default function Home() {
  return (
    <div className="w-screen flex flex-col overflow-x-hidden mx-auto">
      {/* Hero */}
      <Hero />
      {/* featured client */}
      <FeaturedClient />
      {/* about home */}
      <AboutHome />
      {/* vision and mission */}
      <VisiMisi />
      {/* Service&Product */}
      <ProductService />
      <OurProduct />
      <WhyChoseUs />
      <ProjectCard/>
      {/* Value Proposition */}
      {/* Featured Products */}
      {/* <AppleCardsCarouselDemo /> */}
      {/* contact banner */}
      <ContactBanner />
      {/* Key Features */}
      {/* Testimonial */}
      {/* <div className="h-screen w-full flex items-center justify-center ">
      
      </div> */}
      
    </div>
  );
}

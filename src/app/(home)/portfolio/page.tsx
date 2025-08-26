import React from "react";
import Hero from "@/components/material/landing/portfolio/Hero";
import ContactBanner from "@/components/material/landing/portfolio/ContactBanner";
import { ProjectCarousel } from "@/components/material/landing/portfolio/ProjectCarousel";

function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-[#121212]">
      {/* Hero */}
      <Hero />
      <ProjectCarousel />
      <ContactBanner />
    </div>
  );
}

export default AboutPage;

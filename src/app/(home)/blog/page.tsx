import React from "react";
import Hero from "@/components/material/landing/blog/Hero";
import BlogMarquee from "@/components/material/landing/blog/BlogMarquee";
import { BlogGrid } from "@/components/material/landing/blog/BlogGrid";
import ContactBanner from "@/components/material/landing/blog/ContactBanner";

function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-[#121212]">
      {/* Hero */}
      <Hero />
      <BlogMarquee />
      <BlogGrid />
      <ContactBanner />
    </div>
  );
}

export default AboutPage;

"use client";

import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

const words = `Bridging Tradition and Innovation Through Technology`;
function ContactAbout() {
  return (
    <ParallaxBanner className="aspect-[2/1] w-screen h-[55vh]">
      <div className="absolute inset-0 flex flex-col px-[15vh] items-center justify-center gap-y-12 p-6 bg=[#121212] border-y border-y-[#ABFA54]">
        <h1 className="text-[84px] 2xl:text-8xl font-semibold leading-none text-center 2xl:text-left bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
          Ready to Find Right Solution?
        </h1>
        <div className="flex items-center justify-center w-full gap-x-5 flex-row">
          {/* button 1 */}
          <div className="rounded-full p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]">
            {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
            <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
              {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />

              {/* --- KONTEN TEKS --- */}
              {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
              <h2 className="relative text-[46px] font-normal">Get Started</h2>
            </div>
          </div>
          {/* button 2 */}
          <div className="rounded-full p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]">
            {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
            <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
              {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />

              {/* --- KONTEN TEKS --- */}
              {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
              <h2 className="relative text-[46px] font-normal">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
}

export default ContactAbout;

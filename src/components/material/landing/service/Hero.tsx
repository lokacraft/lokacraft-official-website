"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const motto = (
  <div className="leading-[80px] text-[#EAEAEA] text-[82px] font-normal">
    Comprehensive <br />
    Technology Service for <br />
    <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
      Every Business Scale
    </span>
  </div>
);

const desc = (
  <div className="text-white text-center font-thin text-[36px] mt-[50px]">
    From website development to AI/ML implementation, we provide <br />
    integrated digital solutions designed to drive your business <br />
    growth and efficiency.
  </div>
);

function Hero() {
  return (
    <div className="p-8 px-[15vh] inset-0 flex items-center justify-center flex-col bg-[#121212]">
      <h1 className="text-[94px] text-white text-center font-normal -mt-[100px] lg:mt-[10vh]">
        <TextGenerateEffect duration={3} words={motto} />
      </h1>
      <TextGenerateEffect duration={3} words={desc} />
      <div className="rounded-full my-[50px] p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]">
        {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
        <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
          {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />

          {/* --- KONTEN TEKS --- */}
          {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
          <h2 className="relative text-[34px] font-light">
            Lets Work Together
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;

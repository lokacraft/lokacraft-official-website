"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const motto = (
  <div className="leading-[80px] text-[80px]">
    Our Portfolio:
    <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
      Transforming <br />
      Ideas into Digital Reality
    </span>
  </div>
);

const desc = (
  <div className="text-white text-center font-thin text-[34px] mt-[50px]">
    Here are some selected projects that reflect the quality and <br />
    commitment of ArthaLoka Technology in delivering impactful <br />
    digital solutions.
  </div>
);

function Hero() {
  return (
    <div className="p-8 inset-0 flex items-center justify-center flex-col bg-[#121212]">
      <h1 className="text-[94px] text-white text-center font-normal -mt-[100px] lg:mt-[100px]">
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

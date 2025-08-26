"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const motto = (
  <div className="leading-[100px]">
    Exploring Technology,<br />
    <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
      Inspiring Innovation
    </span>
  </div>
);

const desc = (
  <div className="text-white text-center font-normal text-[38px] mt-[50px]">
    Discover insights, stories, and updates about the latest <br />
    technology trends and how they shape our digital future.
  </div>
);

function Hero() {
  return (
    <div className="p-8 inset-0 flex items-center justify-center flex-col bg-[#121212]">
      <h1 className="text-[94px] text-white text-center font-normal -mt-[100px] lg:mt-[100px]">
        <TextGenerateEffect duration={3} words={motto} />
      </h1>
      <TextGenerateEffect duration={3} words={desc} />
    </div>
  );
}

export default Hero;

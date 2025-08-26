import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Team from "../../../../../public/images/about/Group 336.png";

function Hero() {
  const words = `Meet the Minds Behind`;
  return (
    <div className="w-full h-[140vh] relative flex flex-col items-start justify-center bg-gradient-to-b from-[#121212]/40 via-[#121212]/40 to-[#7400B8]/70">
      <div className="text-center top-0 left-0 right-0 mt-[150px] absolute text-[94px] font-medium leading-non w-full">
        Meet The Minds Behind <br />
        <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
          Arthaloka
        </span>
      </div>
      {/* Image */}
      <div className="relative w-full h-full justify-center items-center flex">
        <div className="absolute bottom-[90px] w-[90vw] h-[92vh]  -translate-x-[50px]">
          <Image
            src={Team}
            alt="Foto tim"
            layout="fill"
            objectFit="contain"
            className="translate-y-[80px]"
          ></Image>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <svg
          viewBox="0 0 1200 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Titik kontrol Q diubah dari 600,50 menjadi 600,-80 */}
          <path
            d="M0,120 Q600,-80 1200,120 L1200,120 L0,120 Z"
            fill="#121212"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;

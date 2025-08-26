import { FocusCards1 } from "@/components/ui/focus-cards1";
import React from "react";
import Mission1 from "../../../../../public/images/home/Mission1.png";
import Mission2 from "../../../../../public/images/home/Mission2.png";
import Mission3 from "../../../../../public/images/home/Mission3.png";
import Mission4 from "../../../../../public/images/home/Mission4.png";

function VisiMisi() {
  const cards = [
    {
      title: "Empowering Authentic Solutions",
      src: Mission1,
    },
    {
      title: "Collaborative Innovation",
      src: Mission2,
    },
    {
      title: "Human-Centered Design",
      src: Mission3,
    },
    {
      title: "Sustainable Growth",
      src: Mission4,
    },
  ];
  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative bg-[#121212]">
      {/* header */}
      <div className="pt-5 mx-auto">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">2</h1>
        </div>
      </div>
      <div className="flex flex-col items-start ml-4 lg:justify-start">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">
          Our Vision & Mission
        </div>
        <h1 className="text-[42px] font-medium p-2">
          Driven by Innovation, Anchored by Values
        </h1>
        <div className="gap-y-5 mt-5 flex flex-col p-2">
          {/* vision */}
          <h1 className="text-lg font-semibold text-[#ABFA54] text-[20px]">
            Vision
          </h1>
          <p className="text-[22px] font-light leading-tight">
            Our story at Arthaloka Technology began with the belief that
            technology, when used wisely, can bridge the gap between <br />
            tradition and innovation. We are a pioneer in providing
            human-centered technology solutions.
          </p>

          {/* Mission */}

          <h1 className="text-lg font-semibold text-[#ABFA54] text-[20px]">
            Mission
          </h1>
        </div>
          <div className="p-8 justify-start items-start w-full flex">
            <FocusCards1 cards={cards} />
          </div>
      </div>
    </div>
  );
}

export default VisiMisi;

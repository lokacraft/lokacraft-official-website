import React from "react";
import Image from "next/image";
import Union from "../../../../../public/images/about/Union.png";
import artha from "../../../../../public/images/about/artha.png";
import loka from "../../../../../public/images/about/loka.png";
import Mission1 from "../../../../../public/images/home/Mission1.png";
import Mission2 from "../../../../../public/images/home/Mission2.png";
import Mission3 from "../../../../../public/images/home/Mission3.png";
import Mission4 from "../../../../../public/images/home/Mission4.png";
import { FocusCards2 } from "@/components/ui/focus-cards2";

const AboutUs = () => {
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
    <div className="bg-[#121212] flex flex-col py-20 relative h-full w-full text-center justify-center items-center">
      <h1 className="text-[94px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8] mb-[30px] text-transparent bg-clip-text">
        About Us
      </h1>
      <div className="flex flex-col text-center relative  mt-5 py-10">
        <h1 className="text-[92px] z-10 font-light text-center leading-none mb-16 bg-transparent">
          Our Philosophy: The <br />
          Soul of Our Innovation
        </h1>
        <p className="text-[38px] z-10 text-center font-thin leading-tight bg-transparent">
          Our story at ArthaLoka Technology began with the belief that <br />
          technology, when used wisely, can bridge the gap between <br />
          tradition and innovation. We are a pioneer in providing <br />
          human-centered technology solutions.
        </p>
        <div className="z-0 flex justify-center items-center">
          <Image
            src={Union}
            alt="Union"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className="my-[30vh] flex flex-col  h-full w-[85%]">
        <h1 className="text-[88px] font-regular text-center leading-snug">
          Driven by Innovation, <br />
          Anchored by Values
        </h1>
        <div className="flex flex-row w-full justify-start gap-x-[12vw] p-8 mt-[70px] mx-auto items-start">
          <h3 className="text-[62px] text-[#ABFA54]  font-normal pl-11 -translate-y-3">
            Vision
          </h3>
          <p className="text-left text-[38px] font-light leading-tight">
            Our story at ArthaLoka Technology began <br />
            with the belief that technology, when used <br />
            wisely, can bridge the gap between <br />
            tradition and innovation. We are a pioneer <br />
            in providing human-centered technology <br />
            solutions.
          </p>
        </div>
        <div className="flex flex-row w-full justify-start p-8 mt-[70px] mx-auto items-start">
          <h3 className="text-[62px] text-[#ABFA54] flex font-normal pl-11 -translate-y-4">
            Mission
          </h3>
          <FocusCards2 cards={cards}></FocusCards2>
        </div>
      </div>
      <div className="flex flex-col text-center justify-start items-center size-full mx-auto">
        <h1 className="text-[94px] pt-12">The Story of Arthaloka</h1>
        <p className="text-[40px] pt-8 leading-tight">
          Arthaloka Technology is a digital company committed to <br />
          delivering innovative and impactful technology solutions that <br />
          support the advancement of MSMEs, education, and industry <br />
          in Indonesia. Rooted in the philosophy behind our name
        </p>
        <div className="flex flex-row justify-center items-center p-8 mt-6 gap-x-8">
            <div className="flex flex-col relative w-[530px] aspect-video h-[320px] leading-tight text-center justify-center items-center">
                <Image src={artha} alt="artha" layout="fill" objectFit="cover" className="z-0 rounded-2xl"/>
                <h3 className="text-[#ABFA54] text-[60px] z-10 font-medium">
                    Artha
                </h3>
                <p className="text-[40px] font-extralight z-10">
                    Value/Benefit
                </p>
            </div>
            <div className="flex flex-col relative w-[530px] h-[325px] leading-tight text-center justify-center items-center">
                <Image src={loka} alt="artha" layout="fill" objectFit="cover" className="z-0 rounded-2xl"/>
                <h3 className="text-[#ABFA54] text-[60px] z-10 font-medium">
                    Loka
                </h3>
                <p className="text-[40px] font-extralight z-10">
                    Society/World
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

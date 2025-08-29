import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import React from "react";

import AboutUs from "../../../../../public/images/about/AboutUs.png";
import Image from "next/image";

function AboutHome() {
  return (
    <div className="w-full h-full p-[15vh] relative flex flex-row gap-x-6 border-y border-y-[#ABFA54] bg-[#121212] mx-auto">
      {/* header */}
      <div className="pt-5 w-[5%] mx-auto">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">1</h1>
        </div>
      </div>
      {/* body */}
      <div className="flex flex-col lg:flex-col w-[50%] items-start ml-4 mt-2 lg:justify-start mx-auto">
        <div className="text-[#ABFA54] w-40 p-2 text-[20px]">About Us</div>
        {/* top */}
        <div className="lg:hidden bg-red-300">
          <div className=" bg-gray-600 rounded-lg">
            <Image
              src={AboutUs}
              alt="perpenka"
              quality={100}
              layout="fill"
              className="size-[30] object-contain"
            />
          </div>
        </div>
        {/* left */}
        <div className="flex flex-col gap-y-3 lg:flex-[0.45]">
          <h1 className="text-white text-[40px] font-medium leading-snug">
            Our Philosophy: The Soul of <br />
            Our Innovation
          </h1>
          <span className="text-[20px] font-light leading-tight">
            Our story at Arthaloka Technology began with the belief <br />
            that technology, when used wisely, can bridge the gap <br />
            between tradition and innovation. We are a pioneer in <br />
            providing human-centered technology solutions.
          </span>
          <Link
            href="/about"
            className="text-lg font-semibold flex items-center gap-x-2 mt-2"
          >
            <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
              Learn More{" "}
            </span>
            <HiOutlineArrowLongRight className="size-10 text-[#7400B8]" />
            {/* <ArrowRight className="text-lg" /> */}
          </Link>
        </div>
      </div>
      {/*right */}
      <div className="hidden relative lg:flex  pl-10 rounded-lg">
        <div className=" h-[450px] w-[550px] rounded-lg">
          <Image
            src={AboutUs}
            alt="perpenka"
            layout="fill"
            className="object-cover rounded-2xl flex"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHome;

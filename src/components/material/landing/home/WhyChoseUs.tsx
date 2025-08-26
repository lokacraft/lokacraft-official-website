import React from "react";

const WhyChoseUs = () => {
  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative">
      {/* header */}
      <div className="pt-5">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">5</h1>
        </div>
      </div>
      <div className="flex flex-col items-start ml-4 lg:justify-start">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">
          Why Choose Us?
        </div>
        <h1 className="text-[42px] font-medium">
          Your Trusted Digital <br />
          Transformation Partner
        </h1>
      </div>
      <div className="flex flex-col ml-[140px] gap-y-8">
        <div className="flex flex-col w-[600px] text-[#121212] justify-between h-[360px] rounded-2xl px-7 py-6  bg-[#ABFA54]">
          <h1 className="text-[54px] font-medium leading-none">
            End-to-End <br />
            Solutions
          </h1>
          <p className="text-[28px] font-normal">
            One-stop digital partner for complete <br />
            business transformation.
          </p>
        </div>
        <div className="flex flex-col w-[600px] text-[#121212] justify-between h-[360px] rounded-2xl px-7 py-6  bg-[#ABFA54]">
          <h1 className="text-[54px] font-medium leading-none">
            On-time <br />
            Delivery
          </h1>
          <p className="text-[28px] font-normal">
            Agile Methodology for Predictable <br />
            and timely result.
          </p>
        </div>
        <div className="flex flex-col w-[600px] text-[#121212] justify-between h-[360px] rounded-2xl px-7 py-6  bg-[#ABFA54]">
          <h1 className="text-[54px] font-medium leading-none">
            Quality & <br />
            Security
          </h1>
          <p className="text-[28px] font-normal">
            Enterprise-grade standards to ensure <br />
            quality and safety in every project.
          </p>
        </div>
        <div className="flex flex-col w-[600px] text-[#121212] justify-between h-[360px] rounded-2xl px-7 py-6  bg-[#ABFA54]">
          <h1 className="text-[54px] font-medium leading-none">
            Proven <br />
            Expertise.
          </h1>
          <p className="text-[28px] font-normal">
            Serving from startups to enterprises <br />
            in various Industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;

import React from "react";

const cardData = [
  {
    title: (
      <>
        End-to-End <br />
        Solutions
      </>
    ),
    description: (
      <>
        One-stop digital partner for complete <br />
        business transformation.
      </>
    ),
  },
  {
    title: (
      <>
        On-time <br />
        Delivery
      </>
    ),
    description: (
      <>
        Agile Methodology for Predictable <br />
        and timely result.
      </>
    ),
  },
  {
    title: (
      <>
        Quality & <br />
        Security
      </>
    ),
    description: (
      <>
        Enterprise-grade standards to ensure <br />
        quality and safety in every project.
      </>
    ),
  },
  {
    title: (
      <>
        Proven <br />
        Expertise.
      </>
    ),
    description: (
      <>
        Serving from startups to enterprises <br />
        in various Industries.
      </>
    ),
  },
];

const WhyChoseUs = () => {
  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative">
      {/* header */}
      <div className="pt-5">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">5</h1>
        </div>
      </div>
      <div className="flex flex-col items-start ml-6 leading-tight mt-2 lg:justify-start">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">
          Why Choose Us?
        </div>
        <h1 className="text-[38px] leading-tight font-semibold">
          Your Trusted Digital <br />
          Transformation Partner
        </h1>
      </div>
      <div className="flex flex-col ml-[140px] gap-y-8">
        {cardData.map((card, index) => (
          <div
            key={index} // `key` unik sangat penting untuk perulangan
            className="flex flex-col w-[580px] text-[#121212] justify-between h-[360px] rounded-2xl px-7 py-6 bg-[#ABFA54]"
          >
            <h1 className="text-[50px] font-medium leading-none">
              {card.title}
            </h1>
            <p className="text-[30px] font-light leading-tight">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoseUs;

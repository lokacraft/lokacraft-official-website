import React from "react";
import Image, { StaticImageData } from "next/image";
import Service1 from "../../../../../public/images/home/Service1.png";
import Service2 from "../../../../../public/images/home/Service2.png";
import Service3 from "../../../../../public/images/home/Service3.png";
import Service4 from "../../../../../public/images/home/Service4.png";
import Service5 from "../../../../../public/images/home/Service5.png";
import Service6 from "../../../../../public/images/home/Service6.png";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface ServiceItem {
  image: StaticImageData | string;
  title: string;
  tags: string;
}

const servicesData: ServiceItem[] = [
  {
    image: Service1,
    title: "Website Development",
    tags: "Company Profile, E-Commerce, Custom",
  },
  {
    image: Service2,
    title: "Mobile Apps",
    tags: "Android, IOS, Hybrid Apps For Business",
  },
  {
    image: Service3,
    title: "System Integration",
    tags: "Enterprise Solution, CRM, API",
  },
  {
    image: Service4,
    title: "Cloud Service",
    tags: "Server Management, Hosting, Backup",
  },
  {
    image: Service5,
    title: "Training & Consulting",
    tags: "Digital Transformation, IT Training",
  },
  {
    image: Service6,
    title: "Enterprise Solution",
    tags: "Custom Software Development",
  },
];

// Helper function untuk mengelompokkan array menjadi pasangan
function chunkArray(array: ServiceItem[], size: number) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

function ProductService() {
  const servicePairs = chunkArray(servicesData, 2);

  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative border-y border-y-[#ABFA54] bg-[#121212]">
      {/* header */}
      <div className="pt-5">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">3</h1>
        </div>
      </div>
      <div className="flex flex-col  ml-6 lg:justify-start leading-none mt-2 w-[90%]">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">Our Service</div>
        <h1 className="text-[42px] font-medium p-2 mb-10">
          End-to-end Digital Solutions for Your Business
        </h1>
        {servicePairs.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-x-6 flex-row w-full py-3 px-2"
          >
            {/* 5. Looping untuk setiap kartu di dalam baris */}
            {pair.map((service, cardIndex) => (
              <div
                key={cardIndex}
                className="flex flex-row rounded-lg p-4 w-[50%] bg-[#332D36]"
              >
                <div className="flex flex-row">
                  <div className="relative size-[100px] flex justify-center items-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-4 flex flex-col justify-center items-start space-y-5 text-left">
                  <h1 className="text-[34px] font-normal">{service.title}</h1>
                  <p className="text-[14px] font-light text-[#ABFA54] text-left">
                    {service.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <Link
          href="/services"
          className="text-lg font-semibold flex items-center gap-x-2 mt-2 p-2"
        >
          <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
            Learn More{" "}
          </span>
          <HiOutlineArrowLongRight className="size-10 text-[#7400B8]" />
        </Link>
      </div>
    </div>
  );
}

export default ProductService;

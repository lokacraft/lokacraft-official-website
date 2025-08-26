import React from "react";
import Image from "next/image";
import Service1 from "../../../../../public/images/home/Service1.png";
import Service2 from "../../../../../public/images/home/Service2.png";
import Service3 from "../../../../../public/images/home/Service3.png";
import Service4 from "../../../../../public/images/home/Service4.png";
import Service5 from "../../../../../public/images/home/Service5.png";
import Service6 from "../../../../../public/images/home/Service6.png";
import { Globe } from "lucide-react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function ProductService() {
  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative border-y border-y-[#ABFA54] bg-[#121212]">
      {/* header */}
      <div className="pt-5">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">3</h1>
        </div>
      </div>
      <div className="flex flex-col  ml-4 lg:justify-start  w-[90%]">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">Our Service</div>
        <h1 className="text-[42px] font-medium p-2 mb-10">
          End-to-end Digital Solutions for Your Business
        </h1>
        <div className="flex gap-x-6 flex-row w-full py-3 px-2">
          {/* box 1 */}
          <div className="flex flex-row rounded-lg p-4 w-[50%] bg-[#332D36]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Globe className="text-[#ABFA54] z-20 size-[55px]" />
                <Image
                  src={Service1}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">Website Development</h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Company Profile, E-Commerce, Custom
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-row rounded-lg p-4 bg-[#332D36] w-[50%]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Image
                  src={Service2}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">Mobile Apps</h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Android. IOS, Hybrid Apps For Business
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6 flex-row w-full py-3 px-2">
          {/* box 1 */}
          <div className="flex flex-row rounded-lg p-4 w-[50%] bg-[#332D36]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Image
                  src={Service3}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">System Integration</h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Enterprise Solution, CRM, API
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-row rounded-lg p-4 bg-[#332D36] w-[50%]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Image
                  src={Service4}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">Cloud Services</h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Server Management, Hosting, Backup
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6 flex-row w-full py-3 px-2">
          {/* box 1 */}
          <div className="flex flex-row rounded-lg p-4 w-[50%] bg-[#332D36]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Image
                  src={Service5}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">
                Training & Consulting
              </h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Digital Transformation, IT Training
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex flex-row rounded-lg p-4 bg-[#332D36] w-[50%]">
            <div className="flex flex-row">
              <div className="relative size-[100px] flex justify-center items-center">
                <Image
                  src={Service6}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="px-4 flex flex-col">
              <h1 className="text-[38px] font-semibold">Enterprise Solution</h1>
              <p className="text=[14px] font-light text-[#ABFA54]">
                Custom Software Development
              </p>
            </div>
          </div>
        </div>
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

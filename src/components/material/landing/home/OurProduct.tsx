import React from "react";
import ProductCard from "./ProductCard"

const OurProduct = () => {
  return (
    <div className="w-full p-[15vh] py-[90px] flex flex-row gap-y-5 relative border-y border-y-[#ABFA54] bg-[#121212]">
      {/* header */}
      <div className="pt-5">
        <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
          <h1 className="text-[46px] font-normal text-black">4</h1>
        </div>
      </div>
      <div className="flex flex-col  ml-4 lg:justify-start  w-[90%]">
        <div className="text-[#ABFA54] w-50 p-2 text-[20px]">Our Product</div>
        <h1 className="text-[42px] font-medium p-2 mb-10">
          Ready-to-Use Platform to Accelerate Your Growth
        </h1>
        <ProductCard/>
      </div>
    </div>
  );
};

export default OurProduct;

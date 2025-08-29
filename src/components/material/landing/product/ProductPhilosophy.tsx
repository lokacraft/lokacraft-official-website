import React from "react";
import solution1 from "../../../../../public/images/product/filosofi1.png";
import solution2 from "../../../../../public/images/product/filosofi2.png";
import solution3 from "../../../../../public/images/product/filosofi3.png";
import { SolutionCards } from "@/components/ui/solution-card";

const ProductPhilosophy
 = () => {
  const solution = [
    {
      image: solution1,
      title:
        "Every product is crafted with your experience in mind. We prioritize intuitive interfaces and meaningful features that solve real-world problems.",
    },
    {
      image: solution2,
      title:
        "Built with enterprise-grade standards, our platforms are designed to grow with your business while ensuring your data remains secure and protected.",
    },
    {
      image: solution3,
      title:
        "As an Indonesian company, we understand the local market's unique needs, yet we build our products to meet global standards of quality and innovation.",
    },
  ];

  return (
    <div className="w-full h-full px-[15vh] flex flex-col">
      <h1 className="text-[80px] pt-12 text-center leading-snug">
        The Philosophy Behind <br />
        Our Products
      </h1>
      <SolutionCards cards={solution} />
    </div>
  );
};

export default ProductPhilosophy
;

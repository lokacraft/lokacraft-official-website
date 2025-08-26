import React from "react";
import solution1 from "../../../../../public/images/solutions/solution1.png";
import solution2 from "../../../../../public/images/solutions/solution2.png";
import solution3 from "../../../../../public/images/solutions/solution3.png";
import { SolutionCards } from "@/components/ui/solution-card";

const HumanCentered = () => {
  const solution = [
    {
      image: solution1,
      title:
        "We position ourselves as your strategic partner, working collaboratively to understand your business goals before designing a technological solution.",
    },
    {
      image: solution2,
      title:
        "Our team stays at the forefront of the latest technologies to ensure the solutions we build are not only relevant today but also competitive in the future.",
    },
    {
      image: solution3,
      title:
        "We provide full support from the planning and development stages through to post-launch maintenance.",
    },
  ];

  return (
    <div className="w-full h-full px-[15vh] flex flex-col">
      <h1 className="text-[84px] pt-12 text-center leading-snug">
        A Human-Centered <br />
        Approach in Every Solution
      </h1>
      <SolutionCards cards={solution}/>
    </div>
  );
};

export default HumanCentered;

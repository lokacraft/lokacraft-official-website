import React from "react";
import Alan from "../../../../../public/images/about/Alan.png";
import Yusuf from "../../../../../public/images/about/Yusuf.png";
import Ahadan from "../../../../../public/images/about/Ahadan.png";
import Syadda from "../../../../../public/images/about/Syadda.png";
import { FocusCard3 } from "@/components/ui/focus-cards3";

const Quotes = () => {
  const profiles = [
    {
      name: "Syadda Abdullah",
      quote: "Effective ways of working on earth with technological innovation",
      position: "Chief Commercial Officer",

      image: Syadda,
      classname : "object-contain translate-y-7"
    },
    {
      name: "M. Ahadan Nur Fauzan",
      quote: "Transforming Throughout the world within technology",
      position: "Chief Technology Officer",

      image: Ahadan,
      classname : "object-contain -translate-y-2"
    },
    {
      name: "M. Yusuf Sulaiman",
      quote: "Keep transforming for the Future",
      position: "Chief Financial Officer",

      image: Yusuf,
      classname : "object-contain -translate-y-2"
    },
    {
      name: "Fadhlan Ridhwana M",
      quote:
        "Carrying out transformation with an authentic style that can produce innovative work",
      position: "Chief Executive Officer",
      image: Alan,
      classname : "object-contain translate-y-4"
    },
  ];
  return (
    <main className="min-h-screen bg-[#121212] py-[20vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-[94px] font-thin  leading-tight text-center mb-12">Meet the Minds Behind <br />
        ArthaLoka
        </h1>
        <FocusCard3 profiles={profiles} />
      </div>
    </main>
  );
};

export default Quotes;

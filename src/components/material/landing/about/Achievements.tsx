import React from "react";
import Image from "next/image";
import achievement1 from "../../../../../public/images/about/achievement1.png"
import achievement2 from "../../../../../public/images/about/achievement2.png"

const Achievements = () => {
  return (
    <div className="w-full h-full justify-center items-center text-center relative my-[15vh] bg-[#121212] mx-auto flex flex-col">
      <h1 className="text-[86px] my-[40px]">Recognition & Achievements</h1>
      <p className="text-[34px] font-extralight text-center  w-full h-full">
        Our commitment to meaningful innovation has earned <br />
        recognition at both regional and national levels. These <br />
        achievements validate our vision and fuel our passion to <br />
        continue delivering excellence.
      </p>
      <div className="flex flex-row w-full h-full gap-10  justify-center items-center mt-[35vh]">
        <div className="flex flex-col text-left gap-8 w-[50%]">
            <h1 className="text-[#ABFA54] text-[54px] font-semibold leading-tight">
                National Level Winner - <br />
                P2MW 2025
            </h1>
            <h2 className="text-[30px] font-thin">
                <strong className="font-bold">Penyelenggara:</strong> Ministry of Education, <br />
                Culture, Research, and Technology
            </h2>
            <p className="text-[30px] font-thin">
                Recognized as one of Indonesia&apos;s most <br />
                impactful student enterprises, validating <br />
                our business model and technology <br />
                solutions on a national scale. 
            </p>
        </div>
        <div className="w-[500px] h-[660px] relative p-4 py-[40px]  rounded-2xl">
            <Image src={achievement1} alt="achievement 1" layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>
      </div>
      <div className="flex flex-row w-full h-full gap-10  justify-center items-center mt-[35vh]">
        <div className="w-[500px] h-[660px] relative p-4 py-[40px]  rounded-2xl">
            <Image src={achievement2} alt="achievement 1" layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>
        <div className="flex flex-col text-left gap-8 w-[50%]">
            <h1 className="text-[#ABFA54] text-[54px] font-semibold leading-tight">
                Winner of the Student <br />
                Entrepreneurship <br />
                Program (PKKM) Itenas
            </h1>
            <h2 className="text-[30px] font-thin">
                <strong className="font-bold">Penyelenggara:</strong> National Institute of <br />
                Technology (Itenas)
            </h2>
            <p className="text-[30px] font-thin">
                An early achievement that proved the <br />
                viability and innovation of Arthaloka&apos;s <br />
                business concept at the institutional level. 
            </p>
        </div>
        
      </div>
    </div>
  );
};

export default Achievements;

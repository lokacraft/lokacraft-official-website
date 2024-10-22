"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; // Sesuaikan path import dengan lokasimu

export function ValueProposition() {
  const words = [
    { text: "Security & Scalability" },
    { text: "Scalability & Security" },
    { text: "Security & Scalability" },
    { text: "Scalability & Security" },
    { text: "Security & Scalability.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
      <div className='w-full p-8 flex flex-col gap-y-5'>
      {/* header */}
      <h1 className="text-lg font-semibold text-blue-500">4. Value Proposition</h1>
      <div className="w-full flex items-center justify-between">
      <div className="flex-[0.45] flex flex-col justify-start items-start space-y-3">
        <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold font-sans">
        Why Choose Us:
        </h2>
        {/* test */}
        <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold font-sans">
        Innovation with Integrity
        </h2>
      </div>
      {/* Memanggil komponen TypewriterEffectSmooth */}
      <div className="flex-[0.45] rounded-lg  bg-[#212121] p-9 flex items-center justify-center">
            <TypewriterEffectSmooth words={words} />
      </div>
      </div>

    </div>
  );
}

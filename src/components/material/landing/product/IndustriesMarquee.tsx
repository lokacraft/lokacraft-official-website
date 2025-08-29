"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Asumsi Anda memiliki utilitas cn

export function IndustriesMarquee() {
  // Daftar industri yang akan ditampilkan
  const industries = [
    "SMEs", "Industries", "Education", "Construction", 
    "E-Commerce", "Healthcare", "Technology", "Finance"
  ];

  return (
    <div className="py-[15vh] mb-[4rem] flex flex-col items-center justify-center relative w-full overflow-hidden bg-[#121212]">
      <h2 className="text-[84px] font-bold text-center text-white mb-20">
        Empowering Every <br />
        Industry
      </h2>
      {/* Kontainer Marquee */}
      <div 
        className="relative w-full overflow-hidden"
        // Efek fade di sisi kiri dan kanan
        style={{
          maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
        }}
      >
        <motion.div
          className="flex gap-10 sm:gap-12 md:gap-16 w-max" // w-max agar konten tidak wrap
          // Animasi pergerakan horizontal
          animate={{ x: ['0%', '-50%'] }} 
          transition={{
            ease: 'linear',
            duration: 30, // Durasi untuk satu siklus (lebih lama = lebih lambat)
            repeat: Infinity,
          }}
        >
          {/* Duplikasi konten untuk loop yang mulus */}
          {[...industries, ...industries].map((item, index) => (
            <span 
              key={index}
              className="text-[55px] sm:text-[60px] font-thin whitespace-nowrap
                         bg-gradient-to-t from-[#7400B8] to-[#ABFA54]
                         text-transparent bg-clip-text" // Trik untuk teks gradasi
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // pastikan kamu meng-import cn sesuai project
import { TextGenerateEffect } from "./text-generate-effect";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Menyimpan indeks teks saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengontrol pergantian teks dengan delay
  useEffect(() => {
    const interval = setTimeout(() => {
      // Mengganti teks setiap 2 detik
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Ubah delay sesuai kebutuhan (misalnya 2 detik)

    return () => clearTimeout(interval);
  }, [currentIndex, words.length]);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        key={currentIndex} // Tambahkan key untuk memicu animasi ulang saat teks berubah
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }} // Transisi smooth
        className="overflow-hidden pb-2"
      >
        <div
          className="text-xl md:text-2xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {/* Hanya menampilkan teks berdasarkan currentIndex */}
          <TextGenerateEffect words={words[currentIndex].text} />
          
        </div>
      </motion.div>
      
    </div>
  );
};

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface HorizontalBlogCardProps {
  image: StaticImageData | string;
  tag: string;
  title: string;
  date: string;
  className?: string;
}

export function HorizontalBlogCard({
  image,
  tag,
  title,
  date,
  className = "",
}: HorizontalBlogCardProps) {
  return (
    <div
      className={`relative w-full max-w-[34rem] justify-start mx-auto flex flex-col md:flex-row items-stretch bg-[#ABFA54] rounded-2xl overflow-hidden border border-[#ABFA54]/50 ${className}`}
    >
      {/* Kolom Kiri: Gambar */}
      <div className="relative w-full md:w-[50%] h-48 md:h-auto flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "contain" }} // 'contain' akan menjaga rasio aspek
          className="z-10 p-2 ml-3" // 'p-4' memberi sedikit ruang di sekitar gambar
        />
      </div>

      {/* Kolom Kanan: Konten Teks */}
      <div className="flex flex-col justify-between p-6 text-black w-full">
        <div className="-space-y-2 mb-3">
          {/* Tag */}
          <span className="inline-block text-xs text-black px-3 border border-[#7400B8] py-1 rounded-full mb-3">
            {tag}
          </span>
          {/* Judul */}
          <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        </div>
        {/* Tanggal */}
        <p className="text-sm text-black font-normal mt-4 self-start">{date}</p>
      </div>
    </div>
  );
}
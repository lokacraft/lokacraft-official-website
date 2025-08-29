"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HorizontalBlogCardProps {
  slug: string;
  image: StaticImageData | string;
  tag: string;
  title: string;
  date: string;
  className?: string;
}

export function HorizontalBlogCard({
  slug,
  image,
  tag,
  title,
  date,
  className = "",
}: HorizontalBlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="inline-block">
      <div
        className={`relative w-[550px] h-[200px] flex bg-[#ABFA54] rounded-2xl overflow-hidden border border-[#ABFA54]/50 cursor-pointer ${className}`}
      >
        {/* Kolom Kiri: Gambar */}
        <div className="relative w-[50%] h-full flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="z-10"
          />
        </div>

        {/* Kolom Kanan: Konten Teks */}
        <div className="flex flex-col justify-between p-4 text-black w-[50%]">
          <div className="-space-y-1">
            {/* Tag */}
            <span className="inline-block text-xs text-black px-3 border border-[#7400B8] py-1 rounded-full mb-2">
              {tag}
            </span>
            {/* Judul */}
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          </div>
          {/* Tanggal */}
          <p className="text-sm text-black font-normal">{date}</p>
        </div>
      </div>
    </Link>
  );
}

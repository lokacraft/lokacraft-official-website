"use client";

import React from "react";
import Link from "next/link";
import { BlogPostCards } from "./BlogPostCard";

// Impor gambar Anda
import blog1 from "../../../../../public/images/blog/blog1.png";
import blog2 from "../../../../../public/images/blog/blog2.png";
import blog3 from "../../../../../public/images/blog/blog3.png";

// Data sampel berdasarkan screenshot Anda
const blogPosts = [
  {
    slug: "masa-depan-ai",
    image: blog1,
    tag: "Ini Topik Blog",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "22 Agustus 2025",
  },
  {
    slug: "aplikasi-cloud-umkm",
    image: blog2,
    tag: "Topik Lain",
    title: "Aplikasi Cloud untuk Efisiensi UMKM",
    date: "22 Agustus 2025",
  },
  {
    slug: "bisnis-teknologi",
    image: blog3,
    tag: "Bisnis",
    title: "Digitalisasi untuk UMKM: Langkah Kecil, Dampak Besar",
    date: "22 Agustus 2025",
  },
];

export function BlogGrid() {
  return (
    <section className="w-full bg-[#121212] text-white flex justify-center items-center py-[25vh]">
      <div className="mx-auto">
        <h2 className="text-[84px] font-bold text-center mb-12">
          Beberapa yang Sedang Hangat
        </h2>
          <BlogPostCards cards={blogPosts} />
          {/* Kontainer Grid */}
      </div>
    </section>
  );
}

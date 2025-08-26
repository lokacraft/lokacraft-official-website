"use client";

import React from "react";
import Image, { StaticImageData } from "next/image"; // Impor StaticImageData jika belum
import { HorizontalBlogCard } from "@/components/ui/HorizontalBlogCard"; // Sesuaikan path jika perlu
import blog1 from "../../../../../public/images/blog/blog1.png";
import { motion } from "framer-motion"; // Impor motion

// Tentukan tipe data untuk setiap item blog
interface BlogPost {
  image: StaticImageData | string;
  tag: string;
  title: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  // Nama diubah menjadi jamak (plural)
  {
    image: blog1,
    tag: "Artificial Intelligence",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "22 Agustus 2025",
  },
  {
    image: blog1,
    tag: "Web Development",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "20 Agustus 2025",
  },
  {
    image: blog1,
    tag: "Teknologi",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "18 Agustus 2025",
  },
  {
    image: blog1,
    tag: "Produktifitas",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "15 Agustus 2025",
  },
];

const BlogMarquee = () => {
  return (
    <div className="flex flex-col py-[10vh] bg-[linear-gradient(to_top,#7400B8_0%,#000000_59%,#7400B8_100%)] mt-[35vh] mb-[30vh]">
        <h1 className="text-center text-[84px] font-normal mb-12">
            Beberapa yang Sedang <br />
            Hangat
        </h1>
      <div className="relative w-full overflow-hidden py-12">
        {/* Kontainer Marquee */}
        <motion.div
          className="flex w-max gap-8" // w-max agar konten tidak wrap, gap untuk jarak
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Durasi bisa disesuaikan, lebih besar = lebih lambat
            repeat: Infinity,
          }}
        >
          {/* Duplikasi konten untuk loop yang mulus */}
          {[...blogPosts, ...blogPosts].map((post, index) => (
            // Beri lebar tetap agar kartu konsisten
            <div key={index} className="flex-shrink-0">
              <HorizontalBlogCard
                image={post.image}
                tag={post.tag}
                title={post.title}
                date={post.date}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogMarquee;

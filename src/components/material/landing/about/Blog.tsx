import React from "react";
import { BlogCards } from "@/components/ui/blog-card";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import blog1 from "../../../../../public/images/about/blog1.png";
import blog2 from "../../../../../public/images/about/blog2.png";
import blog3 from "../../../../../public/images/about/blog3.png";

const blogPosts = [
  {
    image: blog1,
    tag: "Website",
    title: "Masa Depan AI dalam Kehidupan Sehari-hari",
    date: "22 Agustus 2025",
  },
  {
    image: blog2,
    tag: "Tech News",
    title: "Aplikasi Cloud untuk Efisiensi UMKM",
    date: "20 Agustus 2025",
  },
  {
    image: blog3,
    tag: "Cyber Security",
    title: "Digitalisasi untuk UMKM: Langkah Kecil, Dampak Besar",
    date: "18 Agustus 2025",
  },
  
];

const Blog = () => {
  return (
    <div className="bg-[#121212] mx-auto flex flex-col justify-center items-center text-center">
      <h1 className="text-[94px] font-light">Blog/Artikel</h1>
      <BlogCards cards={blogPosts} />
      <div className="w-full justify-end flex items-center mb-[15vh]">
        <Link
          href="/about"
          className="text-lg font-semibold flex items-center gap-x-2 mt-2 p-2"
        >
          <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
            Learn More{" "}
          </span>
          <HiOutlineArrowLongRight className="size-10 text-[#7400B8]" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;

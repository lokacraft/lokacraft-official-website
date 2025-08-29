"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "../../../../../firebase";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  imageFileName: string;
  imageUrl: string;
  publishedDate?: Timestamp | null;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  useEffect(() => {
    const q = collection(db, "blogs");
    const unsub = onSnapshot(q, (snap) => {
      const list: BlogPost[] = [];
      snap.forEach((docSnap) => {
        const data = docSnap.data() as Omit<BlogPost, "id" | "imageUrl">;
        list.push({
          id: docSnap.id,
          ...data,
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setBlogPosts(list);
    });

    return () => unsub();
  }, [r2PublicUrl]);

  // mapping untuk BlogPostCards
  const mappedCards = blogPosts.map((b) => ({
    slug: b.slug,
    image: b.imageUrl,
    tag: b.tags?.[0] || "",
    title: b.title,
    date: b.publishedDate
      ? new Date(b.publishedDate.seconds * 1000).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "",
  }));

  return (
    <div className="bg-[#121212] mx-auto flex flex-col justify-center items-center text-center">
      <h1 className="text-[94px] font-light mb-[10vh]">Blog/Artikel</h1>

      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Blog cards */}
        {mappedCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {mappedCards.map((card) => (
              <Link href={`/blog/${card.slug}`} key={card.slug}>
                <div className="relative w-full h-[520px] flex justify-end items-start cursor-pointer">
                  <div className="relative bg-[#ABFA54] p-[2px] h-full rounded-2xl">
                    <div className="bg-black p-2 h-full rounded-2xl overflow-hidden w-full flex flex-col">
                      <div className="relative h-[350px] w-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover rounded-[0.69rem]"
                        />
                      </div>
                      <div className="w-full h-full gap-5 flex justify-start items-start">
                        <div className="p-4 space-y-5 flex items-start justify-start flex-col text-left">
                          <div className="rounded-full p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
                            {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                            <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
                              {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
                              <div
                                className="absolute inset-0 bg-gradient-to-r from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                              />

                              {/* --- KONTEN TEKS --- */}
                              {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                              <h2 className="relative text-[14px] font-normal">
                                {card.tag}
                              </h2>
                            </div>
                          </div>
                          <h3 className="text-white text-[34px] font-semibold leading-none w-full">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-white text-sm w-full justify-start flex px-4 py-2">
                        {card.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-white my-10">Belum ada artikel tersedia.</p>
        )}
      </div>

      <div className="w-full justify-end flex items-center mb-[15vh] mt-10">
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

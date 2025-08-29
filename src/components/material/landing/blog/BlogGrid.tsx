"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { BlogPostCards } from "./BlogPostCard";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  imageFileName: string;
  imageUrl: string;
  publishedDate?: Timestamp | null;
}

export function BlogGrid() {
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
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`
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
    <section className="w-full bg-[#121212] text-white flex justify-center items-center py-[25vh]">
      <div className="mx-auto">
        <h2 className="text-[84px] font-bold text-center mb-12">
          Beberapa yang Sedang Hangat
        </h2>

        {mappedCards.length > 0 ? (
          <BlogPostCards cards={mappedCards} />
        ) : (
          <p className="text-center text-white my-10">
            Belum ada artikel tersedia.
          </p>
        )}
      </div>
    </section>
  );
}

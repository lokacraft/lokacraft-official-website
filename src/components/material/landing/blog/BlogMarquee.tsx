"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { motion } from "framer-motion";
import { HorizontalBlogCard } from "@/components/ui/HorizontalBlogCard";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  imageFileName: string;
  imageUrl: string;
  publishedDate?: Timestamp | null;
}

export const BlogMarquee = () => {
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

  // mapping untuk HorizontalBlogCard
  const mappedPosts = blogPosts.map((b) => ({
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
    <div className="flex flex-col py-[10vh] bg-[linear-gradient(to_top,#7400B8_0%,#000000_59%,#7400B8_100%)] mt-[35vh] mb-[30vh]">
      <h1 className="text-center text-[84px] font-normal mb-12">
        Beberapa yang Sedang <br />
        Hangat
      </h1>
      <div className="relative w-full overflow-hidden py-12">
        <motion.div
          className="flex w-max gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {/* Duplikasi untuk loop mulus */}
          {[...mappedPosts, ...mappedPosts].map((post, index) => (
            <div key={index} className="flex-shrink-0">
              <HorizontalBlogCard
                slug={post.slug}
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

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { db } from "../../../../../firebase"; // sesuaikan path
import { collection, query, where, getDocs, DocumentData } from "firebase/firestore";
import ContactBanner from "@/components/material/landing/blog/ContactBanner";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  content: string;
  imageFileName: string;
  imageUrl: string;
  publishedDate?: { seconds: number };
  relatedPosts?: { slug: string; title: string; ringkasan: string; publishedDate: { seconds: number } }[];
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const snap = await getDocs(q);

      if (snap.empty) {
        setPost(null); // bisa handle 404
        return;
      }

      const doc = snap.docs[0];
      const data = doc.data() as Omit<BlogPost, "id" | "imageUrl">;

      setPost({
        id: doc.id,
        ...data,
        imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
      });
    };

    fetchPost();
  }, [slug, r2PublicUrl]);

  if (!post) return <p className="text-white text-center mt-20">Artikel tidak ditemukan.</p>;

  const formattedDate = post.publishedDate
    ? new Date(post.publishedDate.seconds * 1000).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      <div className="bg-[#121212] text-white w-full h-full p-[15vh]">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Kolom Kiri: Sidebar Artikel Terkait */}
          <aside className="lg:col-span-1 justify-center items-center flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-left w-full">Berkaitan</h2>
            <div className="flex flex-col gap-6 text-left justify-start items-start w-full">
              {post.relatedPosts?.map((related) => (
                <Link href={`/blog/${related.slug}`} key={related.slug}>
                  <div className="group">
                    <h3 className="font-semibold transition-colors">{related.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{related.ringkasan}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(related.publishedDate.seconds * 1000).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <hr className="border-gray-700 mt-6" />
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          {/* Kolom Kanan: Konten Utama Artikel */}
          <main className="lg:col-span-2">
            {/* Judul Utama */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>

            {/* Info Penulis & Tanggal */}
            <div className="flex items-center gap-6 mt-4 mb-6 text-sm text-gray-400">
              <div>
                <span className="text-gray-500">Nama Penulis</span>
                <p className="font-medium text-gray-200">{post.author}</p>
              </div>
              <div>
                <span className="text-gray-500">Tanggal Ditulis</span>
                <p className="font-medium text-gray-200">{formattedDate}</p>
              </div>
            </div>

            {/* Gambar Utama */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
              <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: "cover" }} priority />
            </div>

            {/* Isi Konten */}
            <div className="prose prose-invert prose-lg max-w-none whitespace-pre-wrap">{post.content}</div>
          </main>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}

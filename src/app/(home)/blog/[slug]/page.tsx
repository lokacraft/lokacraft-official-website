import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-data"; // Sesuaikan path jika perlu
import ContactBanner from "@/components/material/landing/blog/ContactBanner";

// Fungsi untuk mencari data post berdasarkan slug
async function getPostData(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound(); // Tampilkan halaman 404 jika post tidak ditemukan
  }
  return post;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return (
    <>
      <div className="bg-[#121212] text-white w-full h-full p-[15vh]">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Kolom Kiri: Sidebar Artikel Terkait */}
          <aside className="lg:col-span-1 justify-center items-center flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-left w-full ">
              Berkaitan
            </h2>
            <div className="flex flex-col gap-6 text-left justify-start items-start  w-full">
              {post.relatedPosts.map((related) => (
                <Link href={`/blog/${related.slug}`} key={related.slug}>
                  <div className="group">
                    <h3 className="font-semibold transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {related.excerpt}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">{related.date}</p>
                    <hr className="border-gray-700 mt-6" />
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          {/* Kolom Kanan: Konten Utama Artikel */}
          <main className="lg:col-span-2">
            {/* Judul Utama */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            {/* Info Penulis & Tanggal */}
            <div className="flex items-center gap-6 mt-4 mb-6 text-sm text-gray-400">
              <div>
                <span className="text-gray-500">Nama Penulis</span>
                <p className="font-medium text-gray-200">{post.author}</p>
              </div>
              <div>
                <span className="text-gray-500">Tanggal Ditulis</span>
                <p className="font-medium text-gray-200">{post.date}</p>
              </div>
            </div>

            {/* Gambar Utama */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Isi Konten */}
            <div className="prose prose-invert prose-lg max-w-none whitespace-pre-wrap">
              {post.content}
            </div>
          </main>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}

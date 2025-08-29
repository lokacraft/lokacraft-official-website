"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DashedGradientBorder } from "@/components/ui/DashedGradientBorder";

// Firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase";

// Tipe Data untuk Produk
interface Product {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageFileName: string;
  fullImageUrl: string; // sudah selalu ada setelah mapping
}

// --- Horizontal Card ---
const HorizontalCard = ({ item }: { item: Product }) => (
  <section className="bg-[#121212] text-white w-full mt-8">
    <DashedGradientBorder
      className="max-w-6xl mx-auto"
      gradientColors={["#ABFA54", "#4C00B8"]}
      borderRadius="1.5rem"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text kiri */}
        <motion.div
          className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-[#ABFA54] text-transparent bg-clip-text">
            {item.title}
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extralight leading-tight text-gray-200">
            {item.description}
          </p>
          <div className="rounded-full w-fit h-fit p-[1px] bg-gradient-to-r mt-5 from-[#ABFA54] to-[#7400B8]">
            {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
            <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
             

              {/* --- KONTEN TEKS --- */}
              {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
              <h2 className="relative text-sm font-normal">{item.tag}</h2>
            </div>
          </div>
        </motion.div>

        {/* Gambar kanan */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={item.fullImageUrl}
            alt={item.title}
            width={500}
            height={300}
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </div>
    </DashedGradientBorder>
  </section>
);

// --- Vertical Card ---
const VerticalCard = ({ item }: { item: Product }) => (
  <section className="bg-[#121212] text-white w-full h-full">
    <DashedGradientBorder
      className="max-w-[32rem] mx-auto h-full flex flex-col"
      gradientColors={["#ABFA54", "#4C00B8"]}
      borderRadius="1.5rem"
    >
      {/* Gambar full di atas */}
      <motion.div
        className="w-full flex justify-center h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-[1.5rem]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={item.fullImageUrl}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text di bawah */}
      <motion.div
        className="w-full text-left p-6 flex flex-col flex-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold bg-[#ABFA54] text-transparent bg-clip-text">
          {item.title}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-extralight leading-tight text-white flex-1">
          {item.description}
        </p>
        <div className="rounded-full w-fit h-fit p-[1px] mt-5 bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
          {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
          <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
            {/* --- KONTEN TEKS --- */}
            {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
            <h2 className="relative text-sm font-normal">{item.tag}</h2>
          </div>
        </div>
      </motion.div>
    </DashedGradientBorder>
  </section>
);

// --- Product List ---
export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
    if (!r2PublicUrl) {
      console.error("R2 Public URL not configured in .env.local");
      setIsLoading(false);
      return;
    }

    const q = collection(db, "products");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items: Product[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<Product, "id" | "fullImageUrl">;
        items.push({
          id: doc.id,
          ...data,
          fullImageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setProducts(items);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading Products...</div>;
  }

  // const isOdd = products.length % 2 !== 0;
  // const pairedProducts = isOdd ? products.slice(0, -1) : products;
  // const lastOddProduct = isOdd ? products[products.length - 1] : null;

  const [firstProduct, ...restProducts] = products;
  return (
    <div className="flex flex-col w-full items-center px-4 sm:px-8 lg:px-12 py-12">
      <div className="w-full max-w-7xl space-y-12">
        {/* Item pertama: Horizontal */}
        {firstProduct && <HorizontalCard item={firstProduct} />}

        {/* Sisanya: Vertical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {restProducts.map((product) => (
            <VerticalCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

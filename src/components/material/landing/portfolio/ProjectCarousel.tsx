"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import port1 from "../../../../../public/images/portfolio/port1.png";
import { GradientIconButton } from "@/components/ui/GradientIconButton";
import { db } from "../../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

// Definisikan tipe data untuk setiap item
interface Portfolios {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageFileName: string;
  imageUrl: string;
}

export function ProjectCarousel() {
  // 2. Buat state untuk menyimpan API carousel
  const [api, setApi] = useState<CarouselApi>();
  const [portfolios, setPortfolios] = useState<Portfolios[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  // Fetch data dari Firestore
  useEffect(() => {
    const q = collection(db, "portfolios");
    const unsub = onSnapshot(q, (snap) => {
      const list: Portfolios[] = [];
      snap.forEach((docSnap) => {
        const data = docSnap.data() as Omit<Portfolios, "id" | "imageUrl">;
        list.push({
          id: docSnap.id,
          ...data,
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setPortfolios(list);
    });
    return () => unsub();
  }, [r2PublicUrl]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Cek kondisi tombol saat pertama kali dimuat dan setiap kali slide berubah
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    onSelect(); // Panggil sekali untuk set state awal

    // Cleanup listener
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full px-[15vh] mx-auto py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-8">
          {portfolios.map((portfolio) => (
            <CarouselItem
              key={portfolio.id}
              className="pl-8 md:basis-1/2 lg:basis-full"
            >
              {/* Konten untuk setiap slide */}
              <div className="bg-black rounded-2xl p-6 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Kolom Kiri: Gambar Proyek */}
                <div className="w-full lg:w-1/2 h-fit relative rounded-lg overflow-hidden">
                  <div className="w-full h-full">
                    <Image
                      src={portfolio.imageUrl}
                      alt={portfolio.title}
                      layout="responsive"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                {/* Kolom Kanan: Deskripsi Proyek */}
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-10">
                  {portfolio.tags?.map((tag, index) => (
                    <div
                      key={index}
                      className="rounded-full w-fit p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]"
                    >
                      {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                      <div className="relative bg-[#121212] text-white rounded-full py-[5px] px-[18px] group overflow-hidden">
                        {/* --- KONTEN TEKS --- */}
                        {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                        <h2 className="relative text-[20px] font-normal">
                          {tag}
                        </h2>
                      </div>
                    </div>
                  ))}
                  <h2 className="mt-4 text-3xl sm:text-[54px] font-bold text-[#ABFA54] leading-tight">
                    {portfolio.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-[34px] font-thin text-white leading-snug">
                    {portfolio.description}
                  </p>
                  <div className="rounded-full w-fit p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
                    {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                    <div className="relative bg-[#121212] text-white rounded-full py-[5px] px-[18px] group overflow-hidden">
                      {/* --- KONTEN TEKS --- */}
                      {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                      <a href={portfolio.link} className="relative text-[20px] font-normal">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* --- Tombol Navigasi --- */}
        <div className="flex items-center justify-center gap-4 p-8 w-full">
          <GradientIconButton
            direction="previous"
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()} // <-- 4. Panggil API secara langsung
            disabled={!canScrollPrev}
          />
          <GradientIconButton
            direction="next"
            aria-label="Next slide"
            onClick={() => api?.scrollNext()} // <-- 4. Panggil API secara langsung
            disabled={!canScrollNext}
          />
        </div>
      </Carousel>
    </div>
  );
}

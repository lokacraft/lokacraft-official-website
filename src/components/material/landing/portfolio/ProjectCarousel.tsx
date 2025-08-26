"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import port1 from "../../../../../public/images/portfolio/port1.png";
import { GradientIconButton } from "@/components/ui/GradientIconButton";

// Definisikan tipe data untuk setiap item
interface CarouselItemProps {
  image: StaticImageData | string;
  tag: string;
  title: string;
  description: string;
  link: string;
}

// Data Anda bisa diletakkan di sini atau diimpor
const carouselItems: CarouselItemProps[] = [
  {
    image: port1,
    tag: "Website",
    title: "Website Development For POSEIDON ITB 2024",
    description:
      "Transform your ideas into reality with our powerful no-edit, drag-and-drop builder. Designed for businesses of all sizes.",
    link: "#", // Ganti dengan link tujuan
  },
  {
    image: port1,
    tag: "Website",
    title: "Website Development For POSEIDON ITB 2024",
    description:
      "Transform your ideas into reality with our powerful no-edit, drag-and-drop builder. Designed for businesses of all sizes.",
    link: "#", // Ganti dengan link tujuan
  },
];

export function ProjectCarousel() {
  // 2. Buat state untuk menyimpan API carousel
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-8 md:basis-1/2 lg:basis-full"
            >
              {/* Konten untuk setiap slide */}
              <div className="bg-[#030303] rounded-2xl p-6 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-800">
                {/* Kolom Kiri: Gambar Proyek */}
                <div className="w-full lg:w-1/2 h-fit relative rounded-lg overflow-hidden">
                  <div className="w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="responsive"
                    />
                  </div>
                </div>

                {/* Kolom Kanan: Deskripsi Proyek */}
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                  <div className="rounded-full w-fit p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
                    {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                    <div className="relative bg-[#121212] text-white rounded-full py-[2px] px-[5px] group overflow-hidden">
                      {/* --- KONTEN TEKS --- */}
                      {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                      <h2 className="relative text-xs font-normal">
                        {item.tag}
                      </h2>
                    </div>
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#ABFA54] leading-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-gray-300">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="inline-block mt-6 text-sm border border-gray-600 rounded-full px-5 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Visit Website
                  </a>
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

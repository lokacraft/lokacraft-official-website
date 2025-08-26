"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Komponen Card yang sudah dimodifikasi
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        // Hapus w-[280px] dan h-[...], ganti dengan w-full dan aspect-ratio
        "rounded-lg relative dark:bg-neutral-900 overflow-hidden w-full h-auto aspect-video transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      
      {/* --- Overlay Gradasi Baru (hanya muncul saat di-hover) --- */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300 ease-in-out",
          "bg-gradient-to-b from-black/0 via-black/10 to-[#7400B8]/100",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Kontainer Teks (diberi z-index agar di atas overlay gradasi) */}
      <div
        className={cn(
          "absolute inset-0 flex items-end py-4 px-3 sm:py-6 sm:px-4 transition-opacity duration-300 z-10", // Padding disesuaikan
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-lg text-left md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardData = {
  title: string;
  src: any;
};

export function FocusCards2({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // Modifikasi grid di sini
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto"> {/* 1 kolom di xs, 2 kolom di sm ke atas */}
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
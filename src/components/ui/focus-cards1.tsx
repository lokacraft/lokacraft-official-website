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
        "rounded-lg relative dark:bg-neutral-900 overflow-hidden h-[160px] 2xl:h-[320px] w-[280px] transition-all duration-300 ease-out",
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
          // Terapkan gradasi dari hitam (atas) ke ungu (bawah)
          "bg-gradient-to-b from-black/0 via-black/10 to-[#7400B8]/100",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Kontainer Teks (diberi z-index agar di atas overlay gradasi) */}
      <div
        className={cn(
          "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300 z-10",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl text-left md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardData = { // Ganti nama tipe agar lebih jelas
  title: string;
  src: any; // Bisa juga StaticImageData
};

export function FocusCards1({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full ">
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
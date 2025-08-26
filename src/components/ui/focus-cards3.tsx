"use client";
import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Card = React.memo(
  ({
    profile,
    index,
    hovered,
    setHovered,
  }: {
    profile: ProfileData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "bg-[linear-gradient(to_bottom_right,#ABFA54,#928782_46%,#7400B8)] z-0 rounded-2xl relative overflow-hidden w-full h-80 sm:h-[26rem] transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "scale-[0.98]"
      )}
    >
      <div className="absolute z-10 inset-0 translate-y-4 opacity-100">
        <Image
          src={profile.image || "/placeholder.svg"}
          alt={profile.name}
          fill
          className={profile.classname}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300 ease-in-out",
          "bg-[#7400B8]",
          hovered === index ? "opacity-100 z-10" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-between gap-5 py-4 px-6 sm:py-10 sm:px-10 transition-opacity duration-300 z-10",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="md:text-[35px] font-normal text-white leading-none mb-2">
          {profile.name}
        </div>
        <div className="text-sm md:text-[27px] text-white -mt-2 leading-tight">
          &quot;{profile.quote}&quot;
        </div>
        <div className="border text-sm border-[#ABFA54] rounded-full px-2 py-1">
          {profile.position}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type ProfileData = {
  name: string;
  quote: string;
  position: string;
  image: any;
  classname: string;
};

export function FocusCard3({ profiles }: { profiles: ProfileData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
      {profiles.map((profile, index) => (
        <Card
          key={profile.name}
          profile={profile}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

"use client";

import type React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "lokacraft",
    name: "LOKACRAFT",
    subtitle: "Craft Your Digital Presence, Effortlessly",
    description:
      "LokaCraft is an innovative SaaS platform designed to help businesses, SMEs, and organizations easily create their digital identity. With an intuitive drag-and-drop website builder, LokaCraft enables users to build interactive and professional websites without any coding skills. This platform empowers users to strengthen...",
    image: "/images/home/Product1.png",
  },
  {
    id: "lokaaqua",
    name: "LokaAqua",
    subtitle: "(Coming Soon)",
    description:
      "LokaAqua offers a comprehensive water treatment service using a cutting-edge Water Treatment Plant (WTP) system. This service ensures the supply of clean, safe, and sustainable water for residential, commercial, and industrial needs...",
    image: "/images/home/Product2.png",
  },
  {
    id: "lokaedu",
    name: "LokaEdu",
    subtitle: "(Coming Soon)",
    description:
      "LokaEdu offers a comprehensive water treatment service using a cutting-edge Water Treatment Plant (WTP) system. This service ensures the supply of clean, safe, and sustainable water for residential, commercial, and industrial needs...",
    image: "/images/home/Product1.png",
  },
  {
    id: "lokacraft",
    name: "LOKACRAFT",
    subtitle: "Craft Your Digital Presence, Effortlessly",
    description:
      "LokaCraft is an innovative SaaS platform designed to help businesses, SMEs, and organizations easily create their digital identity. With an intuitive drag-and-drop website builder, LokaCraft enables users to build interactive and professional websites without any coding skills. This platform empowers users to strengthen...",
    image: "/images/home/Product1.png",
  },
  {
    id: "lokaaqua",
    name: "LokaAqua",
    subtitle: "(Coming Soon)",
    description:
      "LokaAqua offers a comprehensive water treatment service using a cutting-edge Water Treatment Plant (WTP) system. This service ensures the supply of clean, safe, and sustainable water for residential, commercial, and industrial needs...",
    image: "/images/home/Product2.png",
  },
  {
    id: "lokaedu",
    name: "LokaEdu",
    subtitle: "(Coming Soon)",
    description:
      "LokaEdu offers a comprehensive water treatment service using a cutting-edge Water Treatment Plant (WTP) system. This service ensures the supply of clean, safe, and sustainable water for residential, commercial, and industrial needs...",
    image: "/images/home/Product3.png",
  },
];

const ProductCard = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full py-12 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className={`overflow-x-auto pb-4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-col flex w-[400px] h-[430px] rounded-2xl relative select-none"
              >
                {/* Gradient Background */}
                <div className="flex relative w-[400px] h-[350px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  {/* Description */}
                  <div className="flex-1 my-4">
                    <p className="text-sm leading-relaxed opacity-90 line-clamp-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href="/product"
                    className="text-[14px] font-semibold mt-auto flex items-center gap-x-2"
                  >
                    <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
                      Learn More{" "}
                    </span>
                    <HiOutlineArrowLongRight className="size-6 text-[#7400B8]" />
                    {/* <ArrowRight className="text-lg" /> */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-muted-foreground">
            ← Drag or scroll to see all products →
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

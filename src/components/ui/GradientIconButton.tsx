"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react"; // 1. Impor `forwardRef`
import ArrowLeft from "../../../public/images/portfolio/ArrowLeft.png";
import ArrowRight from "../../../public/images/portfolio/ArrowRight.png";
import Image from "next/image";

interface GradientIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'previous' | 'next';
}

// 2. Bungkus komponen dengan `forwardRef`
export const GradientIconButton = forwardRef<HTMLButtonElement, GradientIconButtonProps>(
  ({ className, direction, ...props }, ref) => {
    const gradientId = React.useId();

    return (
      <button
        ref={ref} // 3. Terapkan `ref` yang diteruskan ke elemen button
        className={cn(
          "relative w-[5rem] h-[5rem] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200",
          className
        )}
        {...props}
      >
        {/* SVG untuk Border Gradasi (tidak berubah) */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          style={{ fill: 'none' }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ABFA54" />
              <stop offset="100%" stopColor="#7400B8" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="calc(50% - 1px)"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
        </svg>

        {/* Ikon yang ditampilkan (tidak berubah) */}
        <div className="relative z-10">
          {direction === 'previous' && <Image src={ArrowLeft} width={60} height={60} alt="Arrow Left"/>}
          {direction === 'next' && <Image src={ArrowRight} width={60} height={60} alt="Arrow Right"/>}
        </div>
      </button>
    );
  }
);

// 4. Tambahkan displayName untuk praktik terbaik
GradientIconButton.displayName = "GradientIconButton";
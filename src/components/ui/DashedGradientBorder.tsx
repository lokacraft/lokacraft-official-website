import React from 'react';
import { cn } from "@/lib/utils";

interface DashedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: [string, string];
  borderRadius?: string;
}

export const DashedGradientBorder = ({
  children,
  className,
  gradientColors = ["#ABFA54", "#7400B8"], // Default gradasi hijau-ungu
  borderRadius = "1.5rem" // Default rounded-2xl
}: DashedGradientBorderProps) => {
  const gradientId = React.useId();

  return (
    <div className={cn("relative p-6 sm:p-8", className)}>
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full"
        style={{ fill: 'none' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          rx={borderRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeDasharray="10 10" // <-- Ini yang membuat garis putus-putus
          strokeLinecap="round"
        />
      </svg>
      {children}
    </div>
  );
};
"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Utilitas dari ShadCN

// Mendefinisikan tipe untuk props komponen
interface ServiceFeatureProps {
  imageSrc: StaticImageData | string | any;
  title: string;
  description: string;
  services: string[];
  imagePosition?: "left" | "right" | string;
}

export const ServiceFeature = ({
  imageSrc,
  title,
  description,
  services,
  imagePosition = "left", // Default posisi gambar di kiri
}: ServiceFeatureProps) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-left my-[10vh] gap-8 lg:gap-24 bg-[#121212]">
        {/* Kolom Gambar */}
        <motion.div
          className={cn(
            "w-full lg:w-[25rem] relative h-64  sm:h-[25rem]",
            imagePosition === "right" && "lg:order-last" // Mengubah urutan jika posisi gambar di kanan
          )}
          initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1023px) 50vw, 50vw"
            className="rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem]"
          />
        </motion.div>

        {/* Kolom Teks */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-[48px] font-bold text-[#ABFA54]">{title}</h2>
          <p className="mt-4 text-[24px] font-light text-white">
            &quot;{description}&quot;
          </p>
          <div className="mt-6">
            <h3 className="text-[24px] font-semibold text-white">
              Scope of Services:
            </h3>
            <ul className="mt-3 space-y-2 list-disc list-inside text-[24px] text-white">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

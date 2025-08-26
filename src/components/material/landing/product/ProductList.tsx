"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DashedGradientBorder } from "@/components/ui/DashedGradientBorder"; // Impor border
import laptopImage from "../../../../../public/images/product/laptop.png"; // Ganti dengan path gambar laptop Anda
import smartkey from "../../../../../public/images/product/smartkey.png";
import aqua from "../../../../../public/images/product/aqua.png";

export const ProductList = () => {
  return (
    <div className="flex flex-col w-full h-full relative justify-center items-center p-[15vh]">
      <section className="bg-[#121212] text-white">
        <DashedGradientBorder
          className="max-w-6xl mx-auto"
          gradientColors={["#ABFA54", "#4C00B8"]} // Gradasi hijau ke ungu yang lebih gelap
          borderRadius="1.5rem" // rounded-2xl
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Kolom Kiri: Teks */}
            <motion.div
              className="w-full lg:w-3/5 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold bg-[#ABFA54] text-transparent bg-clip-text">
                Loka Craft
              </h1>
              <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-200">
                Transform your ideas into reality with our powerful no-edit,
                drag-and-drop builder. Designed for businesses of all sizes.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block text-sm sm:text-base border border-gray-600 rounded-full px-5 py-2 hover:bg-gray-800 transition-colors"
                >
                  Effortless Marketing Tools for SMEs
                </a>
              </div>
            </motion.div>

            {/* Kolom Kanan: Gambar Laptop */}
            <motion.div
              className="w-full flex justify-end"
              initial={{ opacity: 0, rotate: -10, x: -40 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={laptopImage}
                alt="Loka Craft Dashboard"
                width={600}
                height={400}
                className="w-full max-w-md transform"
              />
            </motion.div>
          </div>
        </DashedGradientBorder>
      </section>

      <div className="flex flex-row w-full h-full mt-20 relative justify-center items-center mx-auto">
        {/* kiri */}
        <section className="bg-[#121212] text-white mx-auto">
          <DashedGradientBorder
            className="max-w-2xl mx-auto"
            gradientColors={["#ABFA54", "#4C00B8"]} // Gradasi hijau ke ungu yang lebih gelap
            borderRadius="1.5rem" // rounded-2xl
          >
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              <motion.div
                className="w-full flex justify-center"
                initial={{ opacity: 0, rotate: -10, x: -40 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src={smartkey}
                  alt="Loka Craft Dashboard"
                  width={200}
                  height={200}
                  className="w-full transform"
                />
              </motion.div>
              <motion.div
                className="w-full text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-2xl sm:text-4xl font-bold bg-[#ABFA54] text-transparent bg-clip-text">
                  Loka HR
                </h1>
                <p className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-medium leading-tight text-white">
                  Simplify your HR operations, <br />
                  from employee data <br />
                  management to payroll and <br />
                  performance tracking, all in one <br />
                  efficient system.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block text-sm sm:text-base border border-gray-600 rounded-full px-5 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Effortless Marketing Tools for SMEs
                  </a>
                </div>
              </motion.div>
            </div>
          </DashedGradientBorder>
        </section>

        {/* Kanan */}
        <section className="bg-[#121212] text-white mx-auto">
          <DashedGradientBorder
            className="max-w-2xl mx-auto"
            gradientColors={["#ABFA54", "#4C00B8"]} // Gradasi hijau ke ungu yang lebih gelap
            borderRadius="1.5rem" // rounded-2xl
          >
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              <motion.div
                className="w-full flex justify-center"
                initial={{ opacity: 0, rotate: -10, x: -40 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src={aqua}
                  alt="Loka Craft Dashboard"
                  width={300}
                  height={300}
                  className="w-full transform"
                />
              </motion.div>
              <motion.div
                className="w-full text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-4xl font-bold bg-[#ABFA54] text-transparent bg-clip-text">
                  Loka Aqua
                </h1>
                <p className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-medium leading-tight text-white">
                  Simplify your HR operations, <br />
                  from employee data <br />
                  management to payroll and <br />
                  performance tracking, all in one <br />
                  efficient system.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block text-sm sm:text-base border border-gray-600 rounded-full px-5 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Effortless Marketing Tools for SMEs
                  </a>
                </div>
              </motion.div>
            </div>
          </DashedGradientBorder>
        </section>
      </div>
    </div>
  );
};

export default ProductList;

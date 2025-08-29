"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo1 from "../../../../public/images/ArthalokaLogo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 480) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div
      className={`${
        showNavbar === false
          ? "bg-[#121212] text-white"
          : "bg-[#121212] text-white transition-all ease-in duration-300"
      } fixed z-50 top-0 left-0 w-screen h-[90px] px-[7vw] flex items-center justify-between overflow-x-hidden`}
    >
      {/* left */}
      <a
        href="/"
        className="scale-[0.8] lg:scale-100 flex items-center justify-start space-x-2 cursor-pointer"
      >
        <Image
          priority
          quality={100}
          alt="image"
          src={Logo1}
          width={800}
          height={500}
          className="size-12"
        />
        <div className={`${showNavbar === false ? "flex" : "flex flex-col"}`}>
          <p className="text-[15px] font-bold leading-4">
            ARTHA LOKA <br />
            TECHNOLOGY
          </p>
        </div>
      </a>
      {/* right lg */}
      <div
        className={`${
          showNavbar === false
            ? "hidden flex-1 lg:flex lg:items-center lg:justify-center space-x-10 text-[24px] font-extralight"
            : "hidden flex-1 lg:flex lg:items-center lg:justify-center space-x-10 text-[24px] font-extralight"
        }`}
      >
        <a
          href={"/"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          Home
        </a>
        <a
          href={"/about"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          About Us
        </a>
        <a
          href={"/services"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          Services
        </a>
        <a
          href={"/product"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          Products
        </a>
        <a
          href={"/portfolio"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          Portofolio
        </a>
        <a
          href={"/blog"}
          className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150"
        >
          Blog
        </a>
      </div>
      <a
        href={"/contact"}
        className="hidden lg:inline-flex rounded-full text-white"
      >
        {/* KOTAK LUAR (Bingkai Gradasi) - Tidak berubah */}
        <div className="rounded-full p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
          {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
          <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
            {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />

            {/* --- KONTEN TEKS --- */}
            {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
            <h2 className="relative text-[24px] font-normal">Contact Us</h2>
          </div>
        </div>
      </a>
      {/* deskripsi sm */}
      <div className="inline-flex lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6 hover:rotate-[360deg] hover:scale-105 duration-300" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex  flex-col  font-semi-bold items-start justify-start space-y-8 mt-[100px]">
                  <a
                    href={"/"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>Home</h1>
                  </a>
                  <a
                    href={"/about"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>About</h1>
                  </a>
                  <a
                    href={"/product"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>Product</h1>
                  </a>
                  <a
                    href={"/services"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>Services</h1>
                  </a>
                  <a
                    href={"/portfolio"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>Portfolio</h1>
                  </a>
                  <a
                    href={"/contact"}
                    className="flex items-center justify-start space-x-2"
                  >
                    <h1>Contact</h1>
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;

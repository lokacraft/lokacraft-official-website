"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactBg from "../../../../public/images/contact/contactbg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Send as SendIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "@/lib/send";
import { cn } from "@/lib/utils";

function ContactUs() {
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // New state for category
  const [customCategory, setCustomCategory] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({}); // validasi

  const categories = [
    "Technology",
    "Consultant",
    "Culinary",
    "E-Commerce",
    "Educational",
    "Non Profit Org",
    "Fashion",
  ];
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category !== "Other") {
      setCustomCategory(""); // Kosongkan input custom jika kategori lain dipilih
    }
  };
  // validasi
  const validateForm = () => {
    const newErrors: { [key: string]: boolean } = {};

    if (!name) newErrors.name = true;
    if (!companyName) newErrors.companyName = true;
    if (!from) newErrors.email = true;
    if (!message) newErrors.message = true;
    if (
      !selectedCategory ||
      (selectedCategory === "Other" && !customCategory)
    ) {
      newErrors.category = true;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true jika tidak ada error
  };

  return (
    <div className="w-full flex flex-col translate-y-20">
      <div className="w-full lg:h-screen flex flex-col lg:flex-row">
        {/* left lg */}
        <div className="relative flex-[0.5]">
          {/* image */}
          <Image
            src={ContactBg}
            alt="test"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          {/* content absolute */}
          <div className="absolute w-full h-full top-0 left-10 flex items-center justify-start p-6">
            <div className="flex flex-col space-y-4 bg-blue">
              <span className="text-[32px] font-thin">
                {" "}
                Have Project In Mind?
              </span>
              <h1 className="text-[84px] font-bold">Let&apos;s Talk</h1>
              <div className="flex items-center space-x-4">
                <Avatar className="size-[80px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>YS</AvatarFallback>
                </Avatar>

                <div className="flex flex-col space-y-0.5 leading-none">
                  <h1 className="text-[24px] font-bold font-montserrat">Yusuf Sulaiman</h1>
                  <span className="text-[16px] font-thin font-montserrat">
                    Account Executive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right lg */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (validateForm()) {
              const categoryToSend =
                selectedCategory === "Other"
                  ? customCategory
                  : selectedCategory;
              handleCategoryClick(categoryToSend);
              await Send({
                name,
                companyName,
                from,
                phone,
                subject,
                message,
                selectedCategory,
                customCategory,
              });
              setName("");
              setCompanyName("");
              setFrom("");
              setPhone("");
              setSubject("");
              setMessage("");
              setSelectedCategory("");
              setCustomCategory("");
              // set error
              setErrors({});
            }
          }}
          className="relative lg:flex-[0.5] flex flex-col p-12 lg:justify-between"
        >
          {/* categories */}
          <div className="w-full flex flex-col gap-y-6">
            <Label htmlFor="Nama" className="text-[20px]">
              My Product Industry is:{" "}
              {errors.category ? (
                <span className="font-light text-xs text-red-400">
                  Mohon pilih category
                </span>
              ) : (
                <></>
              )}
            </Label>
            <div className="flex flex-wrap gap-2 w-full">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-full p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]"
                >
                  {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                  <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[6px] group overflow-hidden">
                    {/* --- KONTEN TEKS --- */}
                    {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                    <Button
                      type="button"
                      key={category}
                      className="bg-transparent text-[20px] font-extralight hover:text-white hover:bg-transparent hover:scale-105"
                      value={category}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Button>
                  </div>
                </div>
              ))}
              <div className="rounded-full p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]">
                {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[6px] group overflow-hidden">
                  <Button
                    type="button"
                    className="bg-transparent text-[20px] font-extralight hover:text-white hover:bg-transparent hover:scale-105"
                    onClick={() => handleCategoryClick("Other")}
                  >
                    Other
                  </Button>
                </div>
              </div>
            </div>
            {/* conditional jika other */}
            {selectedCategory === "Other" && (
              <div
                className={`lg:w-full w-[45%] mt-1 grid gap-2.5 transition-opacity duration-500 ${
                  selectedCategory === "Other" ? "opacity-100" : "opacity-0"
                }`}
              >
                <Label htmlFor="customCategory">Input Industri Anda</Label>
                <Input
                  autoFocus
                  autoComplete="off"
                  type="text"
                  id="customCategory"
                  placeholder="input jenis industri"
                  className={`lg:w-[45%] ${
                    errors.category ? "border-red-500" : ""
                  }`}
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                />
              </div>
            )}
          </div>
          {/* forms */}
          <div className=" lg:flex-1 py-8 w-full flex flex-col space-y-9">
            <div className="flex items-center space-x-3">
              {/* Name */}
              <div className="grid w-[45%] items-center gap-2.5">
                <Label htmlFor="Nama" className="text-[20px] font-montserrat">
                  Name{" "}
                  {errors.name ? (
                    <span className="font-light text-xs text-red-400">
                      Mohon isi field ini
                    </span>
                  ) : (
                    <></>
                  )}
                </Label>
                <Input
                  type="text"
                  id="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={cn(
                    // 1. Reset gaya bawaan ShadCN
                    "bg-transparent border-0 rounded-none px-1",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "border-b-2",
                    errors.name
                      ? "border-red-500" // Warna jika ada error
                      : "border-gray-300 focus:border-blue-500" // Warna default & saat di-klik
                  )}
                />
              </div>
              {/* Company Name */}
              <div className="grid w-[45%] items-center gap-2.5">
                <Label htmlFor="Nama" className="text-[20px] font-montserrat">
                  Company Name{" "}
                  {errors.companyName ? (
                    <span className="font-light text-xs text-red-400">
                      Mohon isi field ini
                    </span>
                  ) : (
                    <></>
                  )}
                </Label>
                <Input
                  type="text"
                  id="Nama"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={cn(
                    // 1. Reset gaya bawaan ShadCN
                    "bg-transparent border-0 rounded-none px-1",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "border-b-2",
                    errors.name
                      ? "border-red-500" // Warna jika ada error
                      : "border-gray-300 focus:border-blue-500" // Warna default & saat di-klik
                  )}
                />
              </div>
            </div>
            {/* email */}
            <div className="grid w-full max-w-[45%] items-center gap-2.5">
              <Label htmlFor="email" className="text-[20px] font-montserrat">
                Email{" "}
                {errors.email ? (
                  <span className="font-light text-xs text-red-400">
                    Mohon isi field ini
                  </span>
                ) : (
                  <></>
                )}
              </Label>
              <Input
                type="email"
                id="email"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className={cn(
                  // 1. Reset gaya bawaan ShadCN
                  "bg-transparent border-0 rounded-none px-1",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "border-b-2",
                  errors.name
                    ? "border-red-500" // Warna jika ada error
                    : "border-gray-300 focus:border-blue-500" // Warna default & saat di-klik
                )}
              />
            </div>
            {/* detail */}
            <div className="grid w-[92%] gap-2.5">
              <Label htmlFor="message" className="text-[20px] font-montserrat">
                Project Overview{" "}
                {errors.message ? (
                  <span className="font-light text-xs text-red-400">
                    Mohon isi field ini
                  </span>
                ) : (
                  <></>
                )}
              </Label>
              <div className="w-full h-[100px] overflow-y-auto">
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={cn(
                    // 1. Reset gaya bawaan ShadCN
                    "bg-transparent border-0 rounded-none px-1",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "border-b-2",
                    errors.name
                      ? "border-red-500" // Warna jika ada error
                      : "border-gray-300 focus:border-blue-500" // Warna default & saat di-klik
                  )}
                />
              </div>
            </div>
          </div>
          {/* submit */}
          <div className="w-full flex">
            <Button
              type="submit"
              className="bg-[#7400B8] rounded-[2rem] p-6 text-[36px] text-white font-montserrat"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

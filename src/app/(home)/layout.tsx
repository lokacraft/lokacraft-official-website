import Navbar from "@/components/material/landing/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import { ParallaxProviders } from "../../../provider/parallax-provider";
import Footer from "@/components/material/landing/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "lokacraft",
  description: "lakacraft",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ParallaxProviders>
      <main
        className={`text-white bg-[#121212] w-screen overflow-x-hidden min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Navbar />
            <div className="flex flex-col w-full min-h-screen">
                  {children}
            </div>
            <Footer />
      </main>
    </ParallaxProviders>
  );
}

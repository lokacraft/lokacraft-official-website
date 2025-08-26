import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';
// import {Funnel_Display} from 'next/font/google';
import "./globals.css";

// const funnelDisplay = Funnel_Display({
//   subsets: ['latin'],
//   display: 'swap',
//   // Tentukan weight yang Anda butuhkan, atau biarkan sebagai variable font
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-funnel-display', // 3. Buat CSS Variable (opsional tapi bagus)
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Ini akan membuat CSS variable
});

export const metadata: Metadata = {
  title: "arthaloka",
  description: "Arthaloka Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden antialiased ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

"use client"; // Jadikan Client Component

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation"; // Impor hook usePathname
import {
  LineChart,
  Trophy,
  Handshake,
  FolderOpen,
  Settings,
  PenTool,
  Package
   // Ganti dengan ikon yang sesuai
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Definisikan link dalam sebuah array agar lebih rapi
const navItems = [
  {
    href: "/admin/dashboard/partnerships1",
    label: "Partnerships",
    icon: Handshake,
  },
  {
    href: "/admin/dashboard/products1", // Path disesuaikan
    label: "Products",
    icon: Package,
  },
  {
    href: "/admin/dashboard/achievements1", // Path disesuaikan
    label: "Achievements",
    icon: Trophy,
  },
  {
    href: "/admin/dashboard/portfolio1", // Path disesuaikan
    label: "Portfolio",
    icon: FolderOpen,
  },
  {
    href: "/admin/dashboard/projects", // Path disesuaikan
    label: "Portfolio",
    icon: PenTool,
  },
  {
    href: "/admin/form",
    label: "Form",
    icon: LineChart,
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // Dapatkan path URL saat ini

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {/* Map item navigasi dari array */}
        {navItems.map((item) => {
          const Icon = item.icon;
          // Cek apakah link ini aktif, bisa menggunakan startsWith untuk sub-halaman
          const isActive = pathname.startsWith(item.href); 

          return (
            <TooltipProvider key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      isActive
                        ? "bg-primary text-primary-foreground" // Style jika AKTIF
                        : "text-muted-foreground" // Style jika TIDAK AKTIF
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </nav>

      {/* Navigasi Bawah (Contoh: Settings) */}
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">  
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/settings" // Ganti dengan path settings
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/settings" && "bg-primary text-primary-foreground"
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;
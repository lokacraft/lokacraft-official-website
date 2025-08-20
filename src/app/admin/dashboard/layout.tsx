import React from "react";
import Sidebar from "@/components/material/admin/Sidebar";
import Topbar from "@/components/material/admin/Topbar";

import { Toaster } from "@/components/ui/sonner" // Pastikan path ini benar

// Layout ini akan mengatur tampilan untuk SEMUA rute di bawah /admin/dashboard/*
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Topbar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Toaster richColors position="top-right" /> {/* Posisikan notifikasi di kanan atas */}
            {children}{" "}
          </main>
        </div>
      </div>
    </div>
  );
}

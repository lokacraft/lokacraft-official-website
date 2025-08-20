"use client";

import * as React from "react";
import { Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronsUpDown } from "lucide-react";

// Tipe props untuk komponen ini, ia menerima 'table' instance
interface SortDropdownProps<TData> {
  table: Table<TData>;
}

export function SortDropdown<TData>({ table }: SortDropdownProps<TData>) {
  // Ambil semua kolom yang bisa di-sort
  const sortableColumns = table
    .getAllColumns()
    .filter(
      (column) =>
        typeof column.accessorFn !== "undefined" && column.getCanSort()
    );
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <ChevronsUpDown className="h-4 w-4" />
          <span className="hidden lg:inline">Sort by...</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Sort by a column</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Hasilkan item menu secara dinamis dari kolom yang bisa di-sort */}
        {sortableColumns.map((column) => (
          <React.Fragment key={column.id}>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUpDown className="mr-2 h-4 w-4" />
              {column.id} (A-Z)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowUpDown className="mr-2 h-4 w-4" />
              {column.id} (Z-A)
            </DropdownMenuItem>
          </React.Fragment>
        ))}

        <DropdownMenuSeparator />
        
        {/* Opsi untuk menghapus semua sorting */}
        <DropdownMenuItem onClick={() => table.resetSorting()}>
          Clear Sort
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
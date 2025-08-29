"use client";

import { useState, useEffect, useMemo } from "react";
import { DataTable } from "@/components/data-table";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { getColumnsForCategory } from "./columns";
import { Button } from "@/components/ui/button";
import { ItemForm } from "./ItemForm";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { toast } from "sonner";
import { LoaderFive } from "@/components/ui/loader";
import React from "react";

// IMPORTANT: client-side env var must start with NEXT_PUBLIC_
const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "";

interface BaseItem {
  id: string;
  [key: string]: any;
}

interface Product extends BaseItem {
  title?: string;
  tag?: string;
  description?: string;
  imageFileName?: string;
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dialog state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DocumentData | null>(null);

  // --- Handlers ---
  const handleAddNew = () => {
    setSelectedItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item: DocumentData) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = (item: DocumentData) => {
    setSelectedItem(item);
    setIsDeleteConfirmOpen(true);
  };

  // --- Helper khusus products ---
  // const uploadImageIfNeeded = async (
  //   fileOrName: File | string | undefined | null,
  //   oldFileName?: string
  // ): Promise<string | undefined> => {
  //   if (!fileOrName) return oldFileName; // no change
  //   if (typeof fileOrName === "string") return fileOrName; // unchanged filename stored

  //   // upload baru ke R2
  //   const fd = new FormData();
  //   fd.append("file", fileOrName);

  //   const res = await fetch("/api/products/upload", {
  //     method: "POST",
  //     body: fd,
  //   });

  //   if (!res.ok) {
  //     const msg = await res.text();
  //     throw new Error(`Upload gagal: ${msg}`);
  //   }

  //   const json = await res.json();
  //   // server ideally returns { key } (filename) — handle both { key } or { url }
  //   let key: string | undefined = json?.key;
  //   if (!key && json?.url) {
  //     try {
  //       key = new URL(json.url).pathname.split("/").filter(Boolean).pop();
  //     } catch {
  //       key = String(json.url).split("/").pop();
  //     }
  //   }

  //   if (!key)
  //     throw new Error(
  //       "Upload sukses tapi server tidak mengembalikan nama file (key)."
  //     );

  //   // hapus file lama kalau ada (non-fatal)
  //   if (oldFileName) {
  //     await fetch("/api/products/delete", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ key: oldFileName }),
  //     }).catch(() => {
  //       console.warn("Gagal menghapus file lama di R2 (non-fatal).");
  //     });
  //   }

  //   return key;
  // };

  // --- Save (Create & Update) ---
  const handleSave = async (formData: any) => {
    try {
      const isEditMode = !!formData.id;

      if (
        params.category === "products" ||
        params.category === "achievements" ||
        params.category === "projects" ||
        params.category === "portfolios" ||
        params.category === "blogs" ||
        params.category === "partnerships"
      ) {
        // 🔥 langsung lempar ke API yang sesuai
        const fd = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value instanceof File) {
            fd.append("image", value);
          } else if (value != null) {
            fd.append(key, value as any);
          }
        });

        let res: Response;
        const endpoint = `/api/${params.category}`;

        if (isEditMode) {
          res = await fetch(`${endpoint}/${formData.id}`, {
            method: "PUT",
            body: fd,
          });
        } else {
          res = await fetch(endpoint, {
            method: "POST",
            body: fd,
          });
        }

        if (!res.ok) throw new Error("Gagal menyimpan data");
      } else {
        // 🔥 kategori lain → Firestore langsung
        if (isEditMode) {
          const { id, ...dataToUpdate } = formData;
          await updateDoc(doc(db, params.category, id), dataToUpdate);
        } else {
          await addDoc(collection(db, params.category), formData);
        }
      }

      setIsFormOpen(false);
      toast.success(`Data berhasil di${isEditMode ? "perbarui" : "simpan"}!`);
    } catch (error: any) {
      console.error("Error saving data:", error);
      toast.error(error?.message || "Gagal menyimpan data.");
    }
  };

  // --- Delete ---
  const handleConfirmDelete = async () => {
    if (selectedItem?.id) {
      try {
        if (
          params.category === "products" ||
          params.category === "achievements" ||
          params.category === "projects" ||
          params.category === "portfolios" ||
          params.category === "blogs" ||
          params.category === "partnerships"
        ) {
          // 🔥 langsung call API delete
          const res = await fetch(
            `/api/${params.category}/${selectedItem.id}`,
            {
              method: "DELETE",
            }
          );
          if (!res.ok) throw new Error("Gagal menghapus data");
        } else {
          // 🔥 kategori lain → Firestore langsung
          await deleteDoc(doc(db, params.category, selectedItem.id));
        }

        toast.success("Data berhasil dihapus!");
      } catch (error) {
        console.error("Error deleting data:", error);
        toast.error("Gagal menghapus data.");
      }
    }
    setIsDeleteConfirmOpen(false);
  };

  // --- Columns ---
  const columns = useMemo(() => {
    const getColumnsFunc = getColumnsForCategory(params.category);
    if (!getColumnsFunc) return null;

    // call with the original expected args only (onEdit, onDelete).
    // columns.tsx should itself read NEXT_PUBLIC_R2_PUBLIC_URL if it needs public URL.
    return getColumnsFunc(handleEdit, handleDelete);
  }, [params.category]);

  // --- Fetch Data (Firestore) ---
  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, params.category),
      (snapshot) => {
        // cast doc.data() as any so we can access imageFileName without TS error
        const items = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...(docItem.data() as any),
        }));

        const withStaticNumber = items.map((item: any, index: number) => {
          const base = { ...item, staticNumber: index + 1 };

          // tambahkan URL image kalau products
          if (
            params.category === "products" ||
            params.category === "achievements" ||
            params.category === "projects" ||
            params.category === "portfolios" ||
            params.category === "blogs" ||
            params.category === "partnerships"
          ) {
            if (item.imageFileName) {
              return {
                ...base,
                imageUrl: R2_PUBLIC_URL
                  ? `${R2_PUBLIC_URL}/${item.imageFileName}`
                  : item.imageFileName,
              };
            }
          }
          return base;
        });

        setData(withStaticNumber);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [params.category]); // keep listening to category

  if (isLoading)
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm rounded-lg">
        <LoaderFive text="Loading Data. . ." />
      </div>
    );
  if (!columns)
    return (
      <div className="p-6 text-center text-red-500">
        Tabel untuk kategori &apos;{params.category}&apos; tidak ditemukan.
      </div>
    );

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold capitalize">
          {params.category.replace("1", "")}
        </h1>
        <Button onClick={handleAddNew}>Tambah Data Baru</Button>
      </div>

      <DataTable columns={columns} data={data} />

      <ItemForm
        isOpen={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSave={handleSave}
        category={params.category}
        initialData={selectedItem}
      />

      <DeleteConfirmDialog
        isOpen={isDeleteConfirmOpen}
        onOpenChange={setIsDeleteConfirmOpen}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

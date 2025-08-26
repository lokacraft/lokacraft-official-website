"use client";

import { useState, useEffect, useMemo } from "react";
import { DataTable } from "@/components/data-table";
import { collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc, DocumentData } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { getColumnsForCategory } from "./columns";
import { Button } from "@/components/ui/button";
import { ItemForm } from "./ItemForm";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { toast } from "sonner"; // <-- 1. Impor 'toast'
import { LoaderFive } from "@/components/ui/loader";
import React from "react";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk mengontrol dialog
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DocumentData | null>(null);

  // --- Handlers untuk CRUD ---
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

  const handleSave = async (formData: any) => {
    try {
      const isEditMode = !!formData.id;
      if (isEditMode) {
        // Update data
        const { id, ...dataToUpdate } = formData;
        const docRef = doc(db, params.category, id);
        await updateDoc(docRef, dataToUpdate);
      } else {
        // Tambah data baru
        await addDoc(collection(db, params.category), formData);
      }
      setIsFormOpen(false);
      // 2. Tampilkan notifikasi berhasil
      toast.success(`Data berhasil di${isEditMode ? 'perbarui' : 'simpan'}!`);
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Gagal menyimpan data."); // Notifikasi jika gagal
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedItem?.id) {
      try {
        await deleteDoc(doc(db, params.category, selectedItem.id));
        toast.success("Data berhasil dihapus!");
      } catch (error) {
        console.error("Error deleting data:", error);
        toast.error("Gagal menghapus data."); // Notifikasi jika gagal
      }
    }
    setIsDeleteConfirmOpen(false);
  };
  
  // --- Definisi Kolom ---
  // Fungsi-fungsi handler (handleEdit, handleDelete) dibuat di sini
  // dan diteruskan ke getColumnsForCategory
  const columns = useMemo(() => {
    const getColumnsFunc = getColumnsForCategory(params.category);
    if (!getColumnsFunc) return null;
    // Panggil fungsi yang mengembalikan definisi kolom dengan handler yang benar
    return getColumnsFunc(handleEdit, handleDelete);
  }, [params.category]); // Dependency array di sini hanya perlu params.category

  // --- Fetch Data ---
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(collection(db, params.category), (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const itemsWithStaticNumber = items.map((item, index) => ({
        ...item,
        staticNumber: index + 1, // Nomor dimulai dari 1
      }));
        setData(itemsWithStaticNumber);
        setIsLoading(false);
    }, (error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
    });
    return () => unsubscribe();
  }, [params.category]);

  if (isLoading) return <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm rounded-lg">
    <LoaderFive text="Loading Data. . ."></LoaderFive>
  </div>;
  if (!columns) return <div className="p-6 text-center text-red-500">Tabel untuk kategori &apos;{params.category}&apos; tidak ditemukan.</div>;

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold capitalize">{params.category.replace('1', '')}</h1>
        <Button onClick={handleAddNew}>Tambah Data Baru</Button>
      </div>
      
      {/* DataTable hanya menerima data dan kolom, bukan fungsi */}
      <DataTable columns={columns} data={data} />
      
      {/* Komponen Dialog tetap di sini, dikontrol oleh state dari halaman ini */}
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
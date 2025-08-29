"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm?: () => void; // fallback lama
  targetId?: string;      // ✅ baru: untuk products
  category?: string;      // ✅ supaya hanya eksekusi API kalau category = products
}

export const DeleteConfirmDialog = ({
  isOpen,
  onOpenChange,
  onConfirm,
  targetId,
  category,
}: DeleteConfirmDialogProps) => {
  const handleDelete = async () => {
    if (category === "products" && targetId) {
      try {
        const res = await fetch(`/api/products/${targetId}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Failed to delete");
        onOpenChange(false);
      } catch (err) {
        console.error(err);
        alert("Error deleting product");
      }
    } else if (onConfirm) {
      onConfirm(); // fallback untuk kategori lain
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

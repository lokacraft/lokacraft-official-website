"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "../../../../components/ui/date-picker";
import { Timestamp } from "firebase/firestore";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

interface ItemData {
  id?: string;
  [key: string]: any;
}

interface ItemFormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSave: (item: ItemData) => void;
  category: string;
  initialData?: ItemData | null;
}

type FieldType =
  | "text"
  | "number"
  | "textarea"
  | "date"
  | "url"
  | "boolean"
  | "tags"
  | "image";

interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
}

// --- SKEMA BARU YANG SUDAH DISESUAIKAN DENGAN COLUMNS.TSX ANDA ---
const categorySchemas: Record<string, FieldSchema[]> = {
  partnerships1: [
    {
      name: "name",
      label: "Partner Name",
      type: "text",
      placeholder: "e.g., PT. Mitra Sejati",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      placeholder: "e.g., Active",
    },
    {
      name: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "e.g., Budi Santoso",
    },
    {
      name: "contactEmail",
      label: "Email",
      type: "text",
      placeholder: "e.g., budi@mitra.com",
    },
    {
      name: "category",
      label: "Category",
      type: "text",
      placeholder: "e.g., Supplier",
    },
    { name: "joinDate", label: "Join Date", type: "date" },
  ],
  products: [
    // <-- Diperbarui dari 'products1' menjadi 'products'
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "e.g., Loka Craft",
    },
    {
      name: "tag",
      label: "Tag",
      type: "text",
      placeholder: "e.g., Effortless Marketing Tools for SMEs",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Deskripsi singkat produk...",
    },
    { name: "imageFileName", label: "Product Image", type: "image" }, // Input akan berupa upload file
  ],
  achievements1: [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "e.g., Productivity Award 2016",
    },
    {
      name: "awardedBy",
      label: "Awarded By",
      type: "text",
      placeholder: "e.g., Kementerian",
    },
    { name: "date", label: "Date", type: "date" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Deskripsi singkat pencapaian...",
    },
    {
      name: "certificateUrl",
      label: "Certificate URL",
      type: "url",
      placeholder: "https://...",
    },
  ],
  portfolio1: [
    {
      name: "projectName",
      label: "Project Name",
      type: "text",
      placeholder: "e.g., Proyek Bendungan Jatiluhur",
    },
    {
      name: "client",
      label: "Client",
      type: "text",
      placeholder: "e.g., PT. Wijaya Karya",
    },
    { name: "completionDate", label: "Completion Date", type: "date" }, // Kolom disesuaikan
    {
      name: "link",
      label: "Project Link",
      type: "url",
      placeholder: "https://...",
    },
    {
      name: "imageUrl",
      label: "Image URL",
      type: "url",
      placeholder: "https://...",
    },
  ],
  projects: [
    {
      name: "name",
      label: "Project Name",
      type: "text",
      placeholder: "e.g., Company Website Revamp",
    },
    {
      name: "projectId",
      label: "Project ID",
      type: "text",
      placeholder: "e.g., PROJ-001",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      placeholder: "e.g., In Progress, Completed",
    },
    {
      name: "type",
      label: "Type",
      type: "text",
      placeholder: "e.g., Web Development",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Deskripsi singkat proyek...",
    },
    {
      name: "link",
      label: "Project Link",
      type: "url",
      placeholder: "https://...",
    },
    { name: "updatedOn", label: "Updated On", type: "date" },
    { name: "domainStatus", label: "Domain Status", type: "boolean" },
    { name: "securityStatus", label: "Security Status", type: "boolean" },
  ],
  blogs: [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Judul artikel...",
    },
    {
      name: "author",
      label: "Author",
      type: "text",
      placeholder: "Nama penulis...",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      placeholder: "e.g., judul-artikel-unik",
    },
    { name: "isPublished", label: "Status", type: "boolean" },
    { name: "publishedDate", label: "Published Date", type: "date" },
    {
      name: "tags",
      label: "Tags (pisahkan koma)",
      type: "tags",
      placeholder: "e.g., AI, Teknologi",
    },
    {
      name: "ringkasan",
      label: "Ringkasan",
      type: "textarea",
      placeholder: "Ringkasan singkat artikel...",
    },
    {
      name: "coverImage",
      label: "Cover Image URL",
      type: "url",
      placeholder: "https://...",
    },
    { name: "views", label: "Views", type: "number", placeholder: "0" },
    { name: "content", label: "Content", type: "textarea", placeholder: "0" },
  ],
};

export const ItemForm = ({
  isOpen,
  onOpenChange,
  onSave,
  category,
  initialData,
}: ItemFormProps) => {
  const [formData, setFormData] = useState<ItemData>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({});
    }
  }, [initialData, isOpen]);

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ hanya untuk kategori products
    if (category === "products") {
      try {
        const fd = new FormData();
        fd.append("title", formData.title || "");
        fd.append("tag", formData.tag || "");
        fd.append("description", formData.description || "");

        if (formData.imageFileName instanceof File) {
          fd.append("image", formData.imageFileName);
        } else if (typeof formData.imageFileName === "string") {
          fd.append("imageFileName", formData.imageFileName);
        }

        let res: Response;
        if (isEditMode && formData.id) {
          res = await fetch(`/api/products/${formData.id}`, {
            method: "PUT",
            body: fd,
          });
        } else {
          res = await fetch("/api/products", {
            method: "POST",
            body: fd,
          });
        }

        if (!res.ok) throw new Error("Failed to save product");

        onOpenChange(false);
      } catch (err) {
        console.error(err);
        alert("Error saving product");
      }
    } else {
      // ✅ untuk kategori lain, tetap pakai sistem lama
      onSave(formData);
    }
  };

  const fields = categorySchemas[category] || [];
  const isEditMode = !!initialData;

  const renderField = (field: FieldSchema) => {
    const value = formData[field.name];

    switch (field.type) {
      case "boolean": // <-- KASUS BARU UNTUK DROPDOWN BOOLEAN
        return (
          <Select
            value={value === true ? "true" : value === false ? "false" : ""}
            onValueChange={(val) => handleChange(field.name, val === "true")}
          >
            <SelectTrigger id={field.name} className="col-span-3">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
        );

      case "date":
        return (
          <DatePicker
            date={value ? (value as Timestamp).toDate() : undefined}
            setDate={(date) =>
              handleChange(field.name, date ? Timestamp.fromDate(date) : null)
            }
          />
        );
      case "textarea":
        return (
          <Textarea
            id={field.name}
            name={field.name}
            value={value || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="col-span-3"
            rows={4}
          />
        );
      case "number":
        return (
          <Input
            id={field.name}
            name={field.name}
            type="number"
            value={value || ""}
            onChange={(e) => handleChange(field.name, e.target.valueAsNumber)}
            placeholder={field.placeholder}
            className="col-span-3"
          />
        );
      case "tags": // ✅ handle array of string
        return (
          <Input
            id={field.name}
            name={field.name}
            type="text"
            value={Array.isArray(value) ? value.join(", ") : value || ""}
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag.length > 0)
              )
            }
            placeholder={field.placeholder}
            className="col-span-3"
          />
        );

      case "image": {
        const fileOrString = value as File | string | undefined;
        const previewUrl =
          typeof fileOrString === "string"
            ? `${process.env.R2_PUBLIC_URL}/${fileOrString}`
            : fileOrString
            ? URL.createObjectURL(fileOrString)
            : "";

        const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (file) handleChange(field.name, file);
        };

        const onBrowseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const f = e.target.files?.[0];
          if (f) handleChange(field.name, f);
        };

        const prevent = (e: React.DragEvent<HTMLDivElement>) =>
          e.preventDefault();

        return (
          <div className="col-span-3">
            {/* Dropzone */}
            <div
              onDrop={onDrop}
              onDragOver={prevent}
              onDragEnter={prevent}
              onDragLeave={prevent}
              className="w-full border-2 border-dashed rounded-xl p-4 text-center hover:bg-muted/50 transition"
            >
              <p className="text-sm text-muted-foreground">
                Drag & drop gambar ke sini, atau
              </p>
              <div className="mt-2">
                <input
                  id={field.name}
                  type="file"
                  accept="image/*"
                  onChange={onBrowseChange}
                  className="hidden"
                />
                <label htmlFor={field.name}>
                  <span className="inline-flex items-center px-4 py-2 rounded-lg border cursor-pointer">
                    Browse file
                  </span>
                </label>
              </div>
              {previewUrl ? (
                <div className="mt-3 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="max-h-40 rounded-md object-contain"
                  />
                </div>
              ) : null}

              {/* Info nama file */}
              <div className="mt-2 text-xs text-muted-foreground">
                {typeof fileOrString === "string"
                  ? `File saat ini: ${fileOrString}`
                  : fileOrString
                  ? `File baru: ${fileOrString.name}`
                  : "Belum ada file"}
              </div>
            </div>
          </div>
        );
      }

      default: // 'text', 'url'
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type === "url" ? "url" : "text"}
            value={value || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="col-span-3"
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Edit" : "Tambah"} Data {category.replace("1", "")}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          id="item-form"
          className="grid gap-4 py-4"
        >
          {fields.map((field) => (
            <div
              key={field.name}
              className="grid grid-cols-4 items-center gap-4"
            >
              <Label htmlFor={field.name} className="text-right">
                {field.label}
              </Label>
              {renderField(field)}
            </div>
          ))}
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="submit" form="item-form">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

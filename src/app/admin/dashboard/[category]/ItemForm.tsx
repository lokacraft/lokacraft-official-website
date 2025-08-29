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
  partnerships: [
    {
      name: "title",
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
      name: "contactEmail",
      label: "Email",
      type: "text",
      placeholder: "e.g., budi@mitra.com",
    },
    { name: "imageFileName", label: "Partner Logo", type: "image" },
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
  achievements: [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "e.g., Productivity Award 2016",
    },
    {
      name: "penyelenggara",
      label: "Penyelenggara",
      type: "text",
      placeholder: "e.g., Kementerian X",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Deskripsi singkat pencapaian...",
    },
    { name: "imageFileName", label: "Achievement Image", type: "image" },
  ],
  portfolios: [
    {
      name: "title",
      label: "Project Name",
      type: "text",
      placeholder: "e.g., Website. . . ",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "e.g., Ini adalah projek. . .",
    },
    {
      name: "tags",
      label: "Tags",
      type: "tags",
      placeholder: "React, Node.js",
    },
    {
      name: "link",
      label: "Project Link",
      type: "url",
      placeholder: "https://...",
    },
    {
      name: "imageFileName",
      label: "Project Image",
      type: "image",
    },
  ],
  projects: [
    {
      name: "title",
      label: "Title",
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
      name: "type",
      label: "Type",
      type: "text",
      placeholder: "e.g., Web Development",
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      placeholder: "e.g., In Progress, Completed",
    },
    {
      name: "techStack",
      label: "Tech Stack (pisahkan koma)",
      type: "tags",
      placeholder: "React, Node.js",
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
    { name: "imageFileName", label: "Project Image", type: "image" },
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
      name: "isPublished",
      label: "Status",
      type: "boolean",
    },
    { name: "publishedDate", label: "Published Date", type: "date" },
    {
      name: "tags",
      label: "Tags (pisahkan koma)",
      type: "tags",
      placeholder: "e.g., AI, Teknologi",
    },
    { name: "content", label: "Content", type: "textarea" },
    {
      name: "ringkasan",
      label: "Ringkasan",
      type: "textarea",
      placeholder: "Ringkasan singkat artikel...",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      placeholder: "e.g., judul-artikel-unik",
    },
    {
      name: "imageFileName",
      label: "Cover Image",
      type: "image",
    },
    { name: "views", label: "Views", type: "number" },
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

    // ✅ hanya untuk kategori yang punya API khusus
    if (
      category === "products" ||
      category === "achievements" ||
      category === "projects" ||
      category === "portfolios" ||
      category === "blogs" ||
      category === "partnerships"
    ) {
      try {
        const fd = new FormData();

        // common fields for products & achievements handled earlier — kita general-kan
        // For projects we append all expected fields
        if (category === "partnerships") {
          fd.append("title", formData.title || "");
          fd.append("status", formData.status || "");
          fd.append("contactEmail", formData.contactEmail || "");
        }

        if (category === "blogs") {
          fd.append("title", formData.title || "");
          fd.append("views", formData.views || "");
          fd.append("author", formData.author || "");
          fd.append("isPublished", formData.isPublished ? "true" : "false");
          fd.append("ringkasan", formData.ringkasan || "");
          fd.append("content", formData.content || "");
          fd.append("slug", formData.slug || "");
          fd.append(
            "publishedDate",
            formData.publishedDate
              ? (formData.publishedDate as Timestamp).toDate().toISOString()
              : ""
          );
          const ts = Array.isArray(formData.tags)
            ? formData.tags
            : formData.tags
            ? String(formData.tags)
                .split(",")
                .map((s: any) => s.trim())
            : [];
          fd.append("tags", JSON.stringify(ts));
          // updatedOn (optional)
        }
        if (category === "portfolios") {
          fd.append("title", formData.title || "");
          fd.append("description", formData.description || "");
          const ts = Array.isArray(formData.tags)
            ? formData.tags
            : formData.tags
            ? String(formData.tags)
                .split(",")
                .map((s: any) => s.trim())
            : [];
          fd.append("tags", JSON.stringify(ts));
          fd.append("link", formData.link || "");
        }
        if (category === "projects") {
          fd.append("title", formData.title || "");
          fd.append("projectId", formData.projectId || "");
          fd.append("type", formData.type || "");
          fd.append("status", formData.status || "");
          fd.append("description", formData.description || "");
          fd.append("link", formData.link || "");
          fd.append("domainStatus", formData.domainStatus ? "true" : "false");
          fd.append(
            "securityStatus",
            formData.securityStatus ? "true" : "false"
          );
          // techStack: send as JSON string (ItemForm uses array for tags)
          const ts = Array.isArray(formData.techStack)
            ? formData.techStack
            : formData.techStack
            ? String(formData.techStack)
                .split(",")
                .map((s: any) => s.trim())
            : [];
          fd.append("techStack", JSON.stringify(ts));
          // updatedOn (optional)
        } else if (category === "products") {
          fd.append("title", formData.title || "");
          fd.append("tag", formData.tag || "");
          fd.append("description", formData.description || "");
        } else if (category === "achievements") {
          fd.append("title", formData.title || "");
          fd.append("penyelenggara", formData.penyelenggara || "");
          fd.append("description", formData.description || "");
        }

        // handle image uniformly
        if (formData.imageFileName instanceof File) {
          fd.append("image", formData.imageFileName);
        } else if (typeof formData.imageFileName === "string") {
          fd.append("imageFileName", formData.imageFileName);
        }

        let res: Response;
        const endpoint = `/api/${category}`;

        if (isEditMode && formData.id) {
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

        if (!res.ok) throw new Error(`Failed to save ${category}`);

        // optionally, you can parse returned json and pass to onSave (but template didn't)
        onOpenChange(false);
      } catch (err) {
        console.error(err);
        alert(`Error saving ${category}`);
      }
    } else {
      // ✅ untuk kategori lain, tetap pakai sistem lama (langsung onSave → Firestore)
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

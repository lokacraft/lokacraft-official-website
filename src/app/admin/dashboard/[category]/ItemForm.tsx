"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "../../../../components/ui/date-picker";
import { Timestamp } from "firebase/firestore";

import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";

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

type FieldType = "text" | "number" | "textarea" | "date" | "url" | "boolean";

interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
}

// --- SKEMA BARU YANG SUDAH DISESUAIKAN DENGAN COLUMNS.TSX ANDA ---
const categorySchemas: Record<string, FieldSchema[]> = {
  partnerships1: [
    { name: "name", label: "Partner Name", type: "text", placeholder: "e.g., PT. Mitra Sejati" },
    { name: "status", label: "Status", type: "text", placeholder: "e.g., Active" },
    { name: "contactPerson", label: "Contact Person", type: "text", placeholder: "e.g., Budi Santoso" },
    { name: "contactEmail", label: "Email", type: "text", placeholder: "e.g., budi@mitra.com" },
    { name: "category", label: "Category", type: "text", placeholder: "e.g., Supplier" },
    { name: "joinDate", label: "Join Date", type: "date" },
  ],
  products1: [
    { name: "productName", label: "Product Name", type: "text", placeholder: "e.g., Apps Pemantau..." },
    { name: "category", label: "Category", type: "text", placeholder: "e.g., Apps" },
    { name: "status", label: "Status", type: "text", placeholder: "e.g., Available" },
    { name: "imageUrl", label: "Image URL", type: "url", placeholder: "https://..." },
  ],
  achievements1: [
    { name: "title", label: "Title", type: "text", placeholder: "e.g., Productivity Award 2016" },
    { name: "awardedBy", label: "Awarded By", type: "text", placeholder: "e.g., Kementerian" },
    { name: "date", label: "Date", type: "date" },
    { name: "description", label: "Description", type: "textarea", placeholder: "Deskripsi singkat pencapaian..." },
    { name: "certificateUrl", label: "Certificate URL", type: "url", placeholder: "https://..." },
  ],
  portfolio1: [
    { name: "projectName", label: "Project Name", type: "text", placeholder: "e.g., Proyek Bendungan Jatiluhur" },
    { name: "client", label: "Client", type: "text", placeholder: "e.g., PT. Wijaya Karya" },
    { name: "completionDate", label: "Completion Date", type: "date" }, // Kolom disesuaikan
    { name: "link", label: "Project Link", type: "url", placeholder: "https://..." },
    { name: "imageUrl", label: "Image URL", type: "url", placeholder: "https://..." },
  ],
  projects: [
    { name: "name", label: "Project Name", type: "text", placeholder: "e.g., Company Website Revamp" },
    { name: "projectId", label: "Project ID", type: "text", placeholder: "e.g., PROJ-001" },
    { name: "status", label: "Status", type: "text", placeholder: "e.g., In Progress, Completed" },
    { name: "type", label: "Type", type: "text", placeholder: "e.g., Web Development" },
    { name: "description", label: "Description", type: "textarea", placeholder: "Deskripsi singkat proyek..." },
    { name: "link", label: "Project Link", type: "url", placeholder: "https://..." },
    { name: "updatedOn", label: "Updated On", type: "date" },
    { name: "domainStatus", label: "Domain Status", type: "boolean" },
    { name: "securityStatus", label: "Security Status", type: "boolean" },
  ],
};

export const ItemForm = ({ isOpen, onOpenChange, onSave, category, initialData }: ItemFormProps) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const fields = categorySchemas[category] || [];
  const isEditMode = !!initialData;

  const renderField = (field: FieldSchema) => {
    const value = formData[field.name];

    switch (field.type) {
      case "boolean": // <-- KASUS BARU UNTUK DROPDOWN BOOLEAN
        return (
          <Select
            value={value === true ? 'true' : value === false ? 'false' : ''}
            onValueChange={(val) => handleChange(field.name, val === 'true')}
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
            setDate={(date) => handleChange(field.name, date ? Timestamp.fromDate(date) : null)}
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
      default: // 'text', 'url'
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type === 'url' ? 'url' : 'text'}
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
          <DialogTitle>{isEditMode ? "Edit" : "Tambah"} Data {category.replace('1', '')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} id="item-form" className="grid gap-4 py-4">
          {fields.map((field) => (
            <div key={field.name} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={field.name} className="text-right">
                {field.label}
              </Label>
              {renderField(field)}
            </div>
          ))}
        </form>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" form="item-form">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
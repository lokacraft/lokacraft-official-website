"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Tipe data umum untuk props, bisa diperluas jika perlu
type Item = any;

const numberingColumn: ColumnDef<Item> = {
  id: "numbering",
  header: "No", // Header sesuai permintaan
  cell: ({ row }) => {
    // row.index memberikan indeks baris dari keseluruhan data (sebelum di-filter/sort)
    return <div className="text-muted-foreground">{row.index + 1}</div>;
  },
  enableSorting: false,
  enableHiding: false,
};

// Helper untuk menampilkan teks panjang di dalam dialog
const ViewTextDialog = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  if (typeof content !== "string" || content.length <= 50) {
    // Tampilkan teks biasa jika pendek
    return (
      <div className="text-sm text-muted-foreground">{content || "-"}</div>
    );
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="p-0 h-auto text-left text-blue-600 hover:underline"
        >
          Read full text
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p className="py-4 text-sm text-muted-foreground whitespace-pre-wrap">
          {content}
        </p>
      </DialogContent>
    </Dialog>
  );
};

// Helper untuk menampilkan gambar di dalam dialog
const ViewImageDialog = ({ src, alt }: { src: string; alt: string }) => {
  if (!src) return <div>No Image</div>;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Open Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <div className="relative aspect-video w-full mt-4">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Komponen terpisah untuk sel Actions (Edit/Delete)
const ActionsCell: React.FC<{
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (item: Item) => void;
}> = ({ item, onEdit, onDelete }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onEdit(item)}>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onDelete(item)}
          className="text-red-600"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// --- DEFINISI KOLOM UNTUK SETIAP KATEGORI ---

// tabel partnerships
const getPartnershipsColumns = (
  onEdit: (item: Item) => void,
  onDelete: (item: Item) => void
): ColumnDef<Item>[] => [
  { accessorKey: "name", header: "Partner Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "contactPerson", header: "Contact Person" },
  { accessorKey: "contactEmail", header: "Email" },
  { accessorKey: "category", header: "Category" },
  {
    accessorKey: "joinDate",
    header: "Join Date",
    cell: ({ row }) => {
      const date = row.getValue("joinDate") as any;
      if (date && typeof date.toDate === "function") {
        return (
          <div>
            {date.toDate().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        );
      }
      return <div>-</div>;
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// tabel produk
const getProductsColumns = (
  onEdit: (item: Item) => void,
  onDelete: (item: Item) => void
): ColumnDef<Item>[] => [
  numberingColumn,
  {
    accessorKey: "title",
    header: "Title",
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "tag",
    header: "Tag",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <ViewTextDialog
        title={row.getValue("title")}
        content={row.getValue("description")}
      />
    ),
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const fileName = row.getValue("imageUrl") as string;
      return <ViewImageDialog src={fileName} alt={row.getValue("title")} />;
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// tabel achievements
const getAchievementsColumns = (
  onEdit: (item: Item) => void,
  onDelete: (item: Item) => void
): ColumnDef<Item>[] => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  { accessorKey: "awardedBy", header: "Awarded By" },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as any;
      if (date && typeof date.toDate === "function") {
        return (
          <div>
            {date.toDate().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        );
      }
      return <div>-</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <ViewTextDialog
        title={row.getValue("title")}
        content={row.getValue("description")}
      />
    ),
  },
  {
    accessorKey: "certificateUrl",
    header: "Certificate",
    cell: ({ row }) => {
      const fileName = row.getValue("certificateUrl") as string;
      return <ViewImageDialog src={fileName} alt={row.getValue("title")} />;
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// tabel portofolio
const getPortfolioColumns = (
  onEdit: (item: Item) => void,
  onDelete: (item: Item) => void
): ColumnDef<Item>[] => [
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("projectName")}</div>
    ),
  },
  { accessorKey: "client", header: "Client" },
  { accessorKey: "completionDate", header: "Completion Date" },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => (
      <ViewImageDialog
        src={row.getValue("imageUrl")}
        alt={row.getValue("projectName")}
      />
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// tabel projek
const getProjectsColumns = (
  onEdit: (item: any) => void,
  onDelete: (item: any) => void
): ColumnDef<any>[] => [
  {
    accessorKey: "name",
    header: "Project Name",
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "projectId",
    header: "Project ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "Completed" ? "default" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "updatedOn",
    header: "Updated On",
    cell: ({ row }) => {
      const date = row.getValue("updatedOn") as any;
      if (date && typeof date.toDate === "function") {
        return (
          <div>
            {date.toDate().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        );
      }
      return <div>-</div>;
    },
  },
  {
    accessorKey: "domainStatus",
    header: "Domain Status",
    cell: ({ row }) => {
      const status = row.getValue("domainStatus") as boolean;
      return (
        <Badge variant={status ? "default" : "destructive"}>
          {status ? "Active" : "Inactive"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "securityStatus",
    header: "Security Status",
    cell: ({ row }) => {
      const status = row.getValue("securityStatus") as boolean;
      return (
        <Badge variant={status ? "default" : "destructive"}>
          {status ? "Secure" : "Insecure"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <ViewTextDialog
        title={row.getValue("name")}
        content={row.getValue("description")}
      />
    ),
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => {
      const link = row.getValue("link") as string;
      return link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit Link
        </a>
      ) : (
        "-"
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// tabel blog
const getBlogsColumns = (
  onEdit: (item: Item) => void,
  onDelete: (item: Item) => void
): ColumnDef<Item>[] => [
  numberingColumn, // Kolom penomoran statis
  {
    accessorKey: "title",
    header: "Title",
    sortingFn: "alphanumeric", // Agar bisa di-sort A-Z dengan benar
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "author",
    header: "Author",
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "isPublished",
    header: "Status",
    cell: ({ row }) => {
      const isPublished = row.getValue("isPublished") as boolean;
      return (
        <Badge variant={isPublished ? "default" : "secondary"}>
          {isPublished ? "Published" : "Draft"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "publishedDate",
    header: "Published Date",
    cell: ({ row }) => {
      const date = row.getValue("publishedDate") as any;
      if (date && typeof date.toDate === "function") {
        return (
          <div>
            {date.toDate().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        );
      }
      return <div>-</div>;
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[];
      // Tampilkan array sebagai string yang dipisahkan koma
      return <div>{tags?.join(", ") || "-"}</div>;
    },
  },
  {
    accessorKey: "ringkasan",
    header: "Ringkasan",
    cell: ({ row }) => (
      <ViewTextDialog
        title={row.getValue("title")}
        content={row.getValue("ringkasan")}
      />
    ),
  },
  {
    accessorKey: "coverImage",
    header: "Cover Image",
    cell: ({ row }) => {
      const fileName = row.getValue("coverImage") as string;
      return <ViewImageDialog src={fileName} alt={row.getValue("title")} />;
    },
  },

  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => (
      <ViewTextDialog
        title={row.getValue("views")}
        content={row.getValue("views")}
      />
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionsCell item={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

// Peta untuk menghubungkan nama kategori dari URL ke definisi kolomnya
const columnsFunctionsMap: Record<
  string,
  (
    onEdit: (item: Item) => void,
    onDelete: (item: Item) => void
  ) => ColumnDef<Item>[]
> = {
  partnerships1: getPartnershipsColumns,
  products: getProductsColumns,
  achievements1: getAchievementsColumns,
  portfolio1: getPortfolioColumns,
  projects: getProjectsColumns,
  blogs: getBlogsColumns,
};

// Fungsi utama untuk mendapatkan kolom yang benar
export function getColumnsForCategory(category: string) {
  return columnsFunctionsMap[category] || null;
}

import { NextResponse } from "next/server";
import { db } from "../../../../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File | null;

    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const oldData = snapshot.data();
    let newFileName = oldData.imageFileName;

    if (image) {
      // hapus image lama
      if (oldData.imageFileName) {
        await R2Client.deleteObject(oldData.imageFileName);
      }
      // upload baru
      const fileExt = image.name.split(".").pop();
      newFileName = `${uuidv4()}.${fileExt}`;
      await R2Client.putObject(newFileName, image);
    }

    await updateDoc(docRef, {
      title,
      tag,
      description,
      imageFileName: newFileName,
    });

    return NextResponse.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Error updating product:", err);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const data = snapshot.data();

    // hapus file di R2
    if (data.imageFileName) {
      await R2Client.deleteObject(data.imageFileName);
    }

    // hapus Firestore doc
    await deleteDoc(docRef);

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}

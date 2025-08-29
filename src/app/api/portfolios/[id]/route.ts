// app/api/portfolios/[id]/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET single portfolio
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "portfolios", params.id);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ id: snap.id, ...snap.data() });
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
  }
}

// PUT update portfolio
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
    const title = (formData.get("title") as string) || "";
    const description = (formData.get("description") as string) || "";
    const tags = (formData.get("tags") as string) || "";
    const link = (formData.get("link") as string) || "";

    let imageFileName = (formData.get("imageFileName") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // jika ada file baru, upload ke R2
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);

      // hapus file lama di R2 jika ada
      if (imageFileName) {
        try {
          await R2Client.deleteObject(imageFileName);
        } catch (err) {
          console.warn("Failed deleting old object:", err);
        }
      }

      imageFileName = fileName;
    }

    const ref = doc(db, "portfolios", params.id);
    await updateDoc(ref, {
      title,
      description,
      tags,
      link,
      imageFileName: imageFileName || "",
    });

    return NextResponse.json({
      id: params.id,
      title,
      description,
      tags,
      link,
      imageFileName,
    });
  } catch (err) {
    console.error("Error updating portfolio:", err);
    return NextResponse.json({ error: "Failed to update portfolio" }, { status: 500 });
  }
}

// DELETE portfolio
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "portfolios", params.id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data = snap.data();
    if (data?.imageFileName) {
      try {
        await R2Client.deleteObject(data.imageFileName);
      } catch (err) {
        console.warn("Failed deleting object from R2:", err);
      }
    }

    await deleteDoc(ref);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting portfolio:", err);
    return NextResponse.json({ error: "Failed to delete portfolio" }, { status: 500 });
  }
}

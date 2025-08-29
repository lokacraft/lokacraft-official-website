import { NextResponse } from "next/server";
import { db } from "../../../../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET single achievement
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "achievements", params.id);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ id: snap.id, ...snap.data() });
  } catch (err) {
    console.error("Error fetching achievement:", err);
    return NextResponse.json({ error: "Failed to fetch achievement" }, { status: 500 });
  }
}

// PUT update achievement
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const penyelenggara = formData.get("penyelenggara") as string;
    const description = formData.get("description") as string;

    let imageFileName = formData.get("imageFileName") as string | null;
    const imageFile = formData.get("image") as File | null;

    // jika ada file baru, upload ke R2
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);

      // hapus file lama di R2 jika ada
      if (imageFileName) {
        await R2Client.deleteObject(imageFileName);
      }

      imageFileName = fileName;
    }

    const ref = doc(db, "achievements", params.id);
    await updateDoc(ref, {
      title,
      penyelenggara,
      description,
      imageFileName: imageFileName || "",
    });

    return NextResponse.json({ id: params.id, title, penyelenggara, description, imageFileName });
  } catch (err) {
    console.error("Error updating achievement:", err);
    return NextResponse.json({ error: "Failed to update achievement" }, { status: 500 });
  }
}

// DELETE achievement
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "achievements", params.id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data = snap.data();
    if (data?.imageFileName) {
      await R2Client.deleteObject(data.imageFileName);
    }

    await deleteDoc(ref);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting achievement:", err);
    return NextResponse.json({ error: "Failed to delete achievement" }, { status: 500 });
  }
}

// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../../firebase";
import { doc, getDoc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET single project
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "blogs", params.id);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ id: snap.id, ...snap.data() });
  } catch (err) {
    console.error("Error fetching project:", err);
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}

// PUT update project
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
    const title = (formData.get("title") as string) || "";
    const views = (formData.get("views") || 0);
    const author = (formData.get("author") as string) || "";
    const isPublished = formData.get("isPublished") === "true";
    const ringkasan = (formData.get("ringkasan") as string) || "";
    const content = (formData.get("content") as string) || "";
    const slug = (formData.get("slug") as string) || "";

    let publishedDate: Timestamp | null = null;
    const dateStr = formData.get("publishedDate") as string | null;
    if (dateStr) {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        publishedDate = Timestamp.fromDate(date);
      }
    }

    let tags: string[] = [];
    const tagsRaw = formData.get("tags") as string | null;
    if (tagsRaw) {
      try {
        tags = JSON.parse(tagsRaw);
        if (!Array.isArray(tags)) tags = tagsRaw.split(",").map(s => s.trim()).filter(Boolean);
      } catch {
        tags = tagsRaw.split(",").map(s => s.trim()).filter(Boolean);
      }
    }

    let imageFileName = (formData.get("coverImage") as string) || "";
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

    const ref = doc(db, "blogs", params.id);
    await updateDoc(ref, {
      title,
      views,
      author,
      isPublished,
      ringkasan,
      content,
      slug,
      tags,
      imageFileName: imageFileName || "",
      publishedDate
    });

    return NextResponse.json({ id: params.id, title, views, author, isPublished, ringkasan, content, slug, tags, imageFileName, publishedDate });
  } catch (err) {
    console.error("Error updating blog:", err);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const ref = doc(db, "blogs", params.id);
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
    console.error("Error deleting blog:", err);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}

// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../firebase"; // pastikan ini mengarah ke firestore instance
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET all projects
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "blogs"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

// POST new project
export async function POST(req: Request) {
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

    // techStack dikirim sebagai JSON string atau comma-separated — coba parse
    let tags: string[] = [];
    const techRaw = formData.get("tags") as string | null;
    if (techRaw) {
      try {
        tags = JSON.parse(techRaw);
        if (!Array.isArray(tags)) tags = techRaw.split(",").map(s => s.trim()).filter(Boolean);
      } catch {
        tags = techRaw.split(",").map(s => s.trim()).filter(Boolean);
      }
    }

    let imageFileName = (formData.get("coverImage") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // upload file ke R2 jika ada
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);
      imageFileName = fileName;
    }

    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      author,
      isPublished,
      views,
      ringkasan,
      content,
      slug,
      tags,
      imageFileName: imageFileName || "",
      publishedDate,
    });

    return NextResponse.json({ id: docRef.id, title, author, isPublished, views, ringkasan, content, slug, tags, imageFileName, publishedDate });
  } catch (err) {
    console.error("Error creating project:", err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

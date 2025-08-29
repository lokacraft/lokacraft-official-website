// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../firebase"; // pastikan ini mengarah ke firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET all projects
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "partnerships"));
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
    const status = (formData.get("status") as string) || "";
    const contactEmail = (formData.get("contactEmail") as string) || "";

    let imageFileName = (formData.get("imageFileName") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // upload file ke R2 jika ada
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);
      imageFileName = fileName;
    }

    const docRef = await addDoc(collection(db, "partnerships"), {
      title,
      status,
      contactEmail,
      imageFileName: imageFileName || "",
    });

    return NextResponse.json({ id: docRef.id, title, status, contactEmail, imageFileName });
  } catch (err) {
    console.error("Error creating partnerships:", err);
    return NextResponse.json({ error: "Failed to create partnerships" }, { status: 500 });
  }
}

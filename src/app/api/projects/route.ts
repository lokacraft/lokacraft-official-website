// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../firebase"; // pastikan ini mengarah ke firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET all projects
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "projects"));
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
    const projectId = (formData.get("projectId") as string) || "";
    const status = (formData.get("status") as string) || "";
    const type = (formData.get("type") as string) || "";
    const description = (formData.get("description") as string) || "";
    const link = (formData.get("link") as string) || "";
    const domainStatus = formData.get("domainStatus") === "true";
    const securityStatus = formData.get("securityStatus") === "true";

    // techStack dikirim sebagai JSON string atau comma-separated — coba parse
    let techStack: string[] = [];
    const techRaw = formData.get("techStack") as string | null;
    if (techRaw) {
      try {
        techStack = JSON.parse(techRaw);
        if (!Array.isArray(techStack)) techStack = techRaw.split(",").map(s => s.trim()).filter(Boolean);
      } catch {
        techStack = techRaw.split(",").map(s => s.trim()).filter(Boolean);
      }
    }

    let imageFileName = (formData.get("imageFileName") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // upload file ke R2 jika ada
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);
      imageFileName = fileName;
    }

    const docRef = await addDoc(collection(db, "projects"), {
      title,
      projectId,
      status,
      type,
      description,
      link,
      domainStatus,
      securityStatus,
      techStack,
      imageFileName: imageFileName || "",
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
    });

    return NextResponse.json({ id: docRef.id, title, projectId, status, type, description, link, domainStatus, securityStatus, techStack, imageFileName });
  } catch (err) {
    console.error("Error creating project:", err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

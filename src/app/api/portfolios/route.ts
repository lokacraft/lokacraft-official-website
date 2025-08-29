// app/api/portfolios/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET all portfolios
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "portfolios"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching portfolios:", err);
    return NextResponse.json({ error: "Failed to fetch portfolios" }, { status: 500 });
  }
}

// POST new portfolio
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = (formData.get("title") as string) || "";
    const description = (formData.get("description") as string) || "";
    const tags = (formData.get("tags") as string) || "";
    const link = (formData.get("link") as string) || "";

    let imageFileName = (formData.get("imageFileName") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // upload file ke R2 jika ada
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);
      imageFileName = fileName;
    }

    const docRef = await addDoc(collection(db, "portfolios"), {
      title,
      description,
      tags,
      link,
      imageFileName: imageFileName || "",
    });

    return NextResponse.json({
      id: docRef.id,
      title,
      description,
      tags,
      link,
      imageFileName,
    });
  } catch (err) {
    console.error("Error creating portfolio:", err);
    return NextResponse.json({ error: "Failed to create portfolio" }, { status: 500 });
  }
}

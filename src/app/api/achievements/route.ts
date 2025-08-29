import { NextResponse } from "next/server";
import { db } from "../../../../firebase"; // pastikan ini import firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";
import { R2Client } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";

// GET all achievements
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "achievements"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching achievements:", err);
    return NextResponse.json({ error: "Failed to fetch achievements" }, { status: 500 });
  }
}

// POST new achievement
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const penyelenggara = formData.get("penyelenggara") as string;
    const description = formData.get("description") as string;

    let imageFileName = formData.get("imageFileName") as string | null;
    const imageFile = formData.get("image") as File | null;

    // upload file ke R2
    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;
      await R2Client.putObject(fileName, imageFile);
      imageFileName = fileName;
    }

    const docRef = await addDoc(collection(db, "achievements"), {
      title,
      penyelenggara,
      description,
      imageFileName: imageFileName || "",
    });

    return NextResponse.json({ id: docRef.id, title, penyelenggara, description, imageFileName });
  } catch (err) {
    console.error("Error creating achievement:", err);
    return NextResponse.json({ error: "Failed to create achievement" }, { status: 500 });
  }
}

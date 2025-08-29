import { NextResponse } from "next/server";
import { db } from "../../../../firebase"; // koneksi Firebase Firestore
import { collection, addDoc, getDocs } from "firebase/firestore";
import { R2Client } from "@/lib/r2"; // helper upload R2
import { v4 as uuidv4 } from "uuid";

const productsRef = collection(db, "products");

// GET: ambil semua produk
export async function GET() {
  try {
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST: tambah produk baru
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;

    if (!title || !tag || !description || !image) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // bikin unique filename supaya tidak tabrakan
    const fileExt = image.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;

    // upload ke R2
    await R2Client.putObject(fileName, image);

    // simpan ke Firestore
    await addDoc(productsRef, {
      title,
      tag,
      description,
      imageFileName: fileName,
    });

    return NextResponse.json({ message: "Product created successfully" });
  } catch (err) {
    console.error("Error creating product:", err);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { R2Client } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const key = `${file.name}`;

  // await r2.send(new PutObjectCommand({
  //   Bucket: process.env.R2_BUCKET_NAME!,
  //   Key: key,
  //   Body: buffer,
  //   ContentType: file.type,
  // }));

  const url = `${process.env.R2_PUBLIC_URL}/${key}`;

  return NextResponse.json({ url, key });
}

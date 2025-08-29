// app/api/r2/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { R2Client } from "@/lib/r2";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { key } = await req.json();
    if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });

    // await r2.send(
    //   new DeleteObjectCommand({
    //     Bucket: process.env.R2_BUCKET_NAME!,
    //     Key: key,
    //   })
    // );

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e?.message || "Delete failed" }, { status: 500 });
  }
}

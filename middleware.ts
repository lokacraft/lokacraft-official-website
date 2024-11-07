import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host");

  if (hostname === "admin.arthaloka.tech") {
    // Mengarahkan semua permintaan ke folder /admin
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: "/:path*",
};

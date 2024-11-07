import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host");

  console.log("Hostname:", hostname); // Log untuk debug

  if (hostname === "admin.arthaloka.tech") {
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: "/:path*",
};

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host')!;
  const subdomain = hostname.match(/^([^.]+)\./)?.[1];

  switch (true) {
    case subdomain?.startsWith('admin'):
      // Arahkan ke direktori /admin untuk subdomain admin
      return NextResponse.rewrite(new URL(`/admin${req.nextUrl.pathname}`, req.url));
    case subdomain?.startsWith('app'):
      return NextResponse.rewrite(new URL(`/app${req.nextUrl.pathname}`, req.url));
    // Tambahkan kasus lain sesuai kebutuhan
    default:
      // Tangani untuk domain utama jika dibutuhkan
      return NextResponse.next();
  }
}

// Menentukan agar middleware ini hanya berjalan pada rute tertentu
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};

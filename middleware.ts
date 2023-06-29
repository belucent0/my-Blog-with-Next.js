import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  if (req.nextUrl && req.nextUrl.pathname && req.nextUrl.pathname.startsWith("/login")) {
    const session = await getToken({ req });
    if (session) {
      return NextResponse.redirect(new URL("/guestbook", req.url));
    }
  }
}

import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ['/api-docs'],
}

export async function middleware(req : NextRequest) {
  // '/api-docs' 진입시 로그인 요구하기
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'admin' && pwd === '1234') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth/auth'

  return NextResponse.rewrite(url)
}
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req) {

    if (req.nextUrl.pathname.startsWith('/write')){
        const session = await getToken({ req })
        if (!session) {
            return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
    }
  
} 
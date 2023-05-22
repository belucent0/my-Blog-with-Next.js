'use client'

import { signIn, signOut } from 'next-auth/react'

export function LoginBtn(){
    return (
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" onClick={()=> { signIn() }}>로그인</button>
    )
}
export function LogoutBtn(){
    return (
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" onClick={()=> { signOut() }}>로그아웃</button>
    )
}


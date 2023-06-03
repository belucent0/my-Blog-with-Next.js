'use client'

import { signIn, signOut } from 'next-auth/react'

export function LoginBtn(){
    return (
        <button className="inline-block rounded-lg bg-indigo-700 px-3 py-2 mb-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base" onClick={()=> { signIn() }}>로그인</button>
    )
}
export function LogoutBtn(){
    return (
        <button className="inline-block rounded-lg bg-indigo-700 px-3 py-2 mb-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base" onClick={()=> { signOut() }}>로그아웃</button>
    )
}


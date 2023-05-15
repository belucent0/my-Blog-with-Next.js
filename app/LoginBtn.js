'use client'

import { signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'

export function LoginBtn(){

    // useEffect(()=>{
    //     if (typeof window !== 'undefined'){  //브라우저 여부 확인
    //         localStorage.getItem('모드', 'dark')
    //     }
    // },[])

    return (
        <button onClick={()=> { signIn() }}>로그인</button>
    )
}

export function LogoutBtn(){
    return (
        <button onClick={()=> { signOut() }}>로그아웃</button>
    )
}


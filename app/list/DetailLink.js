'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    return (
        <button onClick={()=>{router.push('/list')}}>버튼</button>
    )
}
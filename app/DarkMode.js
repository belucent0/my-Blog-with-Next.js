'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DarkMode() {
    let router = useRouter()
    const [mode, setMode] = useState('light');

    useEffect(()=>{
      let cookieValue = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
      if (cookieValue == '') {
        document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
      }
      setMode(cookieValue);
    },[])

    let modeChange = <span onClick={()=>{ 
      let cookieValue = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
      if (cookieValue == 'light') {
        document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
        router.refresh()  //새로고침
        setMode('dark')
      } else {
        document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        router.refresh()
        setMode('light')
      }
     }}> {mode === 'light' ? '🌙': '☀️'} </span>
     


  return (
    <span>
      {modeChange}
    </span>

  )
} 
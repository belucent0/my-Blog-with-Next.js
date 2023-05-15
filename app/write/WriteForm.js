'use client'

import { useState } from "react"

export default async function WriteForm() {
  let [src, setSrc] = useState('')
  
  const fileChange = async (e) => {
    let file = e.target.files[0] // 유저 파일명
    let filename = encodeURIComponent(file.name) //한글 파일명
    let res = await fetch('/api/post/image?file=' + filename)
    res = await res.json()

  //S3 업로드
  const formData = new FormData()
  Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
    formData.append(key, value)
  })
  const uploadResult = await fetch(res.url, {
    method: 'POST',
    body: formData,
  })

  if (uploadResult.ok) {
    setSrc(uploadResult.url + '/' + file.name)
  } else {
    console.log('실패')
  }}
  
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <input type="file" accept="image/*" onChange={fileChange} />
        <input name="content" placeholder="글내용" />
        <img src={src} />
        <button type="submit">전송</button>
      </form>
    </div>
  )
  }
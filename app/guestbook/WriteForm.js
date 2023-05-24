'use client'

export default async function WriteForm() {

  
  return (
    <div className="p-20">
    <h1 className="font-bold text-3xl font-serif mb-5">방명록</h1>
      <form action="/api/guestbook/new" method="POST">
        <input type="text" name="content" placeholder="내용 입력" required/>
        <button type="submit">제출</button>
      </form>
    </div>
  )
  }
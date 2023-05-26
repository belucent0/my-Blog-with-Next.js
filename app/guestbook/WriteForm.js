'use client'

export default async function WriteForm() {
  return (
    <>
      <div className="ml-2">
        <h1 className="font-bold text-3xl font-serif mb-5">방명록</h1>
        <form action="/api/guestbook/new" method="POST" className="flex items-baseline items-center">
          <input className="bg-indigo-100 rounded-lg py-2 px-4 sm:w-5/6 md:w-2/3 lg:w-1/2" type="text" name="content" placeholder="내용을 입력해주세요" required/>
          <button className="ml-1 inline-block rounded-lg bg-indigo-500 px-5 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" type="submit">제출</button>
        </form>
      </div>
    </>
  )
}

'use client'

export default async function WriteForm() {
  return (
    <>
      <div >
        <form action="/api/guestbook/new" method="POST" className="relative flex items-baseline mb-5">
          <input className="bg-gray-100 pl-4 pr-40 py-2 rounded-lg w-full dark:bg-gray-800" type="text" name="content" placeholder="내용을 입력해주세요" maxLength={100} minLength={2} required/>
          <button type="submit" className="flex item-center justify-center absolute right-1 top-1 h-8 rounded-lg bg-indigo-500 px-3 py-1 ml-1 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">등록</button>
        </form>
      </div>
    </>
  )
}

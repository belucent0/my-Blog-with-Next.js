'use client'

export default async function WriteForm() {
  return (
    <>
      <div >
        <form action="/api/guestbook/new" method="POST" className="relative max-w-[500px] flex items-baseline items-center">
          <input className="bg-indigo-100 pl-4 pr-32 py-2  rounded-lg w-full" type="text" name="content" placeholder="내용을 입력해주세요" maxLength={100} required/>
          <button type="submit" className="flex item-center justify-center absolute right-1 top-1 font-medium h-8 inline-block rounded-lg bg-indigo-500 px-3 py-1 ml-1 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">제출</button>
        </form>
      </div>
    </>
  )
}

'use client'
export default async function WriteForm({ userName}) {
  return (
    <>
      <form action="/api/guestbook/new" method="POST">
          <div className="flex mb-3">
              <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-1 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">{userName} </span>

              <div className="relative w-full">
                  <input type="text" name="content" className="block px-1.5 py-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="100자 방명록" maxLength={100} minLength={2} required/>
                  <button type="submit" className="text-white absolute right-1.5 bottom-1.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-1.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">등록</button>
              </div>
          </div>
      </form>
    </>
  )
}
'use client'

// 방명록 페이지 내 방명록 작성폼
export default async function WriteForm({ userName }) {
  return (
    <>
      <form action="/api/guestbook/new" method="POST">
          <div className="flex mb-3">
              <span className="flex-shrink-0 z-10 inline-flex items-center px-1 sm:px-2 py-2.5 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700">{userName} </span>

              <div className="relative w-full">
                  <input type="text" name="content" className="block px-1 sm:px-3 py-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="100자 방명록을 남겨보세요" maxLength={100} minLength={2} required/>
                  <button type="submit" className="text-white absolute right-1.5 bottom-1.5 bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 sm:px-3 py-1.5 dark:hover:bg-indigo-500 dark:focus:ring-indigo-800">등록</button>
              </div>
          </div>
      </form>
    </>
  )
}

/**
 * @swagger
 *
 * /api/guestbook/new:
 *  post:
 *    summary: "방명록 등록"
 *    description: "POST 방식으로 방명록을 등록합니다."
 *    tags: [Guestbook]
 *    requestBody:
 *      description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다.(방명록 등록)
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              _id:
 *                type: string
 *                description: "방명록 고유아이디"
 *              content:
 *                type: string
 *                description: "방명록 내용"
 *              authorName:
 *                type: string
 *                description: "유저 이름"
 *              
 */
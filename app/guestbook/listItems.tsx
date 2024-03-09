"use client";

import { LoginModal, LogoutBtn } from "./LoginBtn";
import WriteForm from "./WriteForm";
import { useRouter } from "next/navigation";
import { ListItemProps } from "./guestbookTypes";

export default function ListItem({
  session,
  userName,
  guestbookList,
}: ListItemProps) {
  const router = useRouter();

  // 방명록 삭제
  const handleDelete = async (id: string, index, e) => {
    try {
      const response = await fetch("/api/guestbook/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok) {
        const listItem = await e.target.closest(".listitem");
        if (listItem) {
          alert(data.message);
          router.refresh();
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert(error.message);
    }
  };

  let sessionBtn = (
    <span>
      {session && userName ? (
        <span>
          <LogoutBtn /> <WriteForm userName={userName} />
        </span>
      ) : (
        <LoginModal />
      )}
    </span>
  );

  return (
    <>
      <div>{sessionBtn}</div>
      <>
        {guestbookList.map((v, i) => (
          <div
            key={i}
            className="listitem mb-2 flex items-center justify-between rounded-lg bg-gray-100 p-1.5 shadow-md dark:bg-gray-800 sm:mb-3 sm:p-3"
          >
            <div>
              <h4 className="text-base font-bold sm:mb-1 sm:text-lg">
                {guestbookList[i].content}
              </h4>
              <p className="text-sm text-gray-500 sm:mb-1 sm:text-base">
                {guestbookList[i].authorName}
              </p>
            </div>
            {session && userName === guestbookList[i].authorName && (
              <button
                className="text-sm sm:text-base"
                onClick={(e) => handleDelete(guestbookList[i]._id, i, e)}
              >
                🗑삭제
              </button>
            )}
          </div>
        ))}
      </>
    </>
  );
}

/**
 * @swagger
 * paths:
 *  /api/guestbook/getList:
 *    get:
 *      summary: "방명록 페이지 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청합니다"
 *      tags: [Guestbook]
 *      responses:
 *        "200":
 *          description: 전체 방명록 목록
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    guestbook:
 *                      type: object
 *                      example:
 *                          [
 *                            { "_id": 1, "content": "반갑습니다", "authorName" : 유저1},
 *                            { "_id": 2, "content": "안녕하세요", "authorName" : 유저2},
 *                            { "_id": 3, "content": "하이요", "authorName" : 유저3},
 *                          ]
 */

/**
 * @swagger
 * /api/guestbook/delete:
 *   delete:
 *    summary: "특정 방명록 삭제"
 *    description: "요청 경로에 값을 담아 서버에 보냅니다."
 *    tags: [Guestbook]
 *    parameters:
 *      - in: query
 *        name: _id
 *        required: true
 *        description: 방명록 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (방명록 삭제)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                guestbook:
 *                  type: object
 *                  example:
 *                    [
 *                      { "_id": 1, "content": "반갑습니다", "authorName" : 유저1},
 *                      { "_id": 2, "content": "안녕하세요", "authorName" : 유저2},
 *                      { "_id": 3, "content": "하이요", "authorName" : 유저3},
 *                    ]
 */

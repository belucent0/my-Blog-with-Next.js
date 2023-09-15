"use client";

import { Suspense, useEffect, useState } from "react";
import { LoginModal, LogoutBtn } from "./LoginBtn";
import WriteForm from "./WriteForm";
import Loading from "./loading";

type GuestBookItem = {
  _id: string;
  content: string;
  authorName: string;
};

export default function ListItem({userName, session}) {
  const [guestbookList, setGuestbookList] = useState<GuestBookItem[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      await fetchGuestbookList();
    })();
  }, []);

    // 방명록 목록 조회
    async function fetchGuestbookList() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/guestbook/getList')
        
        if (response.ok) {
          const data = await response.json();
          await setGuestbookList(data.result); // 상태 업데이트
        } else {
           throw new Error('API 요청 실패');
        }
      } catch (error) {
        console.error('목록 조회 실패', error);
        alert(error.message);
      }
      setIsLoading(false);
    }

    let sessionBtn = (
      <span>
        {session ? (
          <span>
            <LogoutBtn /> <WriteForm userName={userName} fetchGuestbookList={fetchGuestbookList}/>
          </span>
        ) : (
          <LoginModal />
        )}
      </span>
    );


  // 방명록 삭제
  const handleDelete = async (id, index, e) => {
    try {
      const response = await fetch("/api/guestbook/delete", {
        method: "POST",  //DELETE 메쏘드 오류로 대체
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok) {
        const listItem = await e.target.closest('.listitem');
        if (listItem) {
          listItem.style.opacity = 0;
          alert(data.message);
          setTimeout(() => {
            listItem.style.display = "none";
          }, 300);
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert(error.message);
    }
  };

  return (    
    <>
      <div>
        {sessionBtn}
      </div>
      {!guestbookList ? <Loading/> : ''}
      {guestbookList.map((v, i) => (
        <div key={i} className="listitem rounded-lg p-1.5 sm:p-3 mb-2 sm:mb-3 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
          <div>
            <h4 className="text-base sm:text-lg font-bold sm:mb-1">{guestbookList[i].content}</h4>
            <p className="text-sm sm:text-base text-gray-500 sm:mb-1">{guestbookList[i].authorName}</p>
          </div>
          {session && userName === guestbookList[i].authorName && (
            <button className="text-sm sm:text-base" onClick={(e) => handleDelete(guestbookList[i]._id, i, e)}>🗑삭제</button>
          )}
        </div>
      ))}

      </>
    );
}


/**
 * @swagger
 * paths:
 *  /api/guestbook:
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
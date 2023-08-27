"use client";

// 방명록 목록 조회
export default async function ListItem({ result }) {
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
    <div>
      {result.map((v, i) => (
        <div key={i} className="listitem rounded-lg p-1.5 sm:p-3 mb-2 sm:mb-3 shadow-md bg-gray-100 dark:bg-gray-800">
          <h4 className="text-base sm:text-lg font-bold sm:mb-1">{result[i].content}</h4>
          <p className="text-sm sm:text-base text-gray-500 sm:mb-1">{result[i].authorName}</p>
          <span className="text-sm sm:text-base" onClick={(e) => handleDelete(result[i]._id, i, e)}>🗑삭제</span>
        </div>
      ))}
    </div>
  );
}

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
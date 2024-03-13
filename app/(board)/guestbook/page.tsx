import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ListItem, { GuestbookList } from "./ui/ListItems";
import Popup from "./ui/Popup";
import { Session } from "next-auth";

export const metadata = {
    title: "[방명록]|VIVIDNOW의 블로그",
    description: "마음을 읽는 개발자 김재광입니다",
};

export default async function GuestbookPage() {
    const session: Session | null = await getServerSession(authOptions);

    let guestbookList: GuestbookList[] = [];

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guestbook/list`);

        if (!response.ok) {
            throw new Error("방명록 조회 중 오류 발생");
        }

        const result = await response.json();

        if (result.status === "fail") {
            alert(result.message);
        }

        if (result.status === "error") {
            throw new Error(result.message);
        }

        guestbookList = result.data;
    } catch (error) {
        console.error("방명록 조회 중 오류 발생:", error);
        throw new Error("방명록 조회 중 오류 발생");
    }

    return (
        <>
            <Popup />
            <section className="mx-auto my-10 flex min-h-screen justify-center px-0.5">
                <div className="mx-1.5 w-full max-w-[720px]">
                    <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
                    <ListItem session={session} guestbookList={guestbookList} />
                </div>
            </section>
        </>
    );
}

// 방명록 리스트 조회 api. 응답은 200, 500으로 나뉜다.
/**
 * @swagger
 * paths:
 *  /api/guestbook/list:
 *    get:
 *      summary: "방명록 조회"
 *      description: "서버에 Body 데이터를 보내지 않고 Get방식으로 요청합니다"
 *      tags: [Guestbook]
 *      responses:
 *        "200":
 *          description: 전체 방명록 목록
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    status:
 *                      type: string
 *                    message:
 *                     type: string
 *                    data:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          _id:
 *                            type: string
 *                          content:
 *                            type: string
 *                          authorName:
 *                            type: string
 *                example:
 *                  status: "success"
 *                  message: "방명록 조회 성공"
 *                  data: [
 *                    {
 *                      _id: "60f3e3e3e3e3e3e3e3e3e3e1",
 *                      content: "방명록 내용",
 *                      authorName: "작성자 이름"
 *                    },
 *                    {
 *                      _id: "60f3e3e3e3e3e3e3e3e3e3e2",
 *                      content: "방명록 내용",
 *                      authorName: "작성자 이름"
 *                    },
 *                    {
 *                      _id: "60f3e3e3e3e3e3e3e3e3e3e3",
 *                      content: "방명록 내용",
 *                      authorName: "작성자 이름"
 *                    }
 *                  ]
 *        "500":
 *          description: 서버 오류
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *                example:
 *                  status: "error"
 *                  message: "서버 오류"
 */

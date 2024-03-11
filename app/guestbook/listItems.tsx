"use client";

import { LoginModal, LogoutBtn } from "./ui/LoginBtn";
import WriteForm from "./WriteForm";
import { useRouter } from "next/navigation";
import { ListItemProps } from "./interface/guestbookTypes";
import DeleteAccountModal from "./ui/DeleteAccount";
import { MouseEvent } from "react";

export default function ListItem({ session, guestbookList }: ListItemProps) {
    const router = useRouter();

    // 방명록 삭제
    const handleDelete = async (id: string, index: number, e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const response = await fetch("/api/guestbook/deletion", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
            }

            if (result.status === "error") {
                throw new Error(result.message);
            }

            const listItem = (e.target as HTMLElement).closest(".listitem");

            if (listItem) {
                alert(result.message);
                router.refresh();
            }
        } catch (error) {
            console.error("삭제 중 오류 발생:", error);
            alert("삭제 중 오류 발생");
        }
    };

    const userName: string = session ? session?.user?.name : null;

    const sessionEmail: string = session ? session?.user?.email : null;

    const sessionBtn = (
        <span>
            {session && userName ? (
                <span>
                    <div className="flex">
                        <LogoutBtn />
                        <div className="flex grow" />
                        <DeleteAccountModal sessionEmail={sessionEmail} />
                    </div>
                    <WriteForm userName={userName} />
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
                {guestbookList.length === 0 && (
                    <div className="my-20 text-center text-lg font-bold text-indigo-500 sm:text-xl">방명록이 없습니다.</div>
                )}
                {guestbookList.map((v, i) => (
                    <div
                        key={i}
                        className="listitem mb-2 flex items-center justify-between rounded-lg bg-gray-100 p-1.5 shadow-md dark:bg-gray-800 sm:mb-3 sm:p-3"
                    >
                        <div>
                            <h4 className="text-base font-bold sm:mb-1 sm:text-lg">{guestbookList[i].content}</h4>
                            <p className="text-sm text-gray-500 sm:mb-1 sm:text-base">{guestbookList[i].authorName}</p>
                        </div>
                        {session && userName === guestbookList[i].authorName && (
                            <button className="text-sm sm:text-base" onClick={e => handleDelete(guestbookList[i]._id, i, e)}>
                                🗑삭제
                            </button>
                        )}
                    </div>
                ))}
            </>
        </>
    );
}

// 방명록 삭제 api. body값에 게시글 id를 보내준다. 응답은 200, 400, 500으로 나뉜다.
/**
 * @swagger
 * /api/guestbook/delete:
 *   delete:
 *     summary: "방명록 삭제"
 *     description: "서버에 Body 데이터를 보내 삭제할 게시글의 id를 보냅니다."
 *     tags: [Guestbook]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *             example:
 *              id: "60f3e3e3e3e3e3e3e3e3e3e1"
 *
 *     responses:
 *       "200":
 *         description: 게시글 삭제 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: string
 *                 message:
 *                   type: string
 *                   example: "게시글 삭제 성공"
 *               example:
 *                status: "success"
 *                message: "게시글 삭제 성공"
 *       "403":
 *         description: 자신의 글만 삭제
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: string
 *                 message:
 *                   type: string
 *               example:
 *                status: "fail"
 *                message: "자신의 글만 삭제할 수 있습니다."
 *       "500":
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *               example:
 *                status: "error"
 *                message: "게시글 삭제 실패"
 *
 *
 */

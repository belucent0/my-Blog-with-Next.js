"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type WriteFormProps = {
    userName: string;
};

// 방명록 페이지 내 방명록 작성폼
export default function WriteForm({ userName }: WriteFormProps) {
    const [text, setText] = useState<string>("");
    const router = useRouter();

    // 작성폼 제출 기능
    const handleSubmit = async event => {
        event.preventDefault(); // 폼 제출에 따른 페이지 새로 고침 방지

        const content = event.target.elements.content.value;

        try {
            const response = await fetch("/api/guestbook/new", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ authorName: userName, content }),
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
                return;
            }

            if (result.status === "error") {
                throw new Error(result.message);
            }

            if (result.message) {
                alert(result.message);
                setText("");
                router.refresh();
            }
        } catch (error) {
            alert(error.message);
        }
    };

    //방명록 input 태그, event 발생한 DOM의 value 값을 event.target이 가리키게 함. 그것으로 상태저장
    const onChange = event => {
        setText(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 flex">
                <span className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-1 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:px-2">
                    {userName}{" "}
                </span>

                <div className="relative w-full">
                    <input
                        onChange={onChange}
                        value={text}
                        type="text"
                        name="content"
                        className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 px-1 py-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-600  dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 sm:px-3"
                        placeholder="100자 방명록을 남겨보세요"
                        maxLength={100}
                        minLength={2}
                        required
                    />
                    <button
                        type="submit"
                        className="absolute bottom-1.5 right-1.5 rounded-lg bg-indigo-700 px-1.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-indigo-500 dark:focus:ring-indigo-800 sm:px-3"
                    >
                        등록
                    </button>
                </div>
            </div>
        </form>
    );
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
 *              authorName:
 *                type: string
 *                description: "유저 이름"
 *              content:
 *                type: string
 *                description: "방명록 내용"
 *            example:
 *              authorName: "작성자 이름"
 *              content: "방명록 내용"
 *    responses:
 *      "200":
 *        description: 방명록 등록 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "success"
 *                message: "방명록 등록 성공"
 *      "400":
 *        description: 방명록 내용이 없을 때
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "fail"
 *                message: "방명록 내용이 없습니다."
 *      "401":
 *        description: 로그인 없이 방명록 등록 시도
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "fail"
 *                message: "
 *      "500":
 *        description: 방명록 등록 중 서버에러
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      content:
 *                        type: string
 *                      authorName:
 *                        type: string
 *              example:
 *                status: "error"
 *                message: "방명록 등록 중 서버에러"
 */

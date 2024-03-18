"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type WriteFormProps = {
    userName: string;
};

// 방명록 페이지 내 방명록 작성폼
export default function WriteForm({ userName }: WriteFormProps): JSX.Element {
    const [text, setText] = useState<string>("");
    const router = useRouter();

    // 작성폼 제출 기능
    const handleSubmit = async event => {
        event.preventDefault(); // 폼 제출에 따른 페이지 새로 고침 방지

        try {
            const response = await fetch("/api/guestbook/new", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ authorName: userName, content: text }),
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 flex">
                <span className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-1 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:px-2">
                    {userName}{" "}
                </span>

                <div className="relative w-full">
                    <input
                        onChange={e => setText(e.target.value)}
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

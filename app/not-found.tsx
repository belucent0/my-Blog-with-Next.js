'use client'

import { useRouter } from "next/navigation";

// 존재하지 않는 페이지 접속시
export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <> 
        <div className="mx-auto flex min-h-screen px-5 py-24 ">
          <div className="mx-auto flex h-full w-full max-w-[50rem] flex-col">
            <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
              <h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
                404
              </h1>
              <h1 className="block text-2xl font-bold text-white"></h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                이런, 존재하지 않는 페이지입니다.
              <br/>
                다른 페이지로 이동해보는 건 어떨까요?
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                <a
                  className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-transparent bg-indigo-700 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 sm:w-auto"
                  href="/"
                >
                  홈으로
                </a>
                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-indigo-700 ring-offset-white transition-all hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-slate-900 sm:w-auto"
                  onClick={() => handleGoBack()}
                >
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                이전 페이지로
              </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

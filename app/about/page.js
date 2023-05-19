"use client";

import Link from "next/link";

export default async function about() {
  return (
    <div className="list-bg">
      소개 합니다
      <div>
        <Link
          className="mr-5 hover:text-gray-900"
          href={"https://open.kakao.com/o/sXi5AZkf"}
        >
          연락하기
        </Link>
      </div>
    </div>
  );
}

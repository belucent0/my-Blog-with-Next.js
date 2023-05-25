"use client";

import Link from "next/link";

export default function ListItme({ result }) {
  return (
    <div>
      {result.map((v, i) => (
        <div className="list-item" key={i}>
            <h4>{result[i].content}</h4>
          <p>{result[i].authorName}</p>
          
          <Link href={`/edit/${result[i]._id}`}>📝수정</Link>
          <span
            onClick={async (e) => {
              try {
                const response = await fetch("/api/post/delete", {
                  method: "POST", //Nest.js DELETE 메쏘드 오류로 대체
                  body: result[i]._id,
                });

                e.target.parentElement.style.opacity = 0;
                alert("삭제 완료");
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
              } catch (error) {
                console.error("삭제 중 오류 발생:", error);
                alert("삭제 실패");
              }
            }}
          >
            🗑삭제
          </span>
        </div>
      ))}
    </div>
  );
}

'use client'

import Link from "next/link";

export default function ListItme({result}) {

    return (
        <div>
            <button><Link href={"/write"}>글작성</Link></button>      
          {
            result.map((v, i) => (
            <div className="list-item" key={i}>
              <Link href={`/detail/${result[i]._id}`}>
                  <h4>{result[i].title}</h4>
              </Link>
              <Link href={`/edit/${result[i]._id}`}>📝수정</Link>
              <span onClick={async (e) => {
                  try {
                    const response = await fetch('/api/post/delete', { method: 'POST', body: result[i]._id });

                    e.target.parentElement.style.opacity = 0;
                    alert('삭제 완료');
                    setTimeout(() => {
                      e.target.parentElement.style.display = 'none';
                    }, 1000);
                  } catch (error) {
                    console.error('삭제 중 오류 발생:', error);
                    alert('삭제 실패');
                  }
                }}>🗑삭제</span>
              <p>{result[i].content}</p>
            </div>
          ))
          }
        </div>
      );
    } 


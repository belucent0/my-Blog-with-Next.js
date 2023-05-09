import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions)
  if (!session) {
    return (
      <div>
        <h4>로그인 후 작성이 가능</h4>
      </div>
    );
  } else {
    return (
      <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목" />
          <input name="content" placeholder="글내용" />
          <button type="submit">작성</button>
        </form>
      </div>
    );
  }
}



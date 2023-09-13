import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { LoginModal, LogoutBtn } from "./LoginBtn";
import { connectDB } from "../../utils/database";
import { getServerSession } from "next-auth";
import WriteForm from "./WriteForm";
import Banner from "./Banner";
import ListItem from "./ListItem";

export default async function GuestbookPage() {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("guestbook")
    .find()
    .sort({ _id: -1 })
    .toArray();
  result = result.map((value) => {
    value._id = value._id.toString();
    return value
  });

  let session = await getServerSession(authOptions);
  let userName
  if (session) {
    userName = session?.user?.name;
  }

  let sessionBtn = (
    <span>
      {session ? (
        <span>
          <LogoutBtn /> <WriteForm userName={userName} />
        </span>
      ) : (
        <LoginModal />
      )}
    </span>
  );

  return (
    <>
    <Banner />
      <section className="flex min-h-screen justify-center mx-auto px-0.5 my-10">
          <div className="mx-1.5 w-full max-w-[720px]">
            <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
            <span> {sessionBtn} </span>
            <ListItem result={result} />
          </div>
      </section>
    </>
  );
}

/**
 * @swagger
 * paths:
 *  /api/guestbook:
 *    get:
 *      summary: "방명록 페이지 조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청합니다"
 *      tags: [Guestbook]
 *      responses:
 *        "200":
 *          description: 전체 방명록 목록
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    guestbook:
 *                      type: object
 *                      example:
 *                          [
 *                            { "_id": 1, "content": "반갑습니다", "authorName" : 유저1},
 *                            { "_id": 2, "content": "안녕하세요", "authorName" : 유저2},
 *                            { "_id": 3, "content": "하이요", "authorName" : 유저3},
 *                          ]
 */
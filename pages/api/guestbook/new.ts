import { connectDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB()).db("forum");
    try {
      if (session) {
        req.body.author = session.user?.name || "";
      }

      if (!session) {
        return res.status(401).json("로그인이 필요한 기능입니다");
      } else {
        if (req.body.content == "") {
          return res.status(400).json("내용을 입력해주세요.");
        }

        let guestbook = {
          content: req.body.content,
          authorEmail: session.user?.email,
          authorName: session.user?.name,
        };

        let result = await db.collection("guestbook").insertOne(guestbook);
        return res.status(200).json({ message: "작성 완료!", result });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("작성 실패");
    }
  } else {
    res.status(405).end();
  }
}

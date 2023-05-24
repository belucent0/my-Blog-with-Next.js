import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.name;
  }

  if (req.method == "POST") {
    if (!session) {
      return res.status(401).json("로그인이 필요한 기능입니다");
    } else {
      if (req.body.content == "") {
        return res.status(500).json("내용을 입력해주세요.");
      }

      req.body = JSON.parse(req.body);

      let guestbook = {
        content: req.body.comment,
        author_email: session.user.email,
        author_name: session.user.name,
      };

      try {
        const db = (await connectDB).db("forum");
        let result = await db.collection("guestbook").insertOne(guestbook);
        return res.redirect(302, "/guestbook");
      } catch (error) {
        return res.status(500).json("작성 실패");
      }
    }
  }
}

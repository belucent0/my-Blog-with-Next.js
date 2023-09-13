import { connectDB } from "../../../utils/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method == "POST") {    //Next.js DELETE 메쏘드 오류로 대체
    let session = await getServerSession(req, res, authOptions);

    if (!session || !session.user) {
      res.status(401).json({ message: "로그인이 필요합니다" });
      return;
    }

    const db = (await connectDB).db("forum");
    let userId = await db.collection("guestbook").findOne({ _id: new ObjectId(req.body.id) });

    if (userId && userId.authorEmail === session.user.email) {
      let result = await db.collection("guestbook").deleteOne({ _id: new ObjectId(req.body.id) });

      if (result.deletedCount > 0) {
        res.status(200).json({ message: "삭제 완료" });
      } else {
        res.status(500).json({ message: "삭제 실패" });
      }
    } else {
      res.status(403).json({ message: "자신의 글만 삭제할 수 있습니다" });
    }
  } else {
    res.status(405).end();
  }
}
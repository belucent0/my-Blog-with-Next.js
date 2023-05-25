import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res){
  if (req.method == "POST") {    //Nest.js DELETE 메쏘드 오류로 대체
    let session = await getServerSession(req, res, authOptions);
    console.log(session);

    if (!session) {
      return res.status(401).json({ message: "로그인이 필요합니다" });
    }

    const db = (await connectDB).db("forum");
    let userId = await db.collection("guestbook").findOne({ _id: new ObjectId(req.body) });
    console.log(session.user.email, "일치?", userId.authorEmail);

    if (userId.authorEmail === session.user.email) {
      let result = await db.collection("guestbook").deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json({ message: "삭제완료" });
    } else {
      return res.status(403).json({ message: "자신의 글만 삭제할 수 있습니다" });
    }
  }
}
        


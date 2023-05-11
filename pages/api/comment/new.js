import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  let session = await getServerSession(req, res, authOptions);

  if (req.method == "POST") {
    if (req.body.content == "") {
      return res.status(500).json("내용을 입력해주세요.");
    }
    if (!session) {
        return res.status(401).json("로그인이 필요한 기능입니다")
    }
    req.body = JSON.parse(req.body)

    let comment = {
        content : req.body.comment,
        author : session.user.email,
        author_name : session.user.name,
        parent : new ObjectId(req.body._id)
    }

    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("comment").insertOne(comment);

      let newresult = await db.collection('comment').find({ parent : new ObjectId(req.body._id)}).toArray();
      return res.status(200).json(newresult, "작성 완료");
    } catch (error) {
      return res.status(500).json("작성 실패");
    }
  }
}
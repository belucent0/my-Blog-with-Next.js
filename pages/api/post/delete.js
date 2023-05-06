import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    if (req.method == 'POST'){
        console.log('2',req.body)
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').deleteOne(
            {_id : new ObjectId(req.body)}
            )
            if (result.deletedCount > 0) {
                return res.status(200).json({ message: "삭제완료" });
              } else {
                return res.status(404).json({ message: "포스트를 찾을 수 없습니다." });
              }
            } catch (error) {
                return res.status(500).json({ message: "서버 오류" });
              }
    }
}


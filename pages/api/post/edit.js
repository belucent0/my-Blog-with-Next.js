import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    if (req.method == 'POST'){
        if (req.body.title == '') {
            return res.status(500).json('제목을 입력해주세요.')
        }
        if (req.body.content == '') {
            return res.status(500).json('내용을 입력해주세요.')
        }

        let editPost = {
            title : req.body.title, 
            content : req.body.content
        }
        
        try {
            const db = (await connectDB).db("forum")
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)},
            {$set : editPost}
            )
            return res.redirect(302,'/list')
        } catch (err){
            return res.status(500).json('수정 실패')
        }
    }
}


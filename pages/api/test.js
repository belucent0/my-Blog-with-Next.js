import { connectDB } from "@/util/database"

export default async function post(req, res){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    if (req.method == 'POST'){
        const {title, content }= req.body
        const newPost = { title, content }
        let post = await db.collection('post').insertOne(newPost)
        return res.status(200).json('처리완료')
    }
}
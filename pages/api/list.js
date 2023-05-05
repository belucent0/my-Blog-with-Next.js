import { connectDB } from "@/util/database"

export default async function board(req, res){

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    if (req.method == 'GET'){
        return res.status(200).json(result)
    }
}
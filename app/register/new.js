import { connectDB } from "@/util/database"

export default async function handler(props){
    const db = (await connectDB).db("forum")
    let result = await db.collection('user').findOne({userId: new ObjectId(props.body.userId)})

    if (req.method == 'POST'){
    if (req.body.id == '') {
        return res.status(500).json('제목을 입력해주세요.')
    }
    if (req.body.password == '') {
        return res.status(500).json('내용을 입력해주세요.')
    }
    
    try {
        const db = (await connectDB).db("forum")
        let result = await db.collection('user').insertOne(req.body)
        return res.redirect(302,'/sign')
    } catch (error){
        return res.status(500).json('가입 실패')
    }

    
}
    
}
import { connectDB } from "@/util/database";
import bycrypt from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.name == "") {
            return res.status(500).json("이름을 입력해주세요.");
        }
        if (req.body.email == "") {
            return res.status(500).json("이메일을 입력해주세요.");
        }
        if (req.body.password == "") {
            return res.status(500).json("패스워드를 입력해주세요.");
        }
        if (req.body.pwconfirm == "") {
            return res.status(500).json("패스워드 확인란을 입력해주세요.");
        }
        if (req.body.pwconfirm !== req.body.password) {
            return res.status(500).json("패스워드가 일치하지 않습니다");
        }
  
        let db = (await connectDB).db("forum")
        let userId = await db.collection("user_cred").findOne({email: req.body.email});

        if (!userId) {
            let hash = await bycrypt.hash(req.body.password, 10)
            req.body.password = hash
            const {pwconfirm, ...userInfo} = req.body 
            
            await db.collection('user_cred').insertOne(userInfo)
            return res.status(200).json('가입성공')
        } else if (userId.email === req.body.email) {
            return res.status(500).json('이미 사용중인 이메일 입니다')
        } else {
            return res.status(500).json('가입 실패')
        }

    }
}
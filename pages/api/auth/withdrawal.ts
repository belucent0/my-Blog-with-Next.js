import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";

export default async function withdrawalHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        return res.status(405).end();
    }

    const { email, password } = req.body;

    const client = await connectDB();
    const db = await client.db("forum");
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "정상적인 요청이 아닙니다." });
        }
        const result = await db.collection("guest_credentials").findOne({ email });

        if (!result) {
            return res.status(404).json({ message: "존재하지 않는 계정입니다." });
        }

        // 비밀번호 확인
        const isMatched = await bcrypt.compare(password, result.password);

        if (!isMatched) {
            return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
        }

        // 게스트 계정인지 확인
        if (result.role !== "guest") {
            return res.status(403).json({ message: "삭제할 수 없는 계정입니다." });
        }

        // 계정 삭제
        const isDeleted = await db.collection("guest_credentials").deleteOne({ email });

        if (isDeleted.deletedCount === 0) {
            return res.status(500).json({ message: "계정 삭제 중 서버에러 발생" });
        }

        return res.status(200).json({ message: "계정 삭제 성공!" });
    } catch (error) {
        console.error("계정 삭제 에러:", error);
        return res.status(500).json({ message: "계정 삭제 중 서버 에러 발생" });
    }
}

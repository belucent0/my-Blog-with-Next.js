import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import { ResponseData } from "../../api.interface";

export default async function withdrawalHandler(req: NextApiRequest, res: NextApiResponse<ResponseData<null>>) {
    if (req.method !== "DELETE") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    const { email, password } = req.body;

    try {
        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return res.status(401).json({ status: "fail", message: "로그인 정보가 없습니다." });
        }

        if (!email || !password) {
            return res.status(400).json({ status: "fail", message: "정상적인 요청이 아닙니다." });
        }
        const db = (await connectDB()).db("forum");
        const result = await db.collection("guest_credentials").findOne({ email });

        if (!result) {
            return res.status(404).json({ status: "fail", message: "존재하지 않는 계정입니다." });
        }

        // 비밀번호 확인
        const isMatched = await bcrypt.compare(password, result.password);

        if (!isMatched) {
            return res.status(401).json({ status: "fail", message: "비밀번호가 일치하지 않습니다." });
        }

        // 게스트 계정인지 확인
        if (result.role !== "guest") {
            return res.status(403).json({ status: "fail", message: "삭제할 수 없는 계정입니다." });
        }

        // 계정 삭제
        const isDeleted = await db.collection("guest_credentials").deleteOne({ email });

        if (isDeleted.deletedCount === 0) {
            return res.status(500).json({ status: "fail", message: "계정 삭제 중 서버에러 발생" });
        }

        return res.status(200).json({ status: "success", message: "계정 삭제 성공!" });
    } catch (error) {
        console.error("계정 삭제 에러:", error);
        return res.status(500).json({ status: "error", message: "계정 삭제 중 서버 에러 발생" });
    }
}

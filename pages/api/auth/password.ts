import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import { PasswordValidation, ResponseData } from "../../api.interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData<PasswordValidation>>) {
    if (req.method !== "POST") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    try {
        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return res.status(401).json({ status: "fail", message: "로그인 정보가 없습니다." });
        }

        const { email, password } = req.body;

        const db = (await connectDB()).db("forum");
        const data = await db.collection("guest_credentials").findOne({ email });

        console.log(data, "data");
        if (!data) {
            return res.status(404).json({ status: "fail", message: "존재하지 않는 계정입니다." });
        }

        // 비밀번호 확인
        const isMatched = await bcrypt.compare(password, data.password);

        if (!isMatched) {
            return res.status(401).json({ status: "fail", message: "비밀번호가 일치하지 않습니다." });
        }

        return res.status(200).json({ status: "success", message: "비밀번호 확인", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "비밀번호 확인이 정상 처리되지 않았습니다.",
        });
    }
}

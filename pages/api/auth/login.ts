import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { ResponseData } from "../../../app/interface/api.interface";
import { PasswordValidation } from "./password";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData<PasswordValidation>>) {
    if (req.method !== "POST") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    try {
        const { email, password } = req.body;

        const db = (await connectDB()).db("forum");
        const data = await db.collection("guest_credentials").findOne({ email });

        if (!data) {
            return res.status(401).json({ status: "fail", message: "이메일 또는 비밀번호가 일치하지 않습니다." });
        }

        // 비밀번호 확인
        const isPasswordVaild = await bcrypt.compare(password, data.password);

        if (!isPasswordVaild) {
            return res.status(401).json({ status: "fail", message: "이메일 또는 비밀번호가 일치하지 않습니다." });
        }

        return res.status(200).json({ status: "success", message: "로그인 성공", data });
    } catch (error) {
        throw new Error("로그인 서버에서 에러가 발생했습니다.");
    }
}

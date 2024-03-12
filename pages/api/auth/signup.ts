import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { ResponseData } from "../../../app/interface/api.interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData<null>>) {
    if (req.method !== "POST") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }
    try {
        const { email, password } = req.body;

        // email 규칙 확인
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ status: "fail", message: "이메일 형식이 올바르지 않습니다." });
        }

        // password 8~15자리, 영문과 숫자, 특수문자 조합
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({ status: "fail", message: "비밀번호는 8~15자리의 영문과 숫자, 특수문자 조합으로 입력해주세요." });
        }

        const db = (await connectDB()).db("forum");

        // 아이디 중복 확인
        const result = await db.collection("guest_credentials").findOne({ email });

        if (result) {
            return res.status(400).json({ status: "fail", message: "이미 사용중인 이메일입니다." });
        }

        req.body.password = await bcrypt.hash(req.body.password, 10);

        await db.collection("guest_credentials").insertOne(req.body);

        return res.status(200).json({ status: "success", message: "회원가입 성공" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "회원가입 중 서버 에러 발생" });
    }
}

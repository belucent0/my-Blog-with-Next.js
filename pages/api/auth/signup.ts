import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      let { email, password } = req.body;

      // email 규칙 확인
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        return res
          .status(400)
          .json({ message: "이메일 형식이 올바르지 않습니다." });
      }

      // password 8~15자리, 영문과 숫자, 특수문자 조합
      let passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message:
            "비밀번호는 8~15자리의 영문과 숫자, 특수문자 조합으로 입력해주세요.",
        });
      }

      const db = (await connectDB()).db("forum");

      // 아이디 중복 확인
      let result = await db.collection("guest_credentials").findOne({ email });

      if (result) {
        return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
      }

      req.body.password = await bcrypt.hash(req.body.password, 10);

      await db.collection("guest_credentials").insertOne(req.body);

      return res.status(200).json({ message: "회원가입 성공" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "회원가입이 정상 처리되지 않았습니다." });
    }
  }
}

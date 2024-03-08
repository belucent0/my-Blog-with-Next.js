import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      let { loginId, password } = req.body;

      password = await bcrypt.hash(password, 10);
      const db = (await connectDB()).db("forum");
      let result = await db
        .collection("guest_credentials")
        .findOne({ loginId, password });

      return res
        .status(200)
        .json({ succese: true, message: "로그인 성공", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        succese: false,
        message: "로그인이 정상 처리되지 않았습니다.",
      });
    }
  } else {
    res.status(405).end();
  }
}

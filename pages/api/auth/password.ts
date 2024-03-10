import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const client = await connectDB();
  const db = await client.db("forum");

  try {
    let { email, password } = req.body;

    let result = await db.collection("guest_credentials").findOne({ email });

    if (!result) {
      return res.status(404).json({ message: "존재하지 않는 계정입니다." });
    }

    // 비밀번호 확인
    let isMatched = await bcrypt.compare(password, result.password);

    if (!isMatched) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    return res
      .status(200)
      .json({ succese: true, message: "비밀번호 확인", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      succese: false,
      message: "비밀번호 확인이 정상 처리되지 않았습니다.",
    });
  }
}

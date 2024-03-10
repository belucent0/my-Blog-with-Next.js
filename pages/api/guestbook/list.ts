import { GuestbookList } from "../../../app/guestbook/guestbookTypes";
import { connectDB } from "../../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

    const client = await connectDB();
    const db = await client.db("forum");

    try {
      let data: GuestbookList[] = await db.collection("guestbook").find().sort({ _id: -1 }).toArray();

      data = data.map((value) => {value._id = value._id.toString();
        return value;
      });

      return res.status(200).json({ status: "success", message: "조회 성공", data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", message: "조회 중 서버 에러 발생" });
    }

}

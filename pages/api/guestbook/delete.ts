import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    let session = await getServerSession(req, res, authOptions);

    if (!session || !session.user) {
      res.status(401).json({ message: "로그인이 필요합니다" });
      return;
    }

    const db = (await connectDB()).db("forum");
    try {
      let guestbookId = await db
        .collection("guestbook")
        .findOne({ _id: new ObjectId(req.body.id) });

      if (guestbookId && guestbookId.authorEmail === session.user.email) {
        let result = await db
          .collection("guestbook")
          .deleteOne({ _id: new ObjectId(req.body.id) });

        if (result.deletedCount > 0) {
          return res
            .status(200)
            .json({ status: "success", message: "삭제 완료" });
        } else {
          return res
            .status(500)
            .json({ status: "error", message: "삭제 실패" });
        }
      } else {
        res
          .status(403)
          .json({ status: "fail", message: "자신의 글만 삭제할 수 있습니다" });
      }
    } catch (error) {
      console.log(error);
      throw new Error("삭제 중 오류");
    }
  } else {
    res.status(405).end();
  }
}

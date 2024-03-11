import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { ResponseData } from "../../api.interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData<null>>) {
    if (req.method !== "DELETE") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    try {
        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return res.status(401).json({ status: "fail", message: "로그인 정보가 없습니다." });
        }

        const db = (await connectDB()).db("forum");

        const guestbookId = await db.collection("guestbook").findOne({ _id: new ObjectId(req.body.id) });

        if (!guestbookId) {
            return res.status(404).json({ status: "fail", message: "존재하지 않는 글입니다." });
        }

        if (guestbookId && guestbookId.authorEmail === session.user.email) {
            const result = await db.collection("guestbook").deleteOne({ _id: new ObjectId(req.body.id) });

            if (result.deletedCount > 0) {
                return res.status(200).json({ status: "success", message: "삭제 완료" });
            } else {
                return res.status(500).json({ status: "error", message: "삭제 실패" });
            }
        } else {
            res.status(403).json({ status: "fail", message: "자신의 글만 삭제할 수 있습니다" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "삭제 중 서버 에러 발생" });
    }
}

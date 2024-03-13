import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import { ResponseData } from "../../../app/interface/api.interface";
import { GuestbookList } from "../../../app/(board)/guestbook/ui/ListItems";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData<GuestbookList[]>>) {
    if (req.method !== "GET") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    try {
        const db = (await connectDB()).db("forum");

        let data: GuestbookList[] = await db.collection("guestbook").find().sort({ _id: -1 }).toArray();

        if (data.length === 0) {
            return res.status(404).json({ status: "fail", message: "조회 결과가 없습니다." });
        }

        data = data.map(value => {
            value._id = value._id.toString();
            return value;
        });

        return res.status(200).json({ status: "success", message: "조회 성공", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", message: "조회 중 서버 에러 발생" });
    }
}

import { connectDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// 사용자 요청량 추적하는 객체
const userRequests = {};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ status: "fail", message: "허용되지 않은 요청 방식입니다." });
    }

    try {
        const session = await getServerSession(req, res, authOptions);

        if (!session) {
            return res.status(401).json({ status: "fail", message: "로그인 정보가 없습니다." });
        }

        if (!req.body.content || req.body.content.trim() === "") {
            return res.status(400).json({ status: "fail", message: "내용을 입력해주세요." });
        }

        // 사용자의 요청 추적
        const userEmail = session.user?.email;
        if (!userRequests[userEmail]) {
            userRequests[userEmail] = [];
        }
        userRequests[userEmail].push(Date.now());

        // 5분 이내의 요청이 10개 초과시 요청 거부
        if (userRequests[userEmail].length > 10) {
            if (Date.now() - userRequests[userEmail][0] < 5 * 60 * 1000) {
                return res.status(429).json({ status: "fail", message: "5분 동안의 요청이 너무 많습니다. 5분 후 다시 시도해주세요." });
            }
            userRequests[userEmail].shift();
        }

        if (!req.body.content || req.body.content.trim() === "") {
            return res.status(400).json({ status: "fail", message: "내용을 입력해주세요." });
        }

        const db = (await connectDB()).db("forum");

        const guestbook = {
            content: req.body.content,
            authorEmail: session.user?.email,
            authorName: session.user?.name,
        };

        const result = await db.collection("guestbook").insertOne(guestbook);
        return res.status(200).json({ status: "success", message: "작성 완료!", result });
    } catch (error) {
        console.error("방명록 작성 중 서버 에러 발생: ", error);
        return res.status(500).json({ status: "error", message: "방명록 작성 중 서버에러 발생" });
    }
}

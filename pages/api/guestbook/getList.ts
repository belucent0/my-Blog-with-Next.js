import { connectDB } from "../../../utils/database"

export default async function guestbookhandler(req, res) {
  if (req.method == "GET") {

    try {
      const db = (await connectDB()).db("forum");
      let result = await db
        .collection("guestbook")
        .find()
        .sort({ _id: -1 })
        .toArray();
        
        result = result.map((value) => {
          value._id = value._id.toString();
          return value
      });
      res.status(200).json({succese : true,  message : '조회 성공', result});
    } catch (error) {
      console.error(error);
      res.status(500).json({succese : false, message : '서버 오류' })
    } 
  } else {
    res.status(405).end();
  }
}
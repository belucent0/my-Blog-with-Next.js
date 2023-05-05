import { connectDB } from "@/util/database"

export default async function showTime(req, res){

    if (req.method == 'GET'){
        let time = new Date()
        return res.status(200).json(time)
    }
}
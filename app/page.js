import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"
import Link from "next/link"

export default async function Home() {
  
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div>
      <Link href={"/list"}><h1>게시판 가기</h1></Link>
    </div>
  )
}

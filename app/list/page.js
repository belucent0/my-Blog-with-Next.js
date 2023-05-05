import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    console.log(result)

    let data = {name : 'kim', age : 20}
    

    return (
      <div className="list-bg">
        {result.map((v, i) => (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${result[i]._id}`}>
                <h4>{result[i].title}</h4>
            </Link>
            {/* <DetailLink/> */}
            <p>{result[i].content}</p>
          </div>
        ))}

      </div>
    );
  } 
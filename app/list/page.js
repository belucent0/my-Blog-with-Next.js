import { connectDB } from "@/util/database"
import ListItme from "./ListItem"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    result = result.map((value)=>{
      value._id = value._id.toString()
      return value
    })

    return (
      <div className="list-bg">
        <ListItme result={result}/>
      </div>
    );
  } 
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { LoginBtn, LogoutBtn } from '../LoginBtn';
import ListItme from './ListItem';
import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import WriteForm from './WriteForm';

export default async function GuestbookPage() {
  const db = (await connectDB).db("forum")
  let result = await db.collection('guestbook').find().sort({"_id": -1}).toArray()
  result = result.map((value)=>{
    value._id = value._id.toString()
    return value
  })


  let session = await getServerSession(authOptions);


  let sessionBtn = (
    <span >
      {session ? (
      <span className="logo">
      <WriteForm /> {" "}<LogoutBtn /> {session.user.name}</span>) 
      : (<LoginBtn />
      )}
    </span>
  );

  return (
    <>
    <section>
      {sessionBtn}
      <ListItme result={result}/>
    </section>
    </>
  );
}
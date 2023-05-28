import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { LoginBtn, LogoutBtn } from "../LoginBtn";
import ListItme from "./ListItem";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import WriteForm from "./WriteForm";

export default async function GuestbookPage() {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("guestbook")
    .find()
    .sort({ _id: -1 })
    .toArray();
  result = result.map((value) => {
    value._id = value._id.toString();
    return value;
  });

  let session = await getServerSession(authOptions);
  let userName
  let userImage
  if (session) {
    userName = session.user.name
    userImage = session.user.image
  }

  let sessionBtn = (
    <span>
      {session ? (
        <span>
          <LogoutBtn/> <WriteForm userName={userName} userImage={userImage}/> 
        </span>
      ) : (
        <LoginBtn />
      )}
    </span>
  );
  console.log(session);

  return (
    <>
      <section className="flex justify-center items-center">
        <div className="max-w-[600px] w-full mx-3">
          <h1 className="font-bold text-3xl font-serif mb-4 text-center">방명록</h1>
          <span> {sessionBtn} </span>
          <ListItme result={result}/>
        </div>
      </section>
    </>
  );
}

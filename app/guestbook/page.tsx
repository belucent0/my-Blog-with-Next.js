import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ListItem from "./listItems";
import Popup from "./Popup";
import { connectDB } from "../../utils/database";
import { GuestbookList, Session } from "./guestbookTypes";

export const metadata = {
  title: "[방명록]|VIVIDNOW의 블로그",
  description: "마음을 읽는 개발자 김재광입니다",
};

export default async function GuestbookPage() {

  let session : Session | null = await getServerSession(authOptions);
  let userName : string | undefined | null
  
  if (session) {
    userName = session?.user?.name;
  } 

  const client = await connectDB()
  const db = client.db("forum");
  let guestbookList : GuestbookList[]  = await db
    .collection("guestbook")
    .find()
    .sort({ _id: -1 })
    .toArray();

  guestbookList = guestbookList.map((value) => {
    value._id = value._id.toString();
    return value
  });

  return (
    <>
    <Popup/>
      <section className="flex min-h-screen justify-center mx-auto px-0.5 my-10">
          <div className="mx-1.5 w-full max-w-[720px]">
            <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
            <ListItem userName={userName} session={session} guestbookList={guestbookList} />
          </div>
      </section>
    </>
  );
}
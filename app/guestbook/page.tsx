import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ListItem from "./listItems";
import Popup from "./Popup";
import { connectDB } from "../../utils/database";

export default async function GuestbookPage() {

  let session = await getServerSession(authOptions);
  let userName
  if (session) {
    userName = session?.user?.name;
  }

  const client = await connectDB()
  const db = client.db("forum");
  let guestbookList = await db
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
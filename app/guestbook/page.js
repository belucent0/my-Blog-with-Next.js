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
  let userName;
  if (session) {
    userName = session.user.name;
  }

  let sessionBtn = (
    <span>
      {session ? (
        <span>
          <LogoutBtn /> <WriteForm userName={userName} />
        </span>
      ) : (
        <LoginBtn />
      )}
    </span>
  );

  return (
    <>
      <section className="flex min-h-screen items-center justify-center mx-auto px-0.5 py-24">
          <div className="mx-3 w-full max-w-[700px]">
            <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
            <span> {sessionBtn} </span>
            <ListItme result={result} />
          </div>
      </section>
    </>
  );
}

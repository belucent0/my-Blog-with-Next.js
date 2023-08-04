import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { LoginBtn, LogoutBtn } from "../components/LoginBtn";
import { connectDB } from "../../util/database";
import { getServerSession } from "next-auth";
import WriteForm from "./WriteForm";
import Banner from "./Banner";
import ListItem from "./ListItem";
import Loading from "../loading";
import { Suspense } from "react";

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
    userName = session?.user?.name;
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
    <Banner />
      <section className="flex min-h-screen justify-center mx-auto px-0.5 my-10">
          <div className="mx-1.5 w-full max-w-[720px]">
            <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
            <Suspense fallback={<Loading/>}>
            <span> {sessionBtn} </span>
            </Suspense>
            <ListItem result={result} />
          </div>
      </section>
    </>
  );
}


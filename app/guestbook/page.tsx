import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Banner from "./Banner";
import ListItem from "./listItems";

export default async function GuestbookPage() {

  let session = await getServerSession(authOptions);
  let userName
  if (session) {
    userName = session?.user?.name;
  }

  return (
    <>
    <Banner />
      <section className="flex min-h-screen justify-center mx-auto px-0.5 my-10">
          <div className="mx-1.5 w-full max-w-[720px]">
            <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
            <ListItem userName={userName} session={session}/>
          </div>
      </section>
    </>
  );
}
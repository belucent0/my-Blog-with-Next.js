import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ListItem from "./listItems";
import Popup from "./Popup";
import { connectDB } from "../../utils/database";
import { GuestbookList } from "./guestbookTypes";
import { Session } from "next-auth";

export const metadata = {
  title: "[방명록]|VIVIDNOW의 블로그",
  description: "마음을 읽는 개발자 김재광입니다",
};

export default async function GuestbookPage() {
  let session: Session | null = await getServerSession(authOptions);
  let userName: string | undefined | null;

  if (session) {
    userName = session?.user?.name;
  }

  let guestbookList: GuestbookList[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/guestbook/list`
    );

    if (!response.ok) {
      throw new Error("서버 오류");
    }
    const result = await response.json();

    guestbookList = result.data;
  } catch (error) {
    console.error("방명록 조회 중 오류 발생:", error);
  }

  return (
    <>
      <Popup />
      <section className="mx-auto my-10 flex min-h-screen justify-center px-0.5">
        <div className="mx-1.5 w-full max-w-[720px]">
          <h1 className="mb-4 text-center text-3xl font-bold">방명록</h1>
          <ListItem
            userName={userName}
            session={session}
            guestbookList={guestbookList}
          />
        </div>
      </section>
    </>
  );
}

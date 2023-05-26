import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { LoginBtn, LogoutBtn } from "../LoginBtn";
import Link from "next/link";
import DarkModeBtn from "../DarkModeBtn";

export default async function Header() {
  let session = await getServerSession(authOptions);

  let sessionBtn = (
    <span>
      {session ? (
        <span className="logo">
          {session.user.name} <LogoutBtn />{" "}
        </span>
      ) : (
        <LoginBtn />
      )}
    </span>
  );

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href={"/"}
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            <span className="ml-3 text-xl font-semibold ">VIVIDNOW</span>
          </Link>
          <nav className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-4 hover:text-gray-900" href={"/"}>
              홈
            </Link>
            <Link className="mr-4 hover:text-gray-900" href={"/about"}>
              소개
            </Link>
            <Link className="mr-4 hover:text-gray-900" href={"/works"}>
              프로젝트
            </Link>
            {/* <Link className="mr-4 hover:text-gray-900" href={"/list"}>
              게시판
            </Link> */}
            <Link className="mr-4 hover:text-gray-900" href={"/guestbook"}>
              방명록
            </Link>
            <span className="mr-4" ><DarkModeBtn  /></span>
          </nav>
          {/* <span className="ml-4 hover:text-gray-900">
              {sessionBtn}
          </span> */}
        </div>
      </header>
    </>
  );
}

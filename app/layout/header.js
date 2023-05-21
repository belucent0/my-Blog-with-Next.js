import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { LoginBtn, LogoutBtn } from "../LoginBtn";
import Link from "next/link";
import DarkModeBtn from "../DarkModeBtn";
import autoprefixer from "autoprefixer";

export default async function Header() {
  let session = await getServerSession(authOptions);

  let sessionBtn = (
    <span>
      {session ? (
      <span className="logo">{session.user.name} <LogoutBtn />{" "}</span>) 
      : (<LoginBtn />
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
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">VIVIDNOW</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href={"/"}>
              홈
            </Link>
            <Link className="mr-5 hover:text-gray-900" href={"/about"}>
              소개
            </Link>
            <Link className="mr-5 hover:text-gray-900" href={"/works"}>
              프로젝트
            </Link>
            <Link className="mr-5 hover:text-gray-900" href={"/list"}>
              방명록
            </Link>
            <span className="ml-5 hover:text-gray-900">
           {sessionBtn}
           </span>
           <span className="ml-5 hover:text-gray-900">
            <DarkModeBtn />
          </span>
          </nav>
        </div>
      </header>
    </>
  );
}

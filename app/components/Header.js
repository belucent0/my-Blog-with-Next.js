import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default async function Header() {

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
              className="h-auto w-6 text-indigo-700"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            <span className="ml-3 text-2xl font-semibold ">VIVIDNOW</span>
          </Link>
          <nav className="gap-x-10 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={"/"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  홈
              </Link>
              <Link href={"/about"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  소개
              </Link>
              <Link href={"/projects"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  프로젝트
              </Link>
              <Link href={"/guestbook"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  방명록
              </Link>
              <DarkModeBtn className="ml-10"/>
          </nav>
        </div>
      </header>
    </>
  );
}

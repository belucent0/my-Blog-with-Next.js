import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

//레이아웃 - header 네이베이션바 카테고리
export default function Header() {
  return (
    <>
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href={"/"}
          >
            <span className="ml-3 text-2xl font-black dark:text-white ">VIVIDNOW</span>
          </Link>
          <nav className="gap-x-4 md:gap-x-5 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={"/"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  홈
              </Link>
              <Link href={"/about"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  소개
              </Link>
              <Link href={"/projects"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  프로젝트
              </Link>
              <Link href={"/blog"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  블로그
              </Link>
              <Link href={"/guestbook"} className="text-base font-semibold  text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" >
                  방명록
              </Link>
              <DarkModeBtn/>
          </nav>
        </div>
      </header>
    </>
  );
}

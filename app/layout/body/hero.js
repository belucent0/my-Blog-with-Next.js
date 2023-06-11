import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-2/3 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <h1 className="title-font mb-4 text-xl font-medium text-gray-900 md:text-2xl">
          환영합니다.
        </h1>
        <p className="mb-8 leading-relaxed">안녕하세요. 김재광입니다. </p>
        <div className="flex justify-center">
          <Link href={"/about"}>
            <button className="btn-project">소개 보러가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

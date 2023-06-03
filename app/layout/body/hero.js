import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-xl mb-4 font-medium text-gray-900 lg:text-3xl md:text-2xl">
          안녕하세요. 김재광입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          환영합니다.
        </p>
        <div className="flex justify-center">
          <Link href={"/about"}>
            <button className="btn-project">소개 보러가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

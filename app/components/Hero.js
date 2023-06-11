import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Next.js", "Nest.js", "Express.js"],
    loop: 0,
    cursorStyle: "|",
  });
  return (
    <>
      <p className="p-2 font-bold text-indigo-700 sm:text-base md:py-3 md:text-lg">
        Node.js 환경 웹개발에 관심을 가진
      </p>
      <h1 className="text-3xl font-bold sm:text-5xl md:py-6 md:text-6xl">
        마음을 읽는 개발자 <br />
        김재광입니다.
      </h1>
      <div className="flex items-center justify-center  text-gray-500">
        <div className="pl-2 text-xl font-bold sm:text-3xl md:pl-4 md:text-4xl">
          {text}
          <Cursor />
        </div>
        <p className="py-4 text-xl font-bold sm:text-3xl md:text-4xl">
          프로젝트 경험이 있습니다.
        </p>
      </div>
      <p className="text-xl font-bold text-gray-700 md:text-2xl">
        일신우일신(日新又日新)의 마음으로 살아갑니다.
      </p>
    </>
  );
}

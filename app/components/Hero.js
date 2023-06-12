import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Next.js", "Nest.js", "Express.js"],
    loop: 0,
    cursorStyle: "|",
  });
  return (
    <>
      <p className="p-2 font-bold text-indigo-700 sm:text-base md:py-1 md:text-lg">
        고객과 동료의 <br />
      </p>
      <h1 className="text-3xl text-neutral-600 font-bold sm:text-5xl md:py-3 md:text-6xl">
        마음을 읽는 개발자 <br />
        김재광입니다.
      </h1>

        <div className="m-6 text-xs md:text-lg">
          <ul>
            <li className="text-gray-500">팀내 제약사항을 파악하는데 적극적입니다.</li>
            <li className="text-gray-500">고객 중심의 서비스를 고민합니다.</li>
            <li className="text-gray-500">유지보수성을 고려합니다.</li>
          </ul>
        </div>

        <div className="flex items-center justify-center text-indigo-800  dark:text-indigo-400">
        <div className="pl-2 text-xl font-bold sm:text-3xl md:pl-4 md:text-4xl">
          {text}
          <Cursor />
        </div>
        <p className="py-4 text-lg font-bold text-gray-500 sm:text-3xl md:text-4xl">
          프로젝트 경험이 있습니다.
        </p>
      </div>
    </>
  );
}

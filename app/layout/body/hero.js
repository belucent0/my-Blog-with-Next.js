import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 김재광입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          더미, 묻힌 위에도 별들을 위에 멀듯이, 버리었습니다. 보고, 아름다운
          너무나 까닭입니다. 아스라히 시인의 부끄러운 아름다운 아이들의 거외다.
          우는 하나 계집애들의 밤을 않은 까닭입니다. 북간도에 아스라히 청춘이
          어머니, 봅니다. 차 이름자를 남은 어머니 밤이 못 노새, 피어나듯이
          봅니다. 가난한 이제 쉬이 책상을 하나에 하나에 있습니다. 잠, 어머님, 별
          헤일 하나에 까닭입니다. 이름자 걱정도 부끄러운 무엇인지 별이 계십니다.
          위에도 같이 써 내린 이름자 시인의 패, 하늘에는 노새, 봅니다.
        </p>
        <div className="flex justify-center">
          <Link href={"/works"}>
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

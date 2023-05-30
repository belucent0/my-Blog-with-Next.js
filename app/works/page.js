import Image from "next/image";
import Link from "next/link";

export default async function List() {
  // const db = (await connectDB).db("forum");
  // let result = await db.collection("post").find().toArray();
  // result = result.map((value) => {
  //   value._id = value._id.toString();
  //   return value;
  // });

  const worksList = [
    {
      id: 1,
      src: "https://dummyimage.com/723x403",
      alt: "Image",
      width: 723,
      height: 403,
      period: "23.05.18 ~ 진행중",
      title : "나만의 블로그",
      content : "단독 프로젝트, 기능 : 소개란, 작업이력란, 방명록, 다크모드, 소셜로그인, 블로깅(추후 예정)",
      tags : "JavaScript, Next.js, MongoDB, tailwindCSS, NextAuth.js, Vercel, 채널톡OpenAPI",
      github : "https://github.com/vividnow/my-Blog-with-Next.js",
      etcLink : "자세히 보기"
    },
    {
      id: 2,
      src: "https://blog.kakaocdn.net/dn/bGsk7q/btsdGc06DCc/Pxp1PLfq0fpcPqE4N39SPk/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "23.02.27~23.03.31(5주)",
      title : "스파르타 커뮤클럽",
      content : "풀스택 5인 협업 프로젝트, 취준생을 위한 모임매칭 및 행사 메일알림 서비스",
      tags : "TypeScript, Nest.js, TypeORM(MySQL), EJS, Linear, Git, ",
      github : "https://github.com/vividnow/spartasix-23.02.27-23.03.31",
      etcLink : "https://veams.tistory.com/101"
    },
    {
      id: 3,
      src: "https://dummyimage.com/723x403",
      alt: "Image",
      width: 723,
      height: 403,
      period: "2023.02.01. ~ 2023.02.08",
      title : "오레오 베이커리",
      content : "빵류 주문 웹쇼핑몰, 기능: 상품 구매, 구매 실시간 알림, 관리자 백오피스",
      tags : "JavaScript, Express.js, Sequelize(MySQL), EJS, Git",
      github : "깃헙링크",
      etcLink : "기타링크"
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 min-h-screen mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                프로젝트 목록
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Node.js 환경에서 진행한 웹개발 협업 및 토이 프로젝트 입니다. 
            </p>
          </div>

          <div className="flex flex-wrap -m-5">
            {worksList.map((card) => (
              <div key={card.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  <Image
                    className="h-41 rounded w-full object-cover object-center mb-6"
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{card.period}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{card.title}</h2>
                  <p className="leading-relaxed text-base">
                    {card.content}
                  </p>
                  <p className="leading-relaxed text-base">
                    {card.tags}
                  </p>
                  <Link className="leading-relaxed text-indigo-800 text-base" href={card.github}>
                    Github 저장소 링크
                  </Link>
                  <p>
                  <Link className="leading-relaxed text-purple-500 text-base" href={card.etcLink}>
                    자세히 보기
                  </Link>
                  </p>
                </div>
              </div>
            ))}    
          </div>
        </div>
      </section>
    </>
  );
}

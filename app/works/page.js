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
      title: "나만의 블로그",
      content: "소셜로그인, 방명록, 다크모드, 포스팅(추후 예정)",
      tags: "JavaScript, Next.js, MongoDB, tailwindCSS, NextAuth.js, Vercel, 채널톡OpenAPI",
      github: "https://github.com/vividnow/my-Blog-with-Next.js",
      etcLink: "/works",
    },
    {
      id: 2,
      src: "https://blog.kakaocdn.net/dn/bGsk7q/btsdGc06DCc/Pxp1PLfq0fpcPqE4N39SPk/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "23.02.27~23.03.31(5주)",
      title: "스파르타 커뮤클럽",
      content: "개발자 취준생을 위한 모임매칭 및 행사 메일알림 서비스",
      tags: "TypeScript, Nest.js, TypeORM(MySQL), EJS, Linear, Git, ",
      github: "https://github.com/miu-null/spartasix",
      etcLink: "https://veams.tistory.com/101",
    },
    {
      id: 3,
      src: "https://blog.kakaocdn.net/dn/cSVRj8/btsh3C10Uym/ukAU336XUNNVulpOaGsXA0/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "2023.02.01. ~ 2023.02.08",
      title: "오레오 베이커리",
      content:
        "빵류 주문 웹쇼핑몰, 기능: 상품 구매, 구매 실시간 알림, 관리자 백오피스",
      tags: "JavaScript, Express.js, Sequelize(MySQL), EJS, Git",
      github: "https://github.com/KimHyungJip/oreo",
      etcLink: "https://veams.tistory.com/63",
    },
  ];

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto min-h-screen px-5 py-8">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                프로젝트 목록
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-500"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Node.js 환경에서 진행한 웹개발 협업 및 토이 프로젝트로, Nest.js,
              Next.js, Express.js 프레임워크를 활용하여 REST API를
              구현하였습니다.
            </p>
          </div>

          <div className="-m-5 flex flex-wrap">
            {worksList.map((card) => (
              <div key={card.id} className="p-4 md:w-1/2 xl:w-1/4">
                <div className="h-full rounded-lg bg-gray-100 p-6">
                  <Image
                    className="h-41 mb-6 w-full rounded object-cover object-center"
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                  />
                  <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                    {card.period}
                  </h3>
                  <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                    {card.title}
                  </h2>
                  <p className="text-base leading-relaxed">{card.content}</p>
                  <p className="text-base leading-relaxed">{card.tags}</p>
                  <p>
                    <Link
                      className="text-base leading-relaxed text-purple-500"
                      href={card.etcLink}
                      target="_blank"
                    >
                      자세히 보기→
                    </Link>
                  </p>
                  <Link
                    className="text-base leading-relaxed text-indigo-800"
                    href={card.github}
                    target="_blank"
                  >
                    GITHUB→
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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
      tags: "JavaScript, Next.js, MongoDB, tailwindCSS, Vercel, 채널톡API",
      github: "https://github.com/vividnow/my-Blog-with-Next.js",
      etcLink: "/works",
    },
    {
      id: 2,
      src: "https://blog.kakaocdn.net/dn/dmahpB/btsitZXJIXP/hkD2oeZa6EwPmWC7SLxepK/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "23.02.27~23.03.31(5주)",
      title: "스파르타 커뮤클럽",
      content: "예비개발자들을 위한 모임매칭 및 행사 메일링",
      tags: "TypeScript, Nest.js, TypeORM(MySQL), EJS",
      github: "https://github.com/miu-null/spartasix",
      etcLink: "https://veams.tistory.com/101",
    },
    {
      id: 3,
      src: "https://blog.kakaocdn.net/dn/c2XkKY/btsitTpTRUy/2YZHIEMkRPFAnsyvhPwVS1/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "2023.02.01. ~ 2023.02.08(7일)",
      title: "오레오 베이커리",
      content:
        "빵류 주문 웹쇼핑몰, 기능: 상품 구매, 구매 실시간 알림, 관리자 백오피스",
      tags: "JavaScript, Express.js, Sequelize(MySQL), EJS",
      github: "https://github.com/KimHyungJip/oreo",
      etcLink: "https://veams.tistory.com/63",
    },
    {
      id: 4,
      src: "https://blog.kakaocdn.net/dn/c2XkKY/btsitTpTRUy/2YZHIEMkRPFAnsyvhPwVS1/img.png",
      alt: "Image",
      width: 723,
      height: 403,
      period: "2023.02.01. ~ 2023.02.08",
      title: "오레오",
      content:
        "빵류 주문 웹쇼핑몰, 기능: 상품 구매, 구매 실시간 알림, 관리자 백오피스",
      tags: "JavaScript, Express.js, Sequelize(MySQL), EJS",
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
              <div className="h-1 w-20 rounded bg-indigo-700"></div>
            </div>
            <span className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              <p>
                Node.js 환경에서 진행한 웹개발 협업 및 토이 프로젝트 목록입니다.
              </p>
              <p>Nest.js, Next.js, Express.js 프레임워크를 활용하였습니다.</p>
            </span>
          </div>

          <div className="m-auto text-gray-600 xl:container">
            <div className="grid md:grid-cols-2 md:gap-6 lg:gap-12">
              {worksList.map((card) => (
                <div key={card.id} className="group mb-10 space-y-6">
                  <div className="mb-2 flex h-full flex-col gap-1 overflow-hidden">
                    <Image
                      className="mb-2 h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                      src={card.src}
                      alt={card.alt}
                      width={card.width}
                      height={card.height}
                    />
                    <span>
                      <span className="mt-4 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                        {card.period}
                      </span>
                      <h3 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
                        {card.title}
                      </h3>
                      <span className="grid gap-2 text-gray-600 dark:text-gray-300">
                        <p>{card.content}</p>
                        <p>{card.tags}</p>
                      </span>
                    </span>

                    <div className="mt-auto  flex flex-row-reverse space-x-4 space-x-reverse">
                      <Link
                        className="text-base leading-relaxed text-indigo-800 hover:text-indigo-900"
                        href={card.etcLink}
                        target="_blank"
                      >
                        <span className="btn-link">자세히↗</span>
                      </Link>
                      <Link
                        className="text-base leading-relaxed text-indigo-800 hover:text-indigo-900"
                        href={card.github}
                        target="_blank"
                      >
                        <span className="btn-link">GITHUB↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="group space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                />
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                  Flipper and JS: why we added JavaScript support to a mobile
                  debugging platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Finding the right open source project for your first
                  contribution can feel daunting. It took me years to find a
                  repository that fit my skills and interests.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="#"
                    className="-ml-1 flex items-center gap-3 rounded-full p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="images/man.jpg"
                      alt=""
                    />
                    <span className="hidden text-base font-semibold text-gray-600 dark:text-gray-200 sm:block">
                      Bernard Ng.
                    </span>
                  </a>
                  <span className="block w-max font-light text-gray-500 sm:mt-0">
                    Aug 27 2022
                  </span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>2 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

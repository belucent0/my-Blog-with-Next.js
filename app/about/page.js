import { connectDB } from "@/util/database";
import Image from "next/image";
import Link from "next/link";

export default async function about() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  result = result.map((value) => {
    value._id = value._id.toString();
    return value;
  });

  const worksList = [
    {
      id: 1,
      src: "https://dummyimage.com/723x403",
      alt: "Image",
      width: 723,
      height: 403,
      period: "작업기간",
      title: "제목",
      content: "내용",
      tags: "next.js",
      github: "깃헙링크",
      etcLink: "기타링크",
    },
    {
      id: 2,
      src: "https://dummyimage.com/723x403",
      alt: "Image",
      width: 723,
      height: 403,
      period: "작업기간",
      title: "제목",
      content: "내용",
      tags: "next.js",
      github: "깃헙링크",
      etcLink: "기타링크",
    },
  ];

  <div className="-m-4 flex flex-wrap">
    <Link
      className="mr-5 hover:text-gray-900"
      href={"https://open.kakao.com/o/sXi5AZkf"}
    >
      연락하기
    </Link>
  </div>;

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto min-h-screen px-5 py-24">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                소개
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-500"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              원대하고, 작고 속에 아름답고 부패를 부패뿐이다.
            </p>
          </div>

          <div className="-m-4 flex flex-wrap">
            {worksList.map((card) => (
              <div key={card.id} className="p-4 md:w-1/2 xl:w-1/4">
                <div className="rounded-lg bg-gray-100 p-6">
                  <Image
                    className="mb-6 h-40 w-full rounded object-cover object-center"
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
                  <p className="text-base leading-relaxed">{card.github}</p>
                  <p className="text-base leading-relaxed">{card.etcLink}</p>
                  <a
            className="mr-5 hover:text-gray-900"
            href={"/about/2"}
          >
            이력서
          </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

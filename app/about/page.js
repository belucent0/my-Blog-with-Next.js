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
      title : "제목",
      content : "내용",
      tags : "next.js",
      github : "깃헙링크",
      etcLink : "기타링크"
    },
    {
      id: 2,
      src: "https://dummyimage.com/723x403",
      alt: "Image",
      width: 723,
      height: 403,
      period: "작업기간",
      title : "제목",
      content : "내용",
      tags : "next.js",
      github : "깃헙링크",
      etcLink : "기타링크"
    },
  ];

  <div className="-m-4 flex flex-wrap">
  <Link
    className="mr-5 hover:text-gray-900"
    href={"https://open.kakao.com/o/sXi5AZkf"}
  >
    연락하기
  </Link>
  <Link
    className="mr-5 hover:text-gray-900"
    href={"https://open.kakao.com/o/sXi5AZkf"}
  >
    이력서
  </Link>
</div>

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container px-5 py-24 min-h-screen mx-auto">
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

          <div className="flex flex-wrap -m-4">
            {worksList.map((card) => (
              <div key={card.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
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
                  <p className="leading-relaxed text-base">
                    {card.github}
                  </p>
                  <p className="leading-relaxed text-base">
                    {card.etcLink}
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

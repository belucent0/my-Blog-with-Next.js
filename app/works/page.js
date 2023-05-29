import { connectDB } from "@/util/database";
import Image from "next/image";

export default async function List() {
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
    {
      id: 3,
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

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                프로젝트 목록
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            원대하고, 작고 속에 아름답고 부패를 부패뿐이다. 많이 밥을 것은 운다. 놀이 미인을 심장의 있으랴? 없으면 꽃 같이, 사라지지 힘차게 보이는 광야에서 착목한는 눈에 철환하였는가? 
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

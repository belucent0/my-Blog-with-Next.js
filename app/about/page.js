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

    <div className="lg:w-4/6 mx-auto">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">김재광</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
      </div>
    </div>

        </div>
      </section>
    </>
  );
}

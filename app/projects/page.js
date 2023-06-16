import { connectDB } from "@/util/database";
import Image from "next/image";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let worksList = await db.collection("projects").find().toArray();
  worksList = worksList.map((value) => {
    value._id = value._id.toString();
    return value;
  });

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
              <p>Nest.js, Next.js, Express.js 프레임워크를 활용한 실전 및 토이 프로젝트 목록입니다.</p>
            </span>
          </div>

          <div className="m-auto text-gray-600 xl:container">
            <div className="grid md:grid-cols-2 md:gap-6 lg:gap-12">
              {worksList.map((card) => (
                <div key={card._id} className="group mb-10 space-y-6">
                  <div className="mb-2 flex h-full flex-col gap-1 overflow-hidden">
                    <img
                      className="mb-2 h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:scale-110"
                      src={card.src}
                      alt={Image}
                      width={723}
                      height={403}
                    />
                    
                    <span>
                      <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                      🗓️{card.period}
                      </span>
                      
                      <h3 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
                        {card.title}
                      </h3>
                      <span className="grid gap-2 text-gray-600 dark:text-gray-300">
                        <p>{card.content}</p>
                        <span className="flex flex-wrap">{card.tags.map((v, i) =>(<div key={i} className="text-xs m-0.5 w-fit whitespace-nowrap rounded px-2 py-1 bg-zinc-400 text-white dark:bg-slate-700 dark:text-slate-300">{card.tags[i]}</div>))}</span>
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
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}

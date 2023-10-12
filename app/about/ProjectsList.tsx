
import Link from "next/link";

type Card = {
  _id: string;
  src: string;
  period: string;
  title: string;
  content: string;
  tags: string[];
  etcLink: string;
  github: string;
};

type ProjectListProps = {
  worksList: Card[];
};

// 프로젝트- 작업이력란
export default async function ProjectList({worksList}: ProjectListProps) {

  return (
    <>
     <div className="m-auto text-gray-600 xl:container">
        <div className="grid md:grid-cols-2 md:gap-6 lg:gap-12">
            {worksList.map((card) => (
                <div key={card._id} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 group mb-10 space-y-6">
                  <div className="mb-2 flex h-full flex-col gap-1 overflow-hidden">
                    <img
                      className="mb-2 h-80 w-full rounded-3xl object-cover object-top "
                      src={card.src}
                      width={723}
                      height={403}
                    />
                    
                    <span>
                      <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                      {card.period}
                      </span>
                      
                      <h3 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
                        {card.title}
                      </h3>
                      <span className="grid gap-2 text-gray-600 dark:text-gray-300">
                        <p>{card.content}</p>
                        <span className="flex flex-wrap">{card.tags.map((v, i) =>(<h1 key={i} className="text-xs m-0.5 w-fit whitespace-nowrap rounded px-2 py-1 bg-zinc-400 text-white dark:bg-slate-700 dark:text-slate-300">{card.tags[i]}</h1>))}</span>
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

    </>
  );
}

import { connectDB } from "../../../utils/database";
import ProjectList from "./ProjectsList";

// 프로젝트- 작업이력란
export default async function Projects(): Promise<JSX.Element> {
    const db = (await connectDB()).db("forum");
    let worksList = await db.collection("projects").find().toArray();
    worksList = worksList.map(value => {
        value._id = value._id.toString();
        return value;
    });

    return (
        <>
            <section className="body-font text-gray-600">
                <div className="container mx-auto min-h-screen px-5 py-8">
                    <div className="mb-20 flex w-full flex-wrap">
                        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">프로젝트 목록</h1>
                            <div className="h-1 w-20 rounded bg-indigo-700"></div>
                        </div>
                        <span className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                            <p>Node.js 환경에서 Nest.js, Next.js, Express.js 프레임워크를 활용한 실전 및 토이 프로젝트 목록입니다.</p>
                        </span>
                    </div>

                    <ProjectList worksList={worksList} />
                </div>
            </section>
        </>
    );
}

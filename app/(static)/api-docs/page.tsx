import { getApiDocs } from "../../../utils/swagger";
import ReactSwagger from "./react-swagger";

//Swagger - api-docs
export default async function IndexPage(): Promise<JSX.Element> {
    try {
        const spec = await getApiDocs();
        return (
            <section className="container mx-auto min-h-screen px-3 py-3 md:px-24">
                <ReactSwagger spec={spec} />
            </section>
        );
    } catch (error) {
        console.error("Error while fetching API docs:", error);
        return <div>API 문서를 가져오는데 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.</div>;
    }
}

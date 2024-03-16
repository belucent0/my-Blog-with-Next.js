import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import getPostMetadata from "../getPostMetadata";
import type { Metadata } from "next";

type Props = {
    params: { id: string; slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

//동적 라우팅을 위한 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostContent(params?.slug);

    return {
        title: post.data.title,
    };
}

// 마크다운 게시글 내용 불러오기
function getPostContent(slug) {
    const folder = "contents/";
    const file = `${folder}${slug}.md`;
    const decodedSlug = decodeURI(file);
    const content = fs.readFileSync(decodedSlug, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map(post => ({
        slug: post.slug,
    }));
};

//블로그 게시글 상세 페이지
export default function postDetailPage(props: Props): JSX.Element {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <>
            <section className="mx-auto flex min-h-screen justify-center px-0.5">
                <div className="w-full px-2 py-2 mx-auto lg:px-32">
                    <div className="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
                        <div className="mb-5 border-b border-gray-200">
                            <div className="flex flex-wrap items-baseline -mt-2">
                                <h5>{post.data.date}</h5>
                            </div>
                        </div>
                        <h1>{post.data.title}</h1>
                        <article className="prose lg:prose-base">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

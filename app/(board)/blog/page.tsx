import Link from "next/link";
import getPostMetadata from "./getPostMetadata";
import { PostMetadata } from "./postTypes";

export const metadata = {
    title: "[블로그]|VIVIDNOW의 블로그",
    description: "마음을 읽는 개발자 김재광입니다",
};

//블로그 목록 정보
export default function postMain(): JSX.Element {
    const postMetadata: PostMetadata[] = getPostMetadata();

    const PostPreview = (props: PostMetadata) => {
        return (
            <div key={props.slug}>
                <div className="my-2 border-b-2 md:my-4">
                    <h1 className="text-xs text-gray-400 md:text-sm">{props.date}</h1>
                    <Link href={`/blog/${props.slug}`}>
                        <h1 className="text-xl md:text-3xl">{props.title}</h1>
                    </Link>
                    <h1 className="text-sm text-gray-500 md:text-base"> {props.subtitle}</h1>
                </div>
            </div>
        );
    };

    const postPreview = postMetadata.map(post => <PostPreview key={post.slug} {...post} />);

    return (
        <>
            <div className="container mx-auto min-h-screen px-3 py-3 md:px-24">
                <div className="mb-10 text-4xl md:text-6xl flex justify-between w-full">
                    <h1 className="font-black ">Blog.</h1>
                    <Link href="/playground" className="font-black text-lg text-purple-700 hover:text-purple-500">
                        👉Playground🎨
                    </Link>
                </div>
                <h1 className="text-sm md:text-xl">{postPreview}</h1>
            </div>
        </>
    );
}

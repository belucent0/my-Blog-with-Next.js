import Link from "next/link"

export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug : string;
  }

const PostPreview = (props : PostMetadata) => {
    return (
      <div key={props.slug}>
        <div className="border-b-2">
          <Link href={`/blog/${props.slug}`}>
            <h1 className="my-4 text-3xl"> {props.title}</h1>
          </Link>
          <h1 className="my-2 text-base text-gray-500"> {props.subtitle}</h1>
        </div>
      </div>
    );
};

export default PostPreview
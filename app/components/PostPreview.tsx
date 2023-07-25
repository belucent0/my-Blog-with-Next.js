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
        <div className="border-b-2 my-2 md:my-4">
        <h1 className="text-xs md:text-sm text-gray-400"> {props.date}</h1>
          <Link href={`/blog/${props.slug}`}>
            <h1 className="text-xl md:text-3xl">{props.title}</h1>
          </Link>
          <h1 className="text-sm md:text-base text-gray-500"> {props.subtitle}</h1>
        </div>
      </div>
    );
};

export default PostPreview
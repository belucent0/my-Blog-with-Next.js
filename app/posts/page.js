import fs from "fs"
import Link from "next/link"

function getPostMetadata() {
    const folder = "contents/";
    const files = fs.readdirSync(folder);
    const markdonwPosts = files.filter((file)=> file.endsWith(".md"))
    const slugs = markdonwPosts.map((file)=> file.replace(".md", ""))
    return slugs
}

export default function postMain() {
    const postMetadata = getPostMetadata()
    const postList = postMetadata.map((slug) => (
        <div>
            <Link href={`/posts/${slug}`}>
              <h1 className="my-2">2023-03-05 {slug}</h1>
            </Link>
        </div>
    ))
    return (
      <>
        <div className="container mx-auto min-h-screen px-5 py-8">
          <div className="text-4xl">
            <h1>공사중! 블로그 포스트 목록입니다.</h1>
          </div>
          <h1 className="text-xl">{postList}</h1>
        </div>
      </>
    );
}
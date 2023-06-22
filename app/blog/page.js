import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

function getPostMetadata() {
  const folder = "contents/";
  const files = fs.readdirSync(folder);
  const markdonwPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdonwPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`contents/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}

export default function postMain() {
  const postMetadata = getPostMetadata();
  const postList = postMetadata.map((data) => (
    <div>
      <div className="border-b-2">
        <Link href={`/blog/${data.slug}`}>
          <h1 className="my-4 text-3xl"> {data.title}</h1>
        </Link>
        <h1 className="my-2 text-base text-gray-500"> {data.subtitle}</h1>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container mx-auto min-h-screen px-5 py-8">
        <div className="mb-10 text-7xl">
          <h1 className="font-black">Blog.</h1>
        </div>
        <h1 className="text-xl">{postList}</h1>
      </div>
    </>
  );
}

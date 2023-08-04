import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}
// app/contents 경로 내 .md 파일 목록 정렬
export default function getPostMetadata(): PostMetadata[] {
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

    //최신순 정렬
    posts.sort((a: PostMetadata, b: PostMetadata) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  
    return posts;
  }
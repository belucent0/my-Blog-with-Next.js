import fs from 'fs';
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';
import getPostMetadata from '../../components/getPostMetadata';

function getPostContent(slug) {
  const folder = "contents/"
  const file = `${folder}${slug}.md`
  const decodedSlug = decodeURI(file)
  const content = fs.readFileSync(decodedSlug, "utf8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default function postDetail(props) {
  const slug = props.params.slug
  const post = getPostContent(slug)
    return (
      <>
        <div className="container mx-auto min-h-screen px-5 py-8">
          <h1 className="text-5xl font-bold mb-16">{post.data.title}</h1>
          <article className="prose lg:prose-base">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </>
    );
}
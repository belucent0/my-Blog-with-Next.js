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
        <section className="mx-auto my-10 flex min-h-screen justify-center px-0.5">
          <div>
            <h1 className="mb-16 text-5xl font-bold">{post.data.title}</h1>
            <article className="prose lg:prose-base">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </section>
      </>
    );
}
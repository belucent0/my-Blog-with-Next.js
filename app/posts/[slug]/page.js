import fs from 'fs';
function getPostContent(slug) {
  const folder = "contents/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  return content
}

export default function postDetail(props) {
  const slug = props.params.slug
  const content = getPostContent(slug)
    return (
      <>
        <div className="container mx-auto min-h-screen px-5 py-8">
          <h1 className="text-4xl">상세페이지 : {slug}</h1>
          <div className='text-xl'>내용 : {content} </div> 
        </div>
      </>
    );
}
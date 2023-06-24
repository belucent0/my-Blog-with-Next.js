import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export default function postMain() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ));

  return (
    <>
      <div className="container mx-auto min-h-screen px-3 py-3 md:px-24">
        <div className="mb-10 text-4xl md:text-6xl">
          <h1 className="font-black">Blog.</h1>
        </div>
        <h1 className="text-sm md:text-xl">{postPreview}</h1>
      </div>
    </>
  );
}

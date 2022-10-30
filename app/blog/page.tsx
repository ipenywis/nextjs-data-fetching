import { Post } from "../../components/post";

async function getBlogPosts() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "force-cache" }
  );

  console.log("Refetching posts");

  return postsResponse.json();
}

export default async function Page() {
  const posts = await getBlogPosts();

  console.log("Rerendering Blog Component");

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="flex flex-wrap h-full max-w-xl">
        {posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

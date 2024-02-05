import { getPosts } from "./lib/posts";

export const metadata = {
  title: "Skilled Up",
  description: "Skilled Up is a website for finding best employees",
};

export default async function Page() {
  const posts = await getPosts(); // TODO: This is a dummy endpoint. Replace with your own. It is just for demonstration purposes.

  return (
    <div className="container">
      <div className="my-12">
        {posts?.length > 0 ? (
          <>
            {posts.map(post => (
              <div
                key={post.id}
                className="my-4 p-4 border border-gray-300 rounded-md"
              >
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </>
        ) : (
          <>No posts found</>
        )}
      </div>
    </div>
  );
}

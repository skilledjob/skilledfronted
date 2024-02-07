import FormElements from "./components/ui/form-elements";
import { getPosts } from "./lib/posts";

export const metadata = {
  title: "Skilled Up",
  description: "Skilled Up is a website for finding best employees",
};

export default async function Page() {
  const posts = await getPosts(); // TODO: This is a dummy endpoint. Replace with your own. It is just for demonstration purposes.

  return (
    <div className="container">
      {/* THIS is the example to use form element. TODO: The form block will be deleted. */}
      <section className="flex items-center justify-center">
        <div className="my-10 w-1/3 shadow-md p-8 py-12 rounded-lg space-y-7">
          <div>
            <FormElements.Label withAsterisk>Email address</FormElements.Label>
            <FormElements.Input
              type="text"
              name="email"
              placeholder="Enter your first name"
              width="full"
            />
            <FormElements.Error>Please enter your email</FormElements.Error>
          </div>
          <div>
            <FormElements.Label withAsterisk>Password</FormElements.Label>
            <FormElements.Input
              type="password"
              name="password"
              width="full"
              placeholder="password"
            />
            <FormElements.Error>Please enter your password</FormElements.Error>
          </div>
        </div>
      </section>

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

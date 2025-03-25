import prisma from "@/lib/prisma";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        <li>My first post</li>
        {posts.map((post) => (
          <li key={post.id} style={{marginTop: '20px'}}>
            <div className="font-semibold">Title: {post.title}</div>
            <div className="text-sm text-gray-600 ml-2">
              Content:  {post.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
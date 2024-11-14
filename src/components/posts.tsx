import { getPosts } from '@/lib/posts';

export async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>{post}</div>
      ))}
    </div>
  );
}

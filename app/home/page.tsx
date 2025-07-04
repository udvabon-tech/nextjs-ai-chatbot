import { getPostsByPage } from '@/lib/db/queries';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPostsByPage({ page: 'home' });
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Home Posts</h1>
      {posts.map((post) => (
        <article key={post.id} className="space-y-2">
          <h2 className="text-xl font-semibold">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 200)}</p>
        </article>
      ))}
    </div>
  );
}

import { getPostBySlug } from '@/lib/db/queries';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug({ slug: params.slug });
  if (!post) {
    notFound();
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div className="whitespace-pre-wrap">{post.content}</div>
    </div>
  );
}

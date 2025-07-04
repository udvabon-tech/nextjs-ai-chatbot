import { createPost, getPostBySlug, getPostsByPage } from '@/lib/db/queries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const slug = searchParams.get('slug');

  try {
    if (slug) {
      const post = await getPostBySlug({ slug });
      if (!post) {
        return new Response('Not found', { status: 404 });
      }
      return Response.json(post, { status: 200 });
    }

    if (!page) {
      return new Response('Missing page', { status: 400 });
    }

    const posts = await getPostsByPage({ page });
    return Response.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Server error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, slug, content, page } = await request.json();
    if (!title || !slug || !content || !page) {
      return new Response('Missing fields', { status: 400 });
    }

    const post = await createPost({ title, slug, content, page });
    return Response.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Server error', { status: 500 });
  }
}

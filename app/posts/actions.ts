'use server';
import { createPost } from '@/lib/db/queries';

export async function addPost(_: any, formData: FormData) {
  const title = String(formData.get('title'));
  const slug = String(formData.get('slug'));
  const content = String(formData.get('content'));
  const page = String(formData.get('page'));

  if (!title || !slug || !content || !page) {
    return { success: false };
  }

  await createPost({ title, slug, content, page });
  return { success: true };
}

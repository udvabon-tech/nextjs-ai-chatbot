'use client';
import { useActionState } from 'react';
import { addPost } from '../actions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SubmitButton } from '@/components/submit-button';

export default function Page() {
  const [state, action] = useActionState(addPost, { success: false });

  return (
    <form action={action} className="max-w-xl mx-auto p-4 space-y-4">
      <Input name="title" placeholder="Title" required />
      <Input name="slug" placeholder="Slug" required />
      <Input name="page" placeholder="Page (home or writing)" required />
      <Textarea name="content" placeholder="Content" required />
      <SubmitButton isSuccessful={state.success}>Create Post</SubmitButton>
    </form>
  );
}

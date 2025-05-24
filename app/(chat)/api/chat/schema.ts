import { z } from 'zod';

const textPartSchema = z.object({
  text: z.string().min(1).max(2000),
  type: z.enum(['text']),
});

export const postRequestBodySchema = z.object({
  id: z.string().uuid(),
  message: z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date(),
    role: z.enum(['user']),
    content: z.string().min(1).max(2000),
    parts: z.array(textPartSchema),
    experimental_attachments: z
      .array(
        z.object({
          url: z.string().url(),
          name: z.string().min(1).max(2000),
          contentType: z.enum([
            'image/png',
            'image/jpg',
            'image/jpeg',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ]),
        }),
      )
      .optional(),
  }),
  selectedChatModel: z.enum([
    // Legacy models
    'chat-model', 
    'chat-model-reasoning',
    // OpenAI models
    'gpt-4o',
    'o3',
    'o4-mini',
    'o4-mini-high',
    // Google models
    'gemini-2.5-flash-preview-04-17',
    'gemini-2.5-pro-preview-05-06',
    'gemini-2.0-flash'
  ]),
  selectedVisibilityType: z.enum(['public', 'private']),
});

export type PostRequestBody = z.infer<typeof postRequestBodySchema>;

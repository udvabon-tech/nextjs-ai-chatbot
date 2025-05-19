import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: [
      // Default model
      'gpt-4o',
      // Legacy models
      'chat-model', 
      'chat-model-reasoning',
      // OpenAI models
      'o3',
      'o4-mini',
      'o4-mini-high',
      // Google models
      'gemini-2.5-flash-preview-04-17',
      'gemini-2.5-pro-preview-05-06',
      'gemini-2.0-flash'
    ],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 100,
    availableChatModelIds: [
      // Default model
      'gpt-4o',
      // Legacy models
      'chat-model', 
      'chat-model-reasoning',
      // OpenAI models
      'o3',
      'o4-mini',
      'o4-mini-high',
      // Google models
      'gemini-2.5-flash-preview-04-17',
      'gemini-2.5-pro-preview-05-06',
      'gemini-2.0-flash'
    ],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};

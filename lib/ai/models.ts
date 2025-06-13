export const DEFAULT_CHAT_MODEL: string = 'gpt-4o';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider?: 'openai' | 'google' | 'xai';
}

export const chatModels: Array<ChatModel> = [
  // OpenAI Models
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'OpenAI\'s most capable multimodal model',
    provider: 'openai',
  },
  {
    id: 'o3',
    name: 'o3',
    description: 'reasoning model',
    provider: 'openai',
  },
  {
    id: 'o4-mini',
    name: 'o4-mini-high',
    description: 'Smaller, faster version of GPT-o4',
    provider: 'openai',
  },
  {
    id: 'o4-mini-high',
    name: 'o4-mini-high',
    description: 'Enhanced version of GPT-4o Mini',
    provider: 'openai',
  },
  
  // Google Models
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 1.0 Pro',
    description: 'Google\'s efficient multimodal model',
    provider: 'google',
  },
];

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        // Test models
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
        
        // OpenAI models (mock for testing)
        'gpt-4o': chatModel,
        'o3': chatModel,
        'o4-mini': chatModel,
        'o4-mini-high': chatModel,
        
        // Google models (mock for testing)
        'gemini-2.5-flash-preview-04-17': chatModel,
        'gemini-2.5-pro-preview-05-06': chatModel,
        'gemini-2.0-flash': chatModel,
      },
    })
  : customProvider({
      languageModels: {
        // Legacy XAI models
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
        
        // OpenAI models
        'gpt-4o': openai('gpt-4o'),
        'o3': openai('gpt-3.5-turbo'),
        'o4-mini': openai('gpt-4o-mini'),
        'o4-mini-high': openai('gpt-4o-mini-high'),
        
        // Google models
        'gemini-2.5-flash-preview-04-17': google('gemini-1.5-flash'),
        'gemini-2.5-pro-preview-05-06': google('gemini-1.5-pro'),
        'gemini-2.0-flash': google('gemini-1.0-pro'),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
      },
    });

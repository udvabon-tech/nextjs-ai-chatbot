import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
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
        'title-model': titleModel,
        'artifact-model': artifactModel,
        
        // OpenAI models (mock for testing)
        'gpt-4o': chatModel,
        'o3': chatModel,
        'o4-mini': chatModel,
        'o4-mini-high': chatModel,
        
        // Google models (mock for testing)
        'gemini-2.0-flash': chatModel,
      },
    })
  : customProvider({
      languageModels: {
        // Title and artifact models (for tests)
        'title-model': openai('gpt-3.5-turbo'),
        'artifact-model': openai('gpt-3.5-turbo'),
        
        // OpenAI models
        'gpt-4o': openai('gpt-4o'),
        'o3': openai('gpt-3.5-turbo'),
        'o4-mini': openai('gpt-4o-mini'),
        'o4-mini-high': openai('gpt-4o-mini-high'),
        
        // Google models
        'gemini-2.0-flash': google('gemini-1.0-pro'),
      },
      imageModels: {
        'small-model': openai('dall-e-3'),
      },
    });

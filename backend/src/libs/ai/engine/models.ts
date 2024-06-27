import { OpenAI } from 'llamaindex';

export const initOpenAIModel = (config?: OpenAI) => new OpenAI(config);

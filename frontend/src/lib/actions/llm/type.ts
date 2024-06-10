export const ALL_MODELS = ["gpt-4-turbo", "gpt-3.5-turbo"] as const;

export type ModelType = (typeof ALL_MODELS)[number];

export interface LLMConfig {
  model: ModelType;
  temperature?: number;
  topP?: number;
  sendMemory?: boolean;
  maxTokens?: number;
}

"use server";

import { ALL_AVAILABLE_OPENAI_MODELS } from "llamaindex";

export const getAvailableModels = async () => {
  return {
    openAI: ALL_AVAILABLE_OPENAI_MODELS,
  };
};

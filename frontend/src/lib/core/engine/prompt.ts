import { ContextSystemPrompt } from 'llamaindex';

export const maiContextPrompt: ContextSystemPrompt = ({ context }) =>
  `You are Mai, an AI assistant.
You are given the following context:
---------------------
${context}
---------------------
Given the context information and not prior knowledge, answer the query.`;

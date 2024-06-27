import {
  Anthropic,
  GEMINI_EMBEDDING_MODEL,
  GEMINI_MODEL,
  Gemini,
  GeminiEmbedding,
  OpenAI,
  OpenAIEmbedding,
  Settings,
} from 'llamaindex';

const CHUNK_SIZE = 512;
const CHUNK_OVERLAP = 20;

export const initSettings = async () => {
  // HINT: you can delete the initialization code for unused model providers
  console.log(`Using '${process.env.MODEL_PROVIDER}' model provider`);

  if (!process.env.MODEL || !process.env.EMBEDDING_MODEL) {
    throw new Error("'MODEL' and 'EMBEDDING_MODEL' env variables must be set.");
  }

  switch (process.env.MODEL_PROVIDER) {
    case 'ollama':
      initOllama();
      break;
    case 'anthropic':
      initAnthropic();
      break;
    case 'gemini':
      initGemini();
      break;
    default:
      initOpenAI();
      break;
  }
  Settings.chunkSize = CHUNK_SIZE;
  Settings.chunkOverlap = CHUNK_OVERLAP;
};

function initOpenAI() {
  Settings.llm = new OpenAI({
    model: process.env.MODEL ?? 'gpt-3.5-turbo',
    maxTokens: 512,
  });
  Settings.embedModel = new OpenAIEmbedding({
    model: process.env.EMBEDDING_MODEL,
    dimensions: process.env.EMBEDDING_DIM
      ? parseInt(process.env.EMBEDDING_DIM)
      : undefined,
  });
}

function initOllama() {
  throw new Error('Ollama models have not implemented yet');
}

function initAnthropic() {
  throw new Error('Anthropic models have not implemented yet');
}

function initGemini() {
  Settings.llm = new Gemini({
    model: process.env.MODEL as GEMINI_MODEL,
  });
  Settings.embedModel = new GeminiEmbedding({
    model: process.env.EMBEDDING_MODEL as GEMINI_EMBEDDING_MODEL,
  });
}

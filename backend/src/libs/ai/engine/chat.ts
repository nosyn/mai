import { ContextChatEngine, LLM, OpenAI, Settings } from 'llamaindex';
import { getDataSource } from './index';

type ChatEngineSettings = {
  chatModel: LLM;
};

export async function createChatEngine() {
  const index = await getDataSource();
  if (!index) {
    throw new Error(
      `StorageContext is empty - call 'npm run generate' to generate the storage first`
    );
  }
  const retriever = index.asRetriever({
    similarityTopK: process.env.TOP_K ? parseInt(process.env.TOP_K) : 3,
  });

  return new ContextChatEngine({
    chatModel: new OpenAI({
      model: 'gpt-3.5-turbo',
      maxTokens: 1024,
    }),
    retriever,
  });
}

import { ContextChatEngine, Settings } from 'llamaindex';
import { getDataSource } from './index';
import { maiContextPrompt } from './prompt';

export async function createChatEngine() {
  const index = await getDataSource();
  if (!index) {
    throw new Error(`StorageContext is empty - call 'npm run generate' to generate the storage first`);
  }

  return new ContextChatEngine({
    chatModel: Settings.llm,
    retriever: index.asRetriever({
      similarityTopK: process.env.TOP_K ? parseInt(process.env.TOP_K) : 3,
    }),
    contextSystemPrompt: maiContextPrompt,
  });
}

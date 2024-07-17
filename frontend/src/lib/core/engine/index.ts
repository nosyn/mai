import { BaseEmbedding, ContextChatEngine, QdrantVectorStore, SimpleDocumentStore, VectorStoreIndex } from 'llamaindex';

export async function getDataSource() {
  const vectorStore = new QdrantVectorStore({
    url: 'http://localhost:6333',
    collectionName: 'llama-docs',
  });

  const index = await VectorStoreIndex.fromVectorStore(vectorStore);

  return index;
}

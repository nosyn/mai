import { client } from "./qdrant";

export type CreateDataSource = {
  name: string;
};

export async function createDataSource({
  name,
}: CreateDataSource): Promise<CreateDataSource> {
  try {
    await client.createCollection(`new_${name}_${Date.now()}`, {
      vectors: {
        size: 4,
        distance: "Cosine",
      },
    });

    return {
      name: "hello",
    };
  } catch (error) {
    throw error;
  }
}

export const getDataSources = async () => {
  const { collections } = await client.getCollections();

  return {
    dataSources: collections,
  };
};

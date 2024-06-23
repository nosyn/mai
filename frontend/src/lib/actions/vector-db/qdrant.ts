"use server";
import { client } from "@/lib/vector-db/qdrant";

export const getCollections = () => {
  return client.getCollections();
};

export const createCollection = async (collectionName: string) => {
  return client.createCollection(collectionName, {
    vectors: {
      size: 4,
      distance: "Cosine",
    },
  });
};

import { QdrantClient } from "@qdrant/js-client-rest";

export const client = new QdrantClient({ url: "http://localhost:6333" });

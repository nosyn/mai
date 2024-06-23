"use server";
import { client } from "@/lib/vector-db/qdrant";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type CreateDataSource = {
  name: string;
};
export async function createDataSource(formData: FormData) {
  const submittedName = formData.get("name") as string;

  try {
    await client.createCollection(submittedName, {
      vectors: {
        size: 4,
        distance: "Cosine",
      },
    });
    console.log("Created collection name: " + submittedName);

    revalidatePath("/data-sources");
    redirect("/data-sources");
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

import { getDataSources } from "@/libs/data-sources";
import Elysia, { error } from "elysia";

export const dataSourcesController = new Elysia()
  .get(
    "/api/data-sources",
    async () => {
      const dataSources = await getDataSources();
      return dataSources;
    },
    {
      error: (e) => {
        console.log("Error while fetching data sources: ", e);
      },
    }
  )
  .post("/api/data-sources", async () => {});

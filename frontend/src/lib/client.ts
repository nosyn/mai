import wretch from "wretch";

// Instantiate and configure wretch
const api = wretch("http://localhost:8000/api")
  .errorType("json")
  .resolve((r) => r.json());

/**
 *  Data Sources
 */
const getDataSources = () =>
  api.get("/data-sources").catch(() => {
    throw new Error("Couldn't get data sources");
  }) as Promise<DataSources>;

const createDataSource = () =>
  api.post("/data-sources").catch(() => {
    throw new Error("Couldn't get data sources");
  }) as Promise<DataSources>;

export default {
  getDataSources,
  createDataSource,
};

import { checkEnvConfigs } from "./utils";

export const POSTGRESQL_CONFIGS = {
  USERNAME: process.env.POSTGRESQL_USERNAME ?? "",
  PASSWORD: process.env.POSTGRESQL_PASSWORD ?? "",
  HOST: process.env.POSTGRESQL_HOST ?? "",
  PORT: process.env.POSTGRESQL_PORT ?? "",
  DATABASE: process.env.POSTGRESQL_DATABASE ?? "",
};

checkEnvConfigs([POSTGRESQL_CONFIGS]);

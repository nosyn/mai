import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { POSTGRESQL_CONFIGS } from "@/configs";

export const db = drizzle(
  postgres({
    username: POSTGRESQL_CONFIGS.USERNAME,
    password: POSTGRESQL_CONFIGS.PASSWORD,
    host: POSTGRESQL_CONFIGS.HOST,
    port: Number(POSTGRESQL_CONFIGS.PORT),
    database: POSTGRESQL_CONFIGS.DATABASE,
  }),
  {
    schema,
  },
);

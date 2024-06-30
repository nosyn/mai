import 'dotenv/config';
import { POSTGRESQL_CONFIGS } from '@/lib/configs';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/lib/database/schema/*.ts',
  out: './drizzle',
  dbCredentials: {
    user: POSTGRESQL_CONFIGS.USERNAME,
    password: POSTGRESQL_CONFIGS.PASSWORD,
    host: POSTGRESQL_CONFIGS.HOST,
    port: Number(POSTGRESQL_CONFIGS.PORT),
    database: POSTGRESQL_CONFIGS.DATABASE,
    ssl: false,
  },
});

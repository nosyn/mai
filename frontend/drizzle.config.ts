import 'dotenv/config';
import { SQLITE_CONFIGS } from '@/lib/configs';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/lib/database/schema/*.ts',
  out: './drizzle',
  dbCredentials: {
    url: `file:${SQLITE_CONFIGS.URL}`,
  },
  verbose: true,
});

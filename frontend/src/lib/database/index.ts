import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from './schema';
import { SQLITE_CONFIGS } from '@/lib/configs';
import { Database } from 'bun:sqlite';

const sqlite = new Database(SQLITE_CONFIGS.URL);
export const db = drizzle(sqlite, {
  schema,
});

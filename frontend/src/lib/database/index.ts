import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { SQLITE_CONFIGS } from '@/lib/configs';
import Database from 'better-sqlite3';

const sqlite = new Database(SQLITE_CONFIGS.URL);
export const db = drizzle(sqlite, {
  schema,
});

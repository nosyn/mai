import { checkEnvConfigs } from './utils';

// SQLite
export const SQLITE_CONFIGS = {
  URL: process.env.URL ?? './db/mai.db',
};

checkEnvConfigs([SQLITE_CONFIGS]);

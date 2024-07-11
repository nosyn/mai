import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { InferSelectModel, InferInsertModel, sql } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const DataSourcesTable = sqliteTable('data_sources', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(CURRENT_DATE)`),
  updatedAt: text('updated_at').$onUpdate(() => sql`(CURRENT_DATE)`),
});

export type DataSource = InferSelectModel<typeof DataSourcesTable>;
export type NewDataSource = InferInsertModel<typeof DataSourcesTable>;

// Schema for inserting a user - can be used to validate API requests
export const insertDataSourceSchema = createInsertSchema(DataSourcesTable).pick({
  name: true,
  description: true,
});

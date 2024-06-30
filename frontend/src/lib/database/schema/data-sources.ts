import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { Description } from '@radix-ui/react-dialog';

export const DataSourcesTable = pgTable('data_sources', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type DataSource = InferSelectModel<typeof DataSourcesTable>;
export type NewDataSource = InferInsertModel<typeof DataSourcesTable>;

// Schema for inserting a user - can be used to validate API requests
export const insertDataSourceSchema = createInsertSchema(DataSourcesTable).pick({
  name: true,
  description: true,
});

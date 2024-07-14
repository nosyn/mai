import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { InferSelectModel, InferInsertModel, sql } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const BotsTable = sqliteTable('bots', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: text('created_at')
    .default(sql`(CURRENT_DATE)`)
    .notNull(),
  updatedAt: text('updated_at')
    .notNull()
    .$onUpdate(() => sql`(CURRENT_DATE)`),
});

export type Bot = InferSelectModel<typeof BotsTable>;
export type NewBot = InferInsertModel<typeof BotsTable>;

export const insertBotSchema = createInsertSchema(BotsTable).pick({
  name: true,
  description: true,
});

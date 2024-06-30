import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const BotsTable = pgTable('bots', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type Bot = InferSelectModel<typeof BotsTable>;
export type NewBot = InferInsertModel<typeof BotsTable>;

export const insertBotSchema = createInsertSchema(BotsTable).pick({
  name: true,
  description: true,
});

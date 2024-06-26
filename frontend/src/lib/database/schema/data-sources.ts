import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const DataSourcesTable = pgTable("data_sources", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type DataSource = InferSelectModel<typeof DataSourcesTable>;
export type NewDataSource = InferInsertModel<typeof DataSourcesTable>;

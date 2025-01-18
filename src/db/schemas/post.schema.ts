import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { randomUUID } from 'node:crypto';
import { user } from './auth.schema';

export const postTable = pgTable('post', {
  id: uuid('id').primaryKey().$defaultFn(randomUUID),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertPost = typeof postTable.$inferInsert;
export type SelectPost = typeof postTable.$inferSelect;

import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const interestedUsers = pgTable("interested_users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message"),
});

export const insertInterestedUserSchema = createInsertSchema(interestedUsers).pick({
  name: true,
  email: true,
  message: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().optional()
});

export type InsertInterestedUser = z.infer<typeof insertInterestedUserSchema>;
export type InterestedUser = typeof interestedUsers.$inferSelect;

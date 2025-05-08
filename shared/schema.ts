import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact schema for the contact form
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre es demasiado corto" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Ingrese el nombre de su empresa" }),
  message: z.string().min(10, { message: "El mensaje es demasiado corto" }),
});

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof contactSchema>;

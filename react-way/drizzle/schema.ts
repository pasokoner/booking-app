import {
  pgTable,
  pgEnum,
  bigint,
  timestamp,
  text,
  smallint,
  real,
  foreignKey,
  boolean,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";
export const keyStatus = pgEnum("key_status", ["expired", "invalid", "valid", "default"]);
export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", ["plain", "s256"]);

export const cabins = pgTable("cabins", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  name: text("name"),
  maxCapacity: smallint("maxCapacity"),
  regularPrice: smallint("regularPrice"),
  discount: smallint("discount"),
  description: text("description"),
  image: text("image"),
});

export const guests = pgTable("guests", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  fullName: text("fullName"),
  email: text("email"),
  nationality: text("nationality"),
  countryFlag: text("countryFlag"),
  nationalId: text("nationalID"),
});

export const settings = pgTable("settings", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  minBookingLength: smallint("minBookingLength"),
  maxBookingLength: smallint("maxBookingLength"),
  breakfastPrice: real("breakfastPrice"),
  maxGuestsPerBooking: smallint("maxGuestsPerBooking"),
});

export const bookings = pgTable("bookings", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  startDate: timestamp("startDate", { mode: "string" }),
  endDate: timestamp("endDate", { mode: "string" }),
  numNights: smallint("numNights"),
  numGuests: smallint("numGuests"),
  cabinPrice: real("cabinPrice"),
  extrasPrice: real("extrasPrice"),
  totalPrice: real("totalPrice"),
  status: text("status"),
  hasBreakfast: boolean("hasBreakfast"),
  isPaid: boolean("isPaid"),
  observations: text("observations"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  cabinId: bigint("cabinId", { mode: "number" }).references(() => cabins.id),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  guesId: bigint("guesId", { mode: "number" }).references(() => guests.id),
});

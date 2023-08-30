import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { cabins } from "@/lib/server/schema";

const connectionString = process.env.DATABASE_URL as string;
const client = postgres(connectionString);
export const db = drizzle(client);

export const getCabins = async function () {
  return await db.select().from(cabins);
};

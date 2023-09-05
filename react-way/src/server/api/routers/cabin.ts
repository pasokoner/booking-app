import { db } from "@/db";
import { cabins } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const cabinRouter = createTRPCRouter({
  getCabins: publicProcedure.query(async () => {
    return await db.select().from(cabins);
  }),
});

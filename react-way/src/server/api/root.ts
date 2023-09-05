import { cabinRouter } from "./routers/cabin";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  cabin: cabinRouter,
});

export type AppRouter = typeof appRouter;

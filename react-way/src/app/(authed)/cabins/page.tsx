"use client";

import { trpc } from "@/app/_trpc/client";

const Cabins = () => {
  const { data, isLoading } = trpc.cabin.getCabins.useQuery();

  return <div>Cabins</div>;
};

export default Cabins;

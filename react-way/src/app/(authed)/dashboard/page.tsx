import { getCabins } from "@/lib/server/db";

async function Dashboard() {
  const cabins = await getCabins();

  console.log(cabins);

  return <div>cabins</div>;
}

export default Dashboard;

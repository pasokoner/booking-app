"use client";

import MainNav from "@/components/main-nav";

const Sidebar = () => {
  return (
    <aside className="row-span-full border-r-2 p-2 px-4">
      <h1 className="text-center text-4xl font-bold py-4 mb-2">Booking App</h1>

      <MainNav />
    </aside>
  );
};
export default Sidebar;

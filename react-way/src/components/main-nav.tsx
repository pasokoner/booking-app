"use client";

import NavLink from "./nav-link";

import { Home, Book, LucideIcon, Hotel, User2, Settings } from "lucide-react";

const paths: {
  name: string;
  desiredPath: string;
  Icon: LucideIcon;
}[] = [
  {
    name: "Home",
    desiredPath: "/dashboard",
    Icon: Home,
  },
  {
    name: "Bookings",
    desiredPath: "/bookings",
    Icon: Book,
  },
  {
    name: "Cabins",
    desiredPath: "/cabins",
    Icon: Hotel,
  },
  {
    name: "Users",
    desiredPath: "/users",
    Icon: User2,
  },
  {
    name: "Settings",
    desiredPath: "/settings",
    Icon: Settings,
  },
];

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {paths.map((p) => (
          <li key={p.desiredPath}>
            <NavLink {...p} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNav;

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavLinkProps {
  desiredPath: string;
  name: string;
  Icon: LucideIcon;
}

const NavLink: React.FC<NavLinkProps> = ({ desiredPath, name, Icon }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(desiredPath);

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full text-lg justify-start font-medium text-gray-600",
        isActive && "bg-accent text-accent-foreground"
      )}
      size="lg"
      asChild
    >
      <Link href={desiredPath}>
        <Icon className="mr-3 h-6 w-6 text-gray-500" /> {name}
      </Link>
    </Button>
  );
};
export default NavLink;

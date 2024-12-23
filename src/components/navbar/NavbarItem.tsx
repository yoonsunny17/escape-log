import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

interface NavbarItemProps {
  label: string;
  path: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, path }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`
          text-white
          cursor-pointer
          hover:text-sub2
          transition
          ${pathname === path ? "text-sub3" : ""}
        `}
      // className="text-white cursor-pointer hover:text-sub2 transition"
    >
      {label}
    </Link>
  );
};

export default NavbarItem;

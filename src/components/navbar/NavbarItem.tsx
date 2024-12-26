import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  label: string;
  path: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, path }) => {
  return (
    <Link
      href={path}
      className={`
          text-white
          cursor-pointer
          hover:text-sub2
          transition
          active:text-sub3
        `}
      // className="text-white cursor-pointer hover:text-sub2 transition"
    >
      {label}
    </Link>
  );
};

export default NavbarItem;

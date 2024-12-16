import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-sub2 transition">
      {label}
    </div>
  );
};

export default NavbarItem;

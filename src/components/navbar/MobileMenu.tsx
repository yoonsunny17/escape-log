import React from "react";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-main">
      <div className="flex flex-col gap-4">
        <div className="text-white hover:text-sub2 transition px-4 text-sm">
          Home
        </div>
        <div className="text-white hover:text-sub2 transition px-4 text-sm">
          My Escapes
        </div>
        <div className="text-white hover:text-sub2 transition px-4 text-sm">
          Wishlist
        </div>
        <div className="text-white hover:text-sub2 transition px-4 text-sm">
          Community
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

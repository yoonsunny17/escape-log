import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const pathname = usePathname();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-main">
      <div className="flex flex-col gap-4">
        <Link
          href={"/"}
          className={`
              text-white hover:text-sub2 transition px-4 text-sm
              ${pathname === "/" ? "text-sub3" : ""}
            `}
        >
          Home
        </Link>
        <Link
          href={"/my-escapes"}
          className={`
            text-white hover:text-sub2 transition px-4 text-sm
            ${pathname === "/my-escapes" ? "text-sub3" : ""}
          `}
        >
          My Escapes
        </Link>
        <Link
          href={"/wishlist"}
          className={`
            text-white hover:text-sub2 transition px-4 text-sm
            ${pathname === "/wishlist" ? "text-sub3" : ""}
          `}
        >
          Wishlist
        </Link>
        <Link
          href={"/community"}
          className={`
            text-white hover:text-sub2 transition px-4 text-sm
            ${pathname === "/community" ? "text-sub3" : ""}
          `}
        >
          Community
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

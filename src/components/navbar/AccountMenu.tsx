import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-12 right-0 py-5 flex flex-col border-2 border-main">
      <div className="flex flex-col gap-6">
        <Link
          href={`/users/${currentUser?.id}`}
          className="text-white text-sm hover:text-sub2 transition px-4"
        >
          {currentUser?.name}'s Profile
        </Link>
        <div
          onClick={() => signOut()}
          className="text-white text-sm hover:text-sub2 transition px-4"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

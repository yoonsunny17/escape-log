import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-12 right-0 py-5 flex flex-col border-2 border-main">
      <div className="flex flex-col gap-6">
        {/* // FIXME: username 데이터 넣기 */}
        <div className="text-white text-sm hover:text-sub2 transition px-4">
          username's Profile
        </div>
        <div className="text-white text-sm hover:text-sub2 transition px-4">
          Logout
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

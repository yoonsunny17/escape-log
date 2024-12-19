import useUsers from "@/hooks/useUsers";
import React from "react";
import Avatar from "./Avatar";

const Friends = () => {
  const { data: users = [] } = useUsers();

  const topThreeUsers = users.slice(0, 3);
  return (
    <div className="flex flex-col justify-between px-16 py-12 border-2 border-main rounded-xl lg:w-1/3 w-full gap-6">
      {/* header */}
      <div className="flex flex-row justify-between">
        <header className="text-main font-bold text-xl">고급 탈출 인력</header>
        {users.length > 3 && (
          <button className="text-gray-300 hover:text-gray-500 transition">
            더보기
          </button>
        )}
      </div>

      {/* friends */}
      {users.length === 0 && (
        <div className="text-white">동료를 만들어 보세요</div>
      )}
      <div className="flex flex-row justify-between">
        {topThreeUsers.map((user: Record<string, any>) => (
          <div key={user.id} className="flex flex-col items-center gap-3">
            <Avatar userId={user.id} hasBorder isLarge />
            <div className="flex flex-col">
              <p className="text-gray-300 text-sm">방세포</p>
              <p className="text-white">{user?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;

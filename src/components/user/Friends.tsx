"use client";

import useUsers from "@/hooks/useUsers";
import React from "react";
import Avatar from "./Avatar";
import { PiAlienBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

const Friends = () => {
  const router = useRouter();

  const { data: users = [] } = useUsers();

  // TODO: 탈출 횟수 내림차순 정렬 필요
  const topThreeUsers = users.slice(0, 3);
  return (
    <div className="flex flex-col justify-between px-16 py-12 border-2 border-main rounded-xl lg:w-1/3 w-full gap-6">
      {/* header */}
      <div className="flex flex-row justify-between">
        <header className="text-main font-bold text-xl">탈출 동료들</header>
        {users.length > 3 && (
          <button
            onClick={() => router.push("/community")}
            className="text-gray-300 hover:text-gray-500 transition"
          >
            더보기
          </button>
        )}
      </div>

      {/* friends */}
      {users.length === 0 && (
        <div className="text-white">동료를 만들어 보세요</div>
      )}
      <div className="flex flex-col justify-between gap-3">
        {topThreeUsers.map((user: Record<string, any>, idx: number) => (
          <div key={user.id} className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <PiAlienBold
                size={30}
                className={
                  idx === 0
                    ? "text-gold"
                    : idx === 1
                    ? "text-silver"
                    : "text-bronze"
                }
              />
              <div className="text-white">{user.name}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {/* // FIXME: user model에 탈출 이력 추가 필요 */}
              <div className="text-white">+ 123번</div>
              <button
                onClick={() => router.push(`/users/${user.id}`)}
                className="text-sm text-zinc-600 transition hover:text-zinc-500"
              >
                프로필보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;

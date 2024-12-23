"use client";

import EscapeFeed from "@/components/escapes/EscapeFeed";
import Header from "@/components/Header";
import Profile from "@/components/user/Profile";
import useUser from "@/hooks/useUser";
import { useParams } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const { userId } = useParams();

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    <div>loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-4 gap-8">
      {/* 유저 프로필 */}
      <Profile />
      {/* 방탈출 리스트 */}
      <EscapeFeed userId={userId as string} />
    </div>
  );
};

export default UserProfile;

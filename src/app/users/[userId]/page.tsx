"use client";

import EscapeFeed from "@/components/escapes/EscapeFeed";
import Profile from "@/components/user/Profile";
import useEscapes from "@/hooks/useEscapes";
import useFavorites from "@/hooks/useFavorites";
import useUser from "@/hooks/useUser";
import { useParams } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const { userId } = useParams();

  const { data: fetchedUser, isLoading } = useUser(userId as string);
  const { data: favorites = [] } = useFavorites(fetchedUser?.id as string);
  const { data: escapes = [] } = useEscapes(fetchedUser?.id as string);

  if (isLoading || !fetchedUser) {
    return <div>loading...</div>;
  }

  console.log("fetched user", fetchedUser);
  return (
    <div className="w-full h-full flex flex-col px-10 py-4 gap-8">
      {/* 유저 프로필 */}
      {/* <Profile /> */}
      {/* 방탈출 리스트 */}
      <EscapeFeed title="인생 테마" data={favorites} />
      <EscapeFeed
        title="탈출 경력"
        data={escapes}
        createButton
        userId={fetchedUser?.id}
      />
    </div>
  );
};

export default UserProfile;

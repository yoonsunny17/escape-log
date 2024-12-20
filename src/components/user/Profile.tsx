import React from "react";
import Avatar from "./Avatar";
import useCurrentUser from "@/hooks/useCurrentUser";

const Profile = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="flex flex-row justify-between px-16 py-12 border-2 border-main rounded-xl lg:w-2/3 w-full">
      <div className="flex flex-col w-12 items-center justify-center gap-1">
        <Avatar userId={currentUser?.id} hasBorder isLarge />
        <p className="text-white">{currentUser?.name}</p>
      </div>
      <div className="w-2/3 lg:w-9/12 text-white">
        <p>방탈출 총 횟수</p>
        <p>성향 (쫄/쫄탱 ...)</p>
        <p>좋아하는 장르</p>
        <p>취약점</p>
      </div>
    </div>
  );
};

export default Profile;

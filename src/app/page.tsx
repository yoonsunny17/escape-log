"use client";

import UltimateThemes from "@/components/UltimateThemes";
import Friends from "@/components/user/Friends";
import Profile from "@/components/user/Profile";

const Home = () => {
  return (
    <div className="px-10 py-4">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* 프로필 */}
        <Profile />
        {/* 탈출 메이트 */}
        <Friends />
      </div>
      <div>
        {/* 인생테마 */}
        <UltimateThemes />
      </div>
    </div>
  );
};

export default Home;

"use client";

import Friends from "@/components/user/Friends";
import Profile from "@/components/user/Profile";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* 프로필 */}
        <Profile />
        {/* 탈출 메이트 */}
        <Friends />
      </div>
      <div>{/* 인생테마 */}</div>
    </div>
  );
};

export default Home;

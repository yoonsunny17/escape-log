"use client";

import EscapeFeed from "@/components/escapes/EscapeFeed";
import Friends from "@/components/user/Friends";
import Profile from "@/components/user/Profile";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

const Home = () => {
  const { data: currentUser } = useCurrentUser();
  const { data: favorites = [] } = useFavorites(currentUser?.id as string);
  return (
    <div className="px-10 py-4">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* 프로필 */}
        <Profile className="lg:w-2/3" />
        {/* 탈출 메이트 */}
        <Friends />
      </div>
      <div>
        {/* 인생테마 */}
        <EscapeFeed title="인생 테마" data={favorites} />
      </div>
    </div>
  );
};

export default Home;

"use client";

import EscapeFeed from "@/components/escapes/EscapeFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import useEscapes from "@/hooks/useEscapes";
import useFavorites from "@/hooks/useFavorites";
import React from "react";

const MyEscapes = () => {
  const { data: currentUser } = useCurrentUser();
  const { data: favorites = [] } = useFavorites(currentUser?.id as string);
  const { data: escapes = [] } = useEscapes(currentUser?.id as string);

  return (
    <div className="px-10 py-4">
      <EscapeFeed title="인생 테마" data={favorites} />
      <EscapeFeed
        title="탈출 경력"
        data={escapes}
        createButton
        userId={currentUser?.id}
      />
    </div>
  );
};

export default MyEscapes;

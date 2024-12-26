"use client";

import EscapeFeed from "@/components/escapes/EscapeFeed";
import Profile from "@/components/user/Profile";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import React from "react";

const MyEscapes = () => {
  const { data: currentUser } = useCurrentUser();

  console.log("data? ", currentUser);
  return (
    <div className="px-10 py-4">
      <EscapeFeed userId={currentUser?.id as string} />
    </div>
  );
};

export default MyEscapes;

import useEscapes from "@/hooks/useEscapes";
import React from "react";
import EscapeItem from "./EscapeItem";
import Button from "../Button";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";

interface EscapeFeedProps {
  userId?: string;
  title?: string;
  data: Record<string, any>[];
  createButton?: boolean;
}

const EscapeFeed: React.FC<EscapeFeedProps> = ({
  userId,
  title,
  data,
  createButton,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const isOwnProfile = currentUser?.id === userId;

  console.log("??", currentUser?.id, userId);

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-12 w-full">
        <header className="text-main font-bold text-xl">{title}</header>
        {createButton && isOwnProfile && (
          <Button
            label="새 방탈출 기록하기"
            onClick={() => router.push("/my-escapes/register")}
          />
        )}
      </div>
      {data && data.length === 0 && (
        <div className="flex w-full h-full items-center justify-center text-zinc-600">
          방탈출 기록이 없습니다.
        </div>
      )}
      {data.length !== 0 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {data.map((escape: Record<string, any>) => (
            <EscapeItem
              userId={userId}
              key={escape.id}
              data={escape}
              themeId={escape?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EscapeFeed;

import useEscapes from "@/hooks/useEscapes";
import React from "react";
import EscapeItem from "./EscapeItem";
import Button from "../Button";
import { useRouter } from "next/navigation";

interface EscapeFeedProps {
  userId?: string;
}

const EscapeFeed: React.FC<EscapeFeedProps> = ({ userId }) => {
  const router = useRouter();

  const { data: escapes = [] } = useEscapes(userId);
  return (
    <div>
      <div className="flex flex-row justify-between items-center py-12 w-full">
        <header className="text-main font-bold text-xl">탈출 경력</header>
        <Button
          label="새 방탈출 기록하기"
          onClick={() => router.push("/my-escapes/register")}
        />
      </div>
      {escapes.length === 0 && (
        <div className="flex w-full h-full items-center justify-center text-zinc-600">
          방탈출 기록이 없습니다.
        </div>
      )}
      {escapes.length !== 0 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {escapes.map((escape: Record<string, any>) => (
            <EscapeItem userId={userId} key={escape.id} data={escape} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EscapeFeed;

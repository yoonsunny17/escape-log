import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (e: any) => {
      e.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
        ${hasBorder ? "outline outline-2 outline-main" : ""}
        ${isLarge ? "md:h-24 h-20" : "md:h-12 h-10"}
        ${isLarge ? "md:w-24 w-20" : "md:w-12 w-10"}
        rounded-full
        bg-white
        hover:opacity-90
        transition
        cursor-pointer
        relative
  `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
          padding: isLarge ? "16px" : "8px",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/alien-bold.png"}
      />
    </div>
  );
};

export default Avatar;

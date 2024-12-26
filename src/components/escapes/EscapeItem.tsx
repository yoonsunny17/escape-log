import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EscapeItemProps {
  userId?: string;
  data: Record<string, any>;
  themeId?: string;
}

const EscapeItem: React.FC<EscapeItemProps> = ({ userId, themeId, data }) => {
  return (
    <Link href={`/my-escapes/${themeId}`}>
      <div
        className="
        relative 
        group 
        rounded-xl 
        border-2 
        border-main 
        overflow-hidden
        hover:border-sub3
      "
      >
        <Image
          src={data.posterImgUrl}
          width={400}
          height={600}
          alt="poster image"
          style={{ objectFit: "cover" }}
        />
        <div
          className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          bg-black
          bg-opacity-50
          opacity-0
          group-hover:opacity-100
          transition
        "
        >
          <p className="text-sm text-zinc-300">{data.cafeName}</p>
          <p className="text-white text-lg font-bold">{data.themeName}</p>
        </div>
      </div>
    </Link>
  );
};

export default EscapeItem;

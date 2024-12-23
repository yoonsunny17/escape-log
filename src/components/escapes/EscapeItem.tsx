import Image from "next/image";
import React from "react";

interface EscapeItemProps {
  userId?: string;
  data: Record<string, any>;
}

const EscapeItem: React.FC<EscapeItemProps> = ({ userId, data }) => {
  console.log(data);
  return (
    <div
      className="
        border-2
        border-main
        rounded-xl
        bg-neutral-300
        hover:bg-neutral-400
        transition
        overflow-hidden
      "
    >
      <Image
        src={data.posterImgUrl}
        width={400}
        height={600}
        alt="poster img"
        style={{ objectFit: "cover" }}
      />
      <div>{data.body}</div>
      <div>{data.themeName}</div>
    </div>
  );
};

export default EscapeItem;

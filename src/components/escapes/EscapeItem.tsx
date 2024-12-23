import React from "react";

interface EscapeItemProps {
  userId?: string;
  data: Record<string, any>;
}

const EscapeItem: React.FC<EscapeItemProps> = ({ userId, data }) => {
  return (
    <div
      className="
        border-2
        border-main
        rounded-xl
        p-5
        bg-neutral-300
        hover:bg-neutral-400
        transition
      "
    >
      <div>{data.body}</div>
      <div>{data.themeName}</div>
    </div>
  );
};

export default EscapeItem;

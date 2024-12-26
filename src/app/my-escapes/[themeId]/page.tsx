"use client";

import FavoriteButton from "@/components/FavoriteButton";
import useEscape from "@/hooks/useEscape";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const EscapeDetail = () => {
  const { themeId } = useParams();

  const { data, isLoading } = useEscape(themeId as string);

  if (!data || isLoading) {
    return <div className="text-white">loading...</div>;
  }

  return (
    <div className="px-10 py-4">
      <div className="flex flex-row">
        <Image
          src={data?.posterImgUrl ?? "/images/alien-bold.png"}
          alt="poster image"
          width={400}
          height={600}
        />
        <div>
          <div>
            <p className="text-zinc-400">{data?.cafeName}</p>
            <p className="text-white text-2xl">{data?.themeName}</p>
          </div>
          <p className="text-zinc-400">
            <span className="font-bold text-white">{data?.playTime}</span>분 중{" "}
            <span className="font-bold text-white">{data?.duration}</span>분
            소요
          </p>
          <p className="text-zinc-400">
            탈출 인원:{" "}
            <span className="font-bold text-white">{data?.members}</span>{" "}
            <span className="mx-2">/</span> 탈출 결과:{" "}
            <span className="font-bold text-white">
              {data?.success ? "성공" : "실패"}
            </span>
          </p>
        </div>
      </div>

      <FavoriteButton themeId={data.id as string} />
      {/* <FavoriteButton themeId={themeId as string} /> */}
    </div>
  );
};

export default EscapeDetail;

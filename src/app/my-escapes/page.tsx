"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const MyEscapes = () => {
  const router = useRouter();
  return (
    <div>
      MyEscapes
      <Button
        label="새 방탈출 기록하기"
        onClick={() => router.push("/my-escapes/register")}
      />
    </div>
  );
};

export default MyEscapes;

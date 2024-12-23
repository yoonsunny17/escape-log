"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import useEscapes from "@/hooks/useEscapes";
import axios from "axios";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface RegisterEscapeProps {}

const RegisterEscape: React.FC<RegisterEscapeProps> = () => {
  const { mutate: mutateEscapes } = useEscapes();

  const [data, setData] = useState({
    themeName: "",
    cafeName: "",
    body: "",
    posterImgUrl: "",
    location: "",
    playTime: 0,
    date: new Date(),
    success: true,
    duration: 0,
    members: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const onSubmit = useCallback(async () => {
    try {
      // required
      if (!data.themeName || !data.cafeName) {
        toast.error("필수 항목을 모두 입력해 주세요");
        return;
      }

      await axios.post("/api/escapes", data);
      toast.success("방탈출 기록이 저장되었습니다!");

      setData({
        themeName: "",
        cafeName: "",
        body: "",
        posterImgUrl: "",
        location: "",
        playTime: 0,
        date: new Date(),
        success: true,
        duration: 0,
        members: 0,
      });

      mutateEscapes();
    } catch (error) {
      toast.error("저장 중 오류가 발생했습니다");
    }
  }, [data, mutateEscapes]);
  return (
    <div className="">
      <div className="flex flex-row justify-between py-12 w-full">
        <header className="text-main font-bold text-xl">
          이번엔 어떤 방탈출을 했는가
        </header>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 방탈출 카페명 */}
          <Input
            id="cafeName"
            type="text"
            value={data.cafeName}
            onChange={handleChange}
            label="방탈출 카페명"
          />

          {/* 방탈출 테마명 */}
          <Input
            id="themeName"
            type="text"
            value={data.themeName}
            onChange={handleChange}
            label="테마명"
          />
        </div>

        {/* 플레이시간 / 소요시간 */}
        <div>
          <Select />
        </div>
      </div>
      <Button onClick={onSubmit} label="submit"></Button>
    </div>
  );
};

export default RegisterEscape;

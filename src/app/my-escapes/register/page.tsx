"use client";

import Button from "@/components/Button";
import ImageUpload from "@/components/ImageUpload";
import Input from "@/components/Input";
import useEscapes from "@/hooks/useEscapes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface RegisterEscapeProps {}

const RegisterEscape: React.FC<RegisterEscapeProps> = () => {
  const router = useRouter();
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

  const handleImage = (image: string) => {
    setData((prev) => ({
      ...prev,
      posterImgUrl: image,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value, type } = e.target;
    setData((prev) => ({
      ...prev,
      [id]:
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
      router.push("/my-escapes");
    } catch (error) {
      toast.error("저장 중 오류가 발생했습니다");
    }
  }, [data, mutateEscapes, router]);
  return (
    <div className="px-10">
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
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="playTime"
            type="number"
            value={data.playTime || ""}
            onChange={handleChange}
            label="플레이시간"
            step="5"
          />
          <Input
            id="duration"
            type="number"
            value={data.duration || ""}
            onChange={handleChange}
            label="소요시간"
            step="5"
          />
        </div>

        {/* 참여인원 / 성공여부 */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="members"
            type="number"
            value={data.members || ""}
            onChange={handleChange}
            label="참여인원"
            step="1"
          />
          <select
            name="success"
            id="success"
            className="rounded-md bg-neutral-700 text-white px-6"
          >
            <option value="true">성공</option>
            <option value="false">실패</option>
          </select>
        </div>

        {/* 간단 후기 */}
        <Input
          id="body"
          type="text"
          value={data.body || ""}
          onChange={handleChange}
          label="한줄평"
        />

        {/* 방탈출 포스터 이미지 */}
        <ImageUpload
          value={data.posterImgUrl}
          onChange={(image) => handleImage(image)}
          label="포스터 이미지를 업로드해 주세요."
        />
        <Button onClick={onSubmit} label="submit" />
      </div>
    </div>
  );
};

export default RegisterEscape;

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // 요청 body 파싱
    const { email, name, password } = body;

    // 이미 존재하는 이메일인지 확인
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "이미 사용중인 이메일입니다." },
        { status: 422 }
      );
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 12);

    // 사용자 생성
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        profileImage: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 400 }
    );
  }
}

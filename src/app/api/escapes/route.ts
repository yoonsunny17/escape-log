import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // query string으로 받도록 수정
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    let escapes;

    if (userId && typeof userId === "string") {
      escapes = await prisma.escapeRecord.findMany({
        where: {
          userId,
        },
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      escapes = await prisma.escapeRecord.findMany({
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return NextResponse.json(escapes);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get escapes" },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth();
    const data = await req.json();
    const {
      themeName,
      cafeName,
      body,
      posterImgUrl,
      location,
      playTime,
      date,
      success,
      duration,
      members,
    } = data;

    if (!themeName) {
      return NextResponse.json(
        { error: "themeName and body are required" },
        { status: 400 }
      );
    }

    const escape = await prisma.escapeRecord.create({
      data: {
        themeName,
        cafeName,
        body,
        posterImgUrl,
        location,
        playTime,
        date,
        success,
        duration,
        members,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(escape);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to post escape" },
      { status: 400 }
    );
  }
}

import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        favoriteIds: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const favoriteEscapes = await prisma.escapeRecord.findMany({
      where: {
        id: {
          in: user.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteEscapes);
    // const { currentUser } = await serverAuth();

    // // currentUser.favoriteIds가 비어있을 경우를 대비한 처리 추가
    // if (!currentUser?.favoriteIds || currentUser.favoriteIds.length === 0) {
    //   return NextResponse.json([]);
    // }

    // const favoriteEscapes = await prisma.escapeRecord.findMany({
    //   where: {
    //     id: {
    //       in: currentUser.favoriteIds,
    //     },
    //   },
    // });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get favorite list" },
      { status: 400 }
    );
  }
}

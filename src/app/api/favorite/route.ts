import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();
    const body = await req.json();
    const { themeId } = body;

    const existingEscape = await prisma.escapeRecord.findUnique({
      where: {
        id: themeId,
      },
    });

    if (!existingEscape) {
      throw new Error("Invalid ID");
    }

    const user = await prisma.user.update({
      where: {
        email: currentUser.email as string,
      },
      data: {
        favoriteIds: {
          push: themeId,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to post favorite escape" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();
    const body = await req.json();
    const { themeId } = body;

    const existingEscape = await prisma.escapeRecord.findUnique({
      where: {
        id: themeId,
      },
    });

    if (!existingEscape) {
      throw new Error("Invalid ID");
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, themeId);

    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete favorite escape" },
      { status: 400 }
    );
  }
}

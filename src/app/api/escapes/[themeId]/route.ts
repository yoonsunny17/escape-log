import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { themeId: string } }
) {
  try {
    const { themeId } = params;

    if (!themeId || typeof themeId !== "string") {
      throw new Error("Invalid ID");
    }

    const escapeDetail = await prisma.escapeRecord.findUnique({
      where: {
        id: themeId,
      },
    });

    if (!escapeDetail) {
      throw new Error("Detail not found");
    }

    return NextResponse.json(escapeDetail);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get escape detail" },
      { status: 400 }
    );
  }
}

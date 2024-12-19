import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();

    return NextResponse.json(currentUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get current user" },
      { status: 400 }
    );
  }
}

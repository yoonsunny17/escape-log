import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 인증 필요한 경로들 (로그인 시 접근 가능)
  const protectedPaths = ["/"];

  // 토큰 확인
  const token = req.cookies.get("next-auth.session-token")?.value;

  if (protectedPaths.includes(path) && !token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: ["/"],
};

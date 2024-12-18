import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "ESCAPE LOG",
  description: "나의 모든 방탈출",
  icons: {
    icon: "/alien-bold.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");
  return (
    <html lang="en">
      <body className="">
        {token && <Navbar />}
        <div className="">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}

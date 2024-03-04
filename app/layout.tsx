import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schoolland Construction",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
    className="
    monitor:text-[1.3rem]
    laptop:text-[.85rem] 
    laptop-s:text-[.75rem] 
    tablet:text-[1.2vw]
    tablet-s:text-[1rem]
    mobile:text-[.85rem]
    mobile-s:text-[.7rem]
    ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

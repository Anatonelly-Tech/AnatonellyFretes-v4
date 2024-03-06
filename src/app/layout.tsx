import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anatonelly Fretes",
};

import { NavBar } from "@/components/NavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"w-full h-full" + inter.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-anatonelly-bg bg-no-repeat bg-cover h-full relative -z-50">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

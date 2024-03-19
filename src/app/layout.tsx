import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/providers/auth-provider";
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
    <AuthProvider>
      <html lang="en" className={"w-full h-full" + inter.className}>
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className="bg-anatonelly-bg bg-no-repeat bg-gray-900 overflow-hidden bg-cover w-full h-full relative -z-50">
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}

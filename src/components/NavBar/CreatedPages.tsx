"use client";
// Libs
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// Interface
interface PageProps {
  AllPages: { title: string; path: string }[];
  icon: React.ReactNode;
  HadleAddAnimation?: () => void;
}

export function CreatedPages({ AllPages, icon, HadleAddAnimation }: PageProps) {
  const { data: session } = useSession();

  function handleSignOut() {
    console.log(signOut());
  }
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="  text-violet-100 font-bold gap-3 bg-violet-700 hover:bg-violet-800 focus:shadow-violet-700 group flex select-none items-center justify-between rounded-full px-3 py-3 text-[15px] leading-none outline-none shadow-especial shadow-violet-950 hover:shadow-zinc-800  ">
        {icon}{" "}
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className="animate-enterFromLeft data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto text-white font-bold flex flex-col items-center justify-between gap-1 -translate-x-1/3 mt-2 ">
        {AllPages.map((page, index) => (
          <>
            {page.title === "Sair" ? (
              <div
                onClick={() => signOut()}
                className="hover:bg-violet-800 p-2 min-w-60 h-full bg-violet-700 rounded-lg shadow-especial shadow-violet-950 hover:shadow-zinc-800">
                <p className="text-center">{page.title}</p>
                <NavigationMenu.Link />
              </div>
            ) : (
              <Link
                onClick={
                  page.title === "Sair" ? handleSignOut : HadleAddAnimation
                }
                href={page.path}
                key={index}
              >
                <div className="hover:bg-violet-800 p-2 min-w-60 h-full bg-violet-700 rounded-lg shadow-especial shadow-violet-950 hover:shadow-zinc-800">
                  <p className="text-center">{page.title}</p>
                  <NavigationMenu.Link />
                </div>
              </Link>
            )}
          </>
        ))}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

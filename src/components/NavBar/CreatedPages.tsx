import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { MdHomeFilled } from "react-icons/md";

interface PageProps {
  name: string;
  AllPages: { title: string; path: string }[];
  icon: React.ReactNode;
}
export function CreatedPages({ name, AllPages, icon }: PageProps) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className=" text-purple-100 font-bold gap-3 bg-purple-700 hover:bg-purple-800 focus:shadow-purple7 group flex select-none items-center justify-between rounded-[4px] px-3 py-2 text-[15px] leading-none outline-none    ">
        {icon}
        {name}{" "}
        <CaretDownIcon
          className=" text-purple-100 relative top-[1px] transition-transform duration-[300] ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto bg-purple-700  text-white font-bold flex flex-col items-center justify-between">
        {AllPages.map((page, index) => (
          <div key={index} className="hover:bg-purple-800 p-2 w-full h-full">
            {page.title}

            <NavigationMenu.Link />
          </div>
        ))}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

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
      <NavigationMenu.Trigger className="  text-violet-100 font-bold gap-3 bg-violet-700 hover:bg-violet-800 focus:shadow-violet-700 group flex select-none items-center justify-between rounded-full px-3 py-3 text-[15px] leading-none outline-none shadow-especial shadow-violet-950 hover:shadow-zinc-800 border-2 border-violet-500  ">
        {icon}
        {/* {name} */}{" "}
        {/* {name === "Home" ? null : (
          // <CaretDownIcon
          //   className=" text-violet-100 relative top-[1px] transition-transform duration-[300] ease-in group-data-[state=open]:-rotate-180"
          //   aria-hidden
          // />
        )} */}
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className="animate-enterFromLeft data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto text-white font-bold flex flex-col items-center justify-between gap-1 -translate-x-1/3 mt-2 ">
        {AllPages.map((page, index) => (
          <div
            key={index}
            className="hover:bg-violet-800 p-2 min-w-60 h-full bg-violet-700 rounded-lg "
          >
            <p className="text-center">{page.title}</p>

            <NavigationMenu.Link />
          </div>
        ))}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

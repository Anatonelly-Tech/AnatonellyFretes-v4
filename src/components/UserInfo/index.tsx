// Libs
import React from "react";

// Components
import AvatarComponent from "../AvatarImage";

// Interface
interface UserInfoProps {
  username: string;
  role: string;
  plan: string;
  invoice: number;
}

const UserInfo = ({ username, role, plan, invoice }: UserInfoProps) => {
  return (
    <div className="w-full h-auto md:w-auto bg-purple-600 items-center justify-center flex rounded-md gap-3 ">
      <div className="w-full h-full gap-3 p-4 px-6 xl:flex">
        <div className="flex flex-col justify-center items-center gap-2">
          <AvatarComponent
            username={username}
            src={"/img/UsersImage/Maria.png"}
            fallback={true}
          />

          <div className="flex flex-col">
            <p className="text-white text-md font-medium ">{username}</p>
            <p className="text-white text-sm font-light">{role}</p>
          </div>
        </div>
        <div className="pl-2 pr-2 w-full md:w-11/12">
          <hr className="border-purple-700 w-full xl:w-[0] xl:h-full border-[1px] " />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 whitespace-nowrap">
          <p className="text-white text-xs font-medium xl:text-sm text-center">
            Valor Fatura: <br className="hidden md:flex" /> R${" "}
            {invoice.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-white text-sm font-medium text-center">
            Plano Contratado: <br className="hidden md:flex" /> {plan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

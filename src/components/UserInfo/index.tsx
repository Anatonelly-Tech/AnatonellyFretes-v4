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
    <div className="w-auto bg-purple-600 items-center justify-center flex rounded-md flex-col gap-3 ">
      <div className="w-full h-full p-4 px-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <AvatarComponent
            username={username}
            src={"/img/UsersImage/Maria.png"}
            fallback={true}
          />

          <div className="flex flex-col">
            <p className="text-white text-md font-medium">{username}</p>
            <p className="text-white text-sm font-light">{role}</p>
          </div>
        </div>
        <div className="pl-2 pr-2 w-11/12">
          <hr className="border-purple-700 w-full border-[1px] pl-2 pr-2" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm font-medium">
            Valor Fatura: R$ {invoice.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-white text-sm font-medium">
            Plano Contratado: {plan}
          </p>
        </div>
      </div>
      <div className="w-full h-8 bg-purple-800 rounded-b-md"></div>
    </div>
  );
};

export default UserInfo;

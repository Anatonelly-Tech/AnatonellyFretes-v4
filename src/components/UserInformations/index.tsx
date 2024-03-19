"use client";
import React from "react";
import UserInfo from "@/components/UserInfo";
import AccountInformations from "@/components/AccountInformations";
import ProgressBarAntd from "@/components/newProgressBar";
import { useSession } from "next-auth/react";

const UserInformation = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="w-full md:w-auto flex flex-col md:flex-row h-auto items-center justify-center gap-6 lg:gap-2 ">
        <UserInfo
          username={session.user?.name || "awaitng Server"}
          role={"Admin"}
          plan={"Prata"}
          invoice={150.0}
        />
        <div className="md:w-auto flex flex-col items-center justify-between h-full gap-2 lg:gap-6">
          <AccountInformations
            title={"Quantidade Fretes Realizados"}
            result={"15 Fretes"}
          />
          <AccountInformations
            title={"Valor Economizado"}
            result={"R$150,00"}
          />
        </div>
        <ProgressBarAntd percentProgress={75} meta={100} key={1} />
      </div>
    );
  }
};

export default UserInformation;

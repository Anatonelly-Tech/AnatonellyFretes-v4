"use client";

import UserNotifyBar from "@/components/UserNotifyBar";
import "../../../../styles/main.css";

import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { NavBar } from "@/components/NavBar";
import NavBarMobile from "@/components/NavBarMobile";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start gap-5">
      <div className="w-5/6 h-auto bg-purple-950 p-3 rounded mt-16">
        <p className="text-white text-xl font-bold text-center ">
          Seja Bem Vindo(a) Motorista
        </p>
      </div>
      <div className="w-5/6 h-5/6 bg-purple-950 rounded">
        <div className="flex w-full items-center justify-between">
          <div className="absolute left-0 top-0 flex items-start justify-start gap-4">
            <Avatar.Root className="bg-white border inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle ">
              <Avatar.Image
                className="h-full w-full rounded object-cover text-black"
                src={"/img/UsersImage/Maria.png"}
                alt={`Maria's profile picture`}
              />
              <div className="bg-green-600 h-3 w-3 rounded-full absolute -translate-y-4 translate-x-5"></div>
            </Avatar.Root>
            <UserNotifyBar />
          </div>

          <NavBarMobile />
        </div>
        {/* main */}
        <div className="w-full h-full flex flex-col items-center justify-around sm:p-20 xs:p-10 p-5">
          <p className="text-lg font-semibold text-white text-center">
            Você ainda não tem nenhum veiculo cadastrado.
          </p>
          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 text-lg rounded shadow-especial shadow-purple-800"
          >
            Cadastre o seu veiculo
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;

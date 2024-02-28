"use client";

// libs
import { useState } from "react";

// components
import UserInfo from "@/components/UserInfo";
import AccountInformations from "@/components/AccountInformations";
import ProgressBar from "@/components/ProgressBar";
import Ranking from "@/components/Ranking";
import { Carousel } from "@/components/Carousel";
import ProgressBarAntd from "@/components/newProgressBar";
// style
import "../styles/main.css";
import UserNotifyBar from "@/components/UserNotifyBar";
import * as Avatar from "@radix-ui/react-avatar";

export default function Home() {
  const [username, setUsername] = useState("Maria");

  const Sellers = [
    {
      QtdFretes: 15,
      NameSeller: "Maria",
      photoSeller: "/img/UsersImage/Maria.png",
    },
    {
      QtdFretes: 14,
      NameSeller: "Jefferson",
      photoSeller: "/img/UsersImage/Jefferson.png",
    },
    {
      QtdFretes: 20,
      NameSeller: "Gabi",
      photoSeller: "/img/UsersImage/Gabi.png",
    },
    {
      QtdFretes: 25,
      NameSeller: "Brahms",
      photoSeller: "/img/UsersImage/Brahms.png",
    },
    {
      QtdFretes: 29,
      NameSeller: "Laion",
      photoSeller: "/img/UsersImage/Laion.png",
    },
  ];

  const sortedSellers = [...Sellers].sort((a, b) => b.QtdFretes - a.QtdFretes);

  function Placing(index: number) {
    return `${index + 1}º`;
  }

  return (
    <div className="w-full h-full flex ">
      {/* esquerda */}
      <div className="w-1/5 flex flex-col h-full py-4 items-center justify-start gap-5">
        <UserInfo
          username={username}
          role={"Admin"}
          plan={"Prata"}
          invoice={150.0}
        />
        <AccountInformations
          title={"Quantidade Fretes Realizados"}
          result={"15 Fretes"}
        />
        <AccountInformations title={"Valor Economizado"} result={"R$150,00"} />
        <ProgressBarAntd percentProgress={75} meta={100} key={1} />
      </div>
      {/* meio */}
      <div className="w-3/5 h-full flex flex-col py-28 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-center">
            Seja Bem Vindo(a) {username}
          </h1>

          <div>
            <span className="text-2xl">Informações do dia</span>
            <hr className="border-zinc-400 w-56 border-2" />
          </div>
          <div className=" flex justify-between gap-5">
            <div className="bg-zinc-300/45 w-1/2 h-64"></div>
            <div className="bg-zinc-300/45 w-1/2 h-64">
              <h1>Meus Fretes</h1>
            </div>
          </div>

          <div>
            <span className="text-2xl">Publicidade</span>
            <hr className="border-zinc-400 w-36 border-2" />
          </div>
          <div className=" w-full">
            <Carousel />
          </div>
        </div>
      </div>
      {/* direita */}
      <div className="w-1/5 h-full flex flex-col ">
        <div className="flex items-center justify-end gap-4 m-4">
          <UserNotifyBar />
          <Avatar.Root className="bg-white border inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle ">
            <Avatar.Image
              className="h-full w-full rounded object-cover text-black"
              src={"/img/UsersImage/Maria.png"}
              alt={`Maria's profile picture`}
            />
            <div className="bg-green-600 h-3 w-3 rounded-full absolute -translate-y-4 translate-x-5"></div>
          </Avatar.Root>
        </div>
        <div className=" flex flex-col items-center p-6">
          <h1 className="text-white text-2xl font-bold text-left">
            Rankings da Semana
          </h1>
          <hr className="w-full items-center" />
          <div className="flex flex-col w-full items-start">
            {sortedSellers.map((seller, index) => (
              <Ranking
                key={index}
                QtdFretes={seller.QtdFretes}
                NameSeller={seller.NameSeller}
                photoSeller={seller.photoSeller}
                Placing={() => Placing(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

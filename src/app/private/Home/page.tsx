"use client";

// libs
import { useState } from "react";

// components

import UserInfo from "@/components/UserInfo";
import AccountInformations from "@/components/AccountInformations";
import ViewShippingSummary from "@/components/ViewShippingSummary";
import Ranking from "@/components/Ranking";
import { Carousel } from "@/components/Carousel";
import ProgressBarAntd from "@/components/newProgressBar";
// style
import "../../../styles/main.css";
import UserNotifyBar from "@/components/UserNotifyBar";
import * as Avatar from "@radix-ui/react-avatar";
import DaniedPage from "@/app/denid/page";
import { useSession } from "next-auth/react";

export default function Home() {
  const FreteListHome = [
    {
      key: 1,
      idForm: "123",
      name: "Frete Expresso",
      freightPrice: "1500.75",
      collectCity: "São Paulo",
      deliveryCity: "Rio de Janeiro",
      collectDate: "2024-03-15",
      deliveryDate: "2024-03-18",
      product: "Eletrônicos",
      statusItem: true,
    },
    {
      key: 2,
      idForm: "456",
      name: "Frete Rápido",
      freightPrice: "1200.50",
      collectCity: "Rio de Janeiro",
      deliveryCity: "Belo Horizonte",
      collectDate: "2024-03-16",
      deliveryDate: "2024-03-19",
      product: "Roupas",
      statusItem: false,
    },
    {
      key: 3,
      idForm: "789",
      name: "Frete Econômico",
      freightPrice: "800.25",
      collectCity: "Belo Horizonte",
      deliveryCity: "Curitiba",
      collectDate: "2024-03-17",
      deliveryDate: "2024-03-20",
      product: "Livros",
      statusItem: true,
    },
    {
      key: 4,
      idForm: "101",
      name: "Frete Prioritário",
      freightPrice: "2000.90",
      collectCity: "Curitiba",
      deliveryCity: "Porto Alegre",
      collectDate: "2024-03-18",
      deliveryDate: "2024-03-21",
      product: "Móveis",
      statusItem: false,
    },
    {
      key: 5,
      idForm: "202",
      name: "Frete Urgente",
      freightPrice: "2500.60",
      collectCity: "Porto Alegre",
      deliveryCity: "Salvador",
      collectDate: "2024-03-19",
      deliveryDate: "2024-03-22",
      product: "Brinquedos",
      statusItem: true,
    },
    {
      key: 6,
      idForm: "303",
      name: "Frete Especial",
      freightPrice: "1800.45",
      collectCity: "Salvador",
      deliveryCity: "Recife",
      collectDate: "2024-03-20",
      deliveryDate: "2024-03-23",
      product: "Acessórios",
      statusItem: false,
    },
    {
      key: 7,
      idForm: "404",
      name: "Frete Padrão",
      freightPrice: "1200.30",
      collectCity: "Recife",
      deliveryCity: "Fortaleza",
      collectDate: "2024-03-21",
      deliveryDate: "2024-03-24",
      product: "Cosméticos",
      statusItem: true,
    },
    {
      key: 8,
      idForm: "505",
      name: "Frete Regular",
      freightPrice: "900.15",
      collectCity: "Fortaleza",
      deliveryCity: "Manaus",
      collectDate: "2024-03-22",
      deliveryDate: "2024-03-25",
      product: "Eletrônicos",
      statusItem: false,
    },
    {
      key: 9,
      idForm: "606",
      name: "Frete Rápido",
      freightPrice: "1500.85",
      collectCity: "Manaus",
      deliveryCity: "Belém",
      collectDate: "2024-03-23",
      deliveryDate: "2024-03-26",
      product: "Roupas",
      statusItem: true,
    },
    {
      key: 10,
      idForm: "707",
      name: "Frete Expresso",
      freightPrice: "1200.70",
      collectCity: "Belém",
      deliveryCity: "São Luís",
      collectDate: "2024-03-24",
      deliveryDate: "2024-03-27",
      product: "Livros",
      statusItem: false,
    },
  ];

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

  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="w-full h-full flex ">
        {/* esquerda */}
        <div className="w-1/5 flex flex-col h-full py-4 items-center justify-start gap-5">
          <UserInfo
            username={session.user?.name || "awaitng Server"}
            role={"Admin"}
            plan={"Prata"}
            invoice={150.0}
          />
          <AccountInformations
            title={"Quantidade Fretes Realizados"}
            result={"15 Fretes"}
          />
          <AccountInformations
            title={"Valor Economizado"}
            result={"R$150,00"}
          />
          <ProgressBarAntd percentProgress={75} meta={100} key={1} />
        </div>
        {/* meio */}
        <div className="w-3/5 h-full flex flex-col py-28 text-white">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-center">
              Seja Bem Vindo(a) {session.user?.name}
            </h1>

            <div>
              <span className="text-2xl">Informações do dia</span>
              <hr className="border-zinc-400 w-56 border-2" />
            </div>
            <div className=" flex justify-between gap-5">
              <div className="bg-zinc-300/45 w-1/2 h-64"></div>
              <div className="bg-zinc-300/45 w-1/2 h-64 text-black flex flex-col items-center justify-start overflow-y-auto">
                <ViewShippingSummary
                  idForm="title"
                  name="Resumo do Frete"
                  freightPrice="Preço do Frete"
                  collectCity="cidade de coleta"
                  deliveryCity="cidade de entrega"
                  collectDate="data da coleta"
                  deliveryDate="data da entrega"
                  product="Produto"
                  statusItem={true}
                />

                {FreteListHome.map((frete) => (
                  <>
                    <ViewShippingSummary
                      key={frete.key}
                      idForm={frete.idForm}
                      name={frete.name}
                      freightPrice={frete.freightPrice}
                      collectCity={frete.collectCity}
                      deliveryCity={frete.deliveryCity}
                      collectDate={frete.collectDate}
                      deliveryDate={frete.deliveryDate}
                      product={frete.product}
                      statusItem={frete.statusItem}
                    />
                  </>
                ))}
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
  return <DaniedPage />;
}

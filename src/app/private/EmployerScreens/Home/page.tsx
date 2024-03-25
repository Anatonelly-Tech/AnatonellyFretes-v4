"use client";

// libs

// components

import ViewShippingSummary from "@/components/ViewShippingSummary";
import Ranking from "@/components/Ranking";
import { Carousel } from "@/components/Carousel";
// style
import "../../../../styles/main.css";
import UserNotifyBar from "@/components/UserNotifyBar";
import * as Avatar from "@radix-ui/react-avatar";
import DaniedPage from "@/app/denid/page";
import { useSession } from "next-auth/react";
import SocialMedias from "@/components/Socialmedias";
import UserInformation from "@/components/UserInformations";
import OpenUserInformations from "@/components/OpenUserInformations";

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
        <div className="w-full h-full flex flex-col items-center justify-center  ">
          <div className="w-full h-full flex flex-col justify-start text-white p-10">
            {/* top */}
            <div className="w-full h-auto flex items-start justify-center xl:items-start xl:justify-between gap-2 ">
              {/* esquerda */}
              <div className="w-1/3 h-auto absolute flex left-0 top-0 flex-row-reverse items-start justify-end gap-4 xl:relative">
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
              {/* meio */}
              <div className="h-auto w-1/3  flex items-center justify-center mt-14 sm:mt-10 md:mt-5 ">
                <span className="h-full w-full flex items-center justify-center ">
                  <h1 className="text-sm 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-bold text-center p-3 bg-black/70 rounded-lg">
                    Seja Bem Vindo(a) {session.user?.name}
                  </h1>
                </span>
              </div>
              {/* direita */}
              <div className="flex xl:hidden w-1/3 items-start justify-end absolute top-0 right-24">
                <OpenUserInformations />
              </div>
              <div className="hidden xl:flex w-1/3 p-5">
                <UserInformation />
              </div>
              {/* perfil */}
            </div>
            {/* end top */}
            <div className="flex h-auto flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xl">Informações do dia</span>
                  <hr className="border-zinc-400 w-56 border-2" />
                  <div className="bg-purple-950 w-full h-52 rounded-lg"></div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xl">Meus Fretes</span>
                  <hr className="border-zinc-400 w-56 border-2" />
                  <div className="bg-purple-950 w-full h-52 text-black flex flex-col items-center justify-start rounded-lg">
                    <div className="overflow-y-scroll w-11/12 scrollbar-thin scrollbar-track-purple-700 scrollbar-thumb-purple-800 force-overflow">
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
                </div>
              </div>

              {/* Publicidade */}
              <div className="mt-10">
                <span className="text-2xl">Publicidade</span>
                <hr className="border-zinc-400 w-36 border-2" />
                <div className="mt-5">
                  <Carousel />
                </div>
              </div>
            </div>
            {/* Redes Sociais */}
            <div className="flex justify-center p-5">
              <SocialMedias />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <DaniedPage />;
}

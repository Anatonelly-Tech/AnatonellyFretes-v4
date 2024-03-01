"use client";

import React from "react";
import ViewFrete from "@/components/Tabs/ViewFretes";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import TabsComponent from "@/components/Tabs/index";

interface indexProps {
  idFrete: string;
  nomeFrete: string;
  resumoFrete: string;
  freteValue: string;
  exitLocation: string;
  deliveryPlace: string;
}

const page = ({
  idFrete,
  nomeFrete,
  resumoFrete,
  freteValue,
  exitLocation,
  deliveryPlace,
}: indexProps) => {
  const [activeTab, setActiveTab] = React.useState("1");
  const [fretesAtivos, setFretesAtivos] = React.useState([
    {
      idFrete: "1",
      nomeFrete: "Frete 1",
      resumoFrete: "Resumo do Frete 1",
      freteValue: "R$ 100,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Rio de Janeiro",
    },
    {
      idFrete: "2",
      nomeFrete: "Frete 2",
      resumoFrete: "Resumo do Frete 2",
      freteValue: "R$ 200,00",
      exitLocation: "Assis Chateaubriand",
      deliveryPlace: "curitiba",
    },
    {
      idFrete: "3",
      nomeFrete: "Frete 3",
      resumoFrete: "Resumo do Frete 3",
      freteValue: "R$ 300,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Belo Horizonte",
    },
    {
      idFrete: "4",
      nomeFrete: "Frete 4",
      resumoFrete: "Resumo do Frete 4",
      freteValue: "R$ 400,00",
      exitLocation: "Mato Grosso",
      deliveryPlace: "Salvador",
    },
    {
      idFrete: "5",
      nomeFrete: "Frete 5",
      resumoFrete: "Resumo do Frete 5",
      freteValue: "R$ 500,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Recife",
    },
    {
      idFrete: "6",
      nomeFrete: "Frete 6",
      resumoFrete: "Resumo do Frete 6",
      freteValue: "R$ 600,00",
      exitLocation: "São Paulo",
      deliveryPlace: "São Luiz",
    },
    {
      idFrete: "7",
      nomeFrete: "Frete 7",
      resumoFrete: "Resumo do Frete 7",
      freteValue: "R$ 700,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Manaus",
    },
    {
      idFrete: "8",
      nomeFrete: "Frete 8",
      resumoFrete: "Resumo do Frete 8",
      freteValue: "R$ 800,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Porto Alegre",
    },
    {
      idFrete: "9",
      nomeFrete: "Frete 9",
      resumoFrete: "Resumo do Frete 9",
      freteValue: "R$ 900,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Florianópolis",
    },
    {
      idFrete: "10",
      nomeFrete: "Frete 10",
      resumoFrete: "Resumo do Frete 10",
      freteValue: "R$ 1000,00",
      exitLocation: "São Paulo",
      deliveryPlace: "Vitória",
    },
  ]);
  const [fretesInativos, setFretesInativos] = React.useState([
    {
      idFrete: "11",
      nomeFrete: "Frete 11",
      resumoFrete: "Resumo do Frete 1",
      freteValue: "R$ 1100,00",
      exitLocation: "Rio de Janeiro",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "12",
      nomeFrete: "Frete 12",
      resumoFrete: "Resumo do Frete 2",
      freteValue: "R$ 1200,00",
      exitLocation: "Curitiba",
      deliveryPlace: "Assis Chateaubriand",
    },
    {
      idFrete: "13",
      nomeFrete: "Frete 13",
      resumoFrete: "Resumo do Frete 3",
      freteValue: "R$ 1300,00",
      exitLocation: "Belo Horizonte",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "14",
      nomeFrete: "Frete 14",
      resumoFrete: "Resumo do Frete 4",
      freteValue: "R$ 1400,00",
      exitLocation: "Salvador",
      deliveryPlace: "Mato Grosso",
    },
    {
      idFrete: "15",
      nomeFrete: "Frete 15",
      resumoFrete: "Resumo do Frete 5",
      freteValue: "R$ 1500,00",
      exitLocation: "Recife",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "16",
      nomeFrete: "Frete 16",
      resumoFrete: "Resumo do Frete 6",
      freteValue: "R$ 1600,00",
      exitLocation: "São Luiz",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "17",
      nomeFrete: "Frete 17",
      resumoFrete: "Resumo do Frete 7",
      freteValue: "R$ 1700,00",
      exitLocation: "Manaus",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "18",
      nomeFrete: "Frete 18",
      resumoFrete: "Resumo do Frete 8",
      freteValue: "R$ 1800,00",
      exitLocation: "Porto Alegre",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "19",
      nomeFrete: "Frete 19",
      resumoFrete: "Resumo do Frete 9",
      freteValue: "R$ 1900,00",
      exitLocation: "Florianópolis",
      deliveryPlace: "São Paulo",
    },
    {
      idFrete: "20",
      nomeFrete: "Frete 20",
      resumoFrete: "Resumo ddo Frete 2",
      freteValue: "R$ 2000,00",
      exitLocation: "Vitória",
      deliveryPlace: "São Paulo",
    },
  ]);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex w-full h-full justify-between ">
        <div className="flex-1">
          <h1 className="w-auto text-start bg-gradient-to-br from-purple-900 to-violet-900 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all">
            Lista de
            <br /> Fretes
          </h1>
        </div>
        <TabsComponent
          freteAtivo={fretesAtivos}
          freteInativo={fretesInativos}
        />
        <div className="flex-1"></div>
      </div>
      {/* <div className="w-2/3 h-2/3 rounded-lg shadow-rounded shadow-[#4f2d5b] bg-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-gray-400">
        <ViewFrete
          key={1}
          idFrete={"title"}
          nomeFrete={"Nome do Frete"}
          resumoFrete={"Resumo do Frete"}
          freteValue={"Valor do Frete"}
          exitLocation={"Local de Saída"}
          deliveryPlace={"Local de Entrega"}
        />
        
      </div> */}
    </div>
  );
};

export default page;

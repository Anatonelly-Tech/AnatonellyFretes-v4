"use client";

import React from "react";
import ViewFrete from "@/components/ViewFretes";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

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
  const [fretes, setFretes] = React.useState([
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
  return (
    <div className="w-full h-full flex flex-col ">
      <h1 className="w-full text-start bg-gradient-to-br from-purple-900 to-violet-900 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all">
        Lista de
        <br /> Fretes
      </h1>
      <div className="w-2/3 h-2/3 rounded-lg shadow-rounded shadow-[#4f2d5b] bg-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-gray-400">
        <div className="flex items-center justify-between w-auto h-auto p-2 m-2 border-2 border-zinc-500 rounded shadow-interno shadow-zinc-500 ">
          {/* resumo do frete */}
          <div className="">
            <div className="flex flex-col">
              <label className="text-zinc-800 font-semibold">
                <p className="text-lg font-semibold">Nome do Frete</p>
              </label>
              <label className="text-zinc-500 font-bold">
                <p className="text-lg font-semibold">Resumo do Frete</p>
              </label>
            </div>
          </div>{" "}
          <p className="text-zinc-500 text-3xl">|</p>
          {/* origem/destino */}
          <div className="flex items-center justify-between w-[30%] gap-3">
            <div className="w-5/12 h-full flex items-center justify-center gap-1 p-1">
              <div className="w-[20%]">
                <FaMapMarkerAlt />
              </div>
              <div className="w-auto ">
                <p className="text-sm font-semibold"> Local de Entrega</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HiArrowLongRight size={20} />
            </div>
            <div className="w-2/5 h-full flex items-center justify-center gap-1 p-1">
              <div className="w-[20%]">
                <FaMapLocationDot />
              </div>
              <div className="w-auto ">
                <p className="text-sm font-semibold">Local de Entrega</p>
              </div>
            </div>
          </div>
          {/* Valor */}
          <p className="text-zinc-500 text-3xl">|</p>
          <div>
            <p className="text-sm font-semibold">Valor do Frete</p>
          </div>
          {/* ações */}
          <p className="text-zinc-500 text-3xl">|</p>
          <div className="w-52 flex justify-center">
            <p className="text-lg font-semibold ">Ações</p>
          </div>
          <div></div>
        </div>
        {fretes.map((frete) => (
          <ViewFrete
            key={frete.idFrete}
            idFrete={frete.idFrete}
            nomeFrete={frete.nomeFrete}
            resumoFrete={frete.resumoFrete}
            freteValue={frete.freteValue}
            exitLocation={frete.exitLocation}
            deliveryPlace={frete.deliveryPlace}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

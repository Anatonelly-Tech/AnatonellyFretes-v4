"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTruck } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const Page = () => {
  const [Hover1, setHover1] = useState(false);
  const [Hover2, setHover2] = useState(false);
  const router = useRouter();

  return (
    <div className="flex w-full h-screen items-center justify-center gap-36">
      <button
        onClick={() => {
          router.push("/auth/loginDriver");
        }}
        onMouseEnter={() => {
          setHover1(true);
        }}
        onMouseLeave={() => {
          setHover1(false);
        }}
        className=" w-80 h-auto rounded-md shadow-lg shadow-black items-center justify-center gap-8 bg-white text-black text-xl font-bold  "
      >
        <div className="h-full w-full flex px-6 py-4 items-center justify-center gap-8 shadow-2xl rounded shadow-black ">
          <div className="p-1 bg-purple-900 w-16 h-16 rounded-full text-white flex items-center justify-center ">
            <FaTruck size={40} />
          </div>
          Bem vindo amigo <br /> Caminhoneiro
        </div>
        <div
          className={` max-w-full p-10 text-base  ${
            Hover1 ? "flex " : "hidden"
          }`}
        >
          aqui você anuncia o lugar onde você está localizado e o seu caminhão,
          pessoas interessadas em fazer fretes será sujerido o seu serviço
        </div>
      </button>
      <button
        onClick={() => {
          router.push("/auth/login");
        }}
        onMouseEnter={() => {
          setHover2(true);
        }}
        onMouseLeave={() => {
          setHover2(false);
        }}
        className="w-80 h-auto rounded-md shadow-lg shadow-black bg-gradient-to-r from-purple-300 via-purple-600 to-purple-950 text-white text-xl font-bold "
      >
        <div className="h-full w-full flex px-6 py-4 items-center justify-center gap-8 shadow-2xl rounded shadow-black">
          <div className="p-1 bg-purple-900 w-16 h-16 rounded-full text-white flex items-center justify-center">
            <FaBoxes size={40} />
          </div>
          Poste seu frete aqui
        </div>
        <div
          className={` max-w-full p-10 text-base ${Hover2 ? "flex" : "hidden"}`}
        >
          Aqui você anuncia informações sobre o frete que deseja que seja feito
          e então exibiremos uma lista de caminhoneiros disponíveis para fazer
          esse frete.
        </div>
      </button>
    </div>
  );
};

export default Page;

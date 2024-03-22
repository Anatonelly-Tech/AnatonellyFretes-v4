"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTruck } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

const Page = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-center mt-10 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-950 to-purple-200">
          Seja Bem vindo a <br /> Anatonelly Fretes
        </span>
      </h1>
      <div className="flex w-full h-full items-center justify-center gap-36">
        <button
          onClick={() => router.push("/auth/loginDriver")}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          className="transition-all duration-300 ease-in-out delay-100  w-80 h-24 hover:h-80 rounded-md shadow-lg shadow-black bg-gray-100 text-black text-xl font-bold "
        >
          <div
            className={` w-full flex px-6 py-4 text-base items-center justify-center gap-8 rounded transition-all duration-300 ${
              hover1 ? "shadow-2xl shadow-black h-1/3" : "h-full"
            }`}
          >
            <div className="p-1 bg-purple-900 w-16 h-16 rounded-full text-white flex items-center justify-center ">
              <FaTruck size={40} />
            </div>
            Bem vindo amigo <br /> Caminhoneiro
          </div>
          {hover1 === true ? (
            <div
              className={`relative w-full h-2/3 p-10 text-sm text-center flex flex-col items-center justify-center text-black animate-ApperText`}
            >
              aqui você anuncia o lugar onde você está localizado e o seu
              caminhão, pessoas interessadas em fazer fretes será sugerido o seu
              serviço
            </div>
          ) : null}
        </button>
        <button
          onClick={() => router.push("/auth/login")}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          className="transition-all duration-300 ease-in-out delay-100  w-80 h-24 hover:h-80 rounded-md shadow-lg shadow-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-950 text-white text-xl font-bold  "
        >
          <div
            className={` w-full flex px-6 py-4 text-base items-center justify-center gap-8 rounded transition-all duration-300 ${
              hover2 ? "shadow-2xl shadow-black h-1/3" : "h-full"
            }`}
          >
            <div className="p-1 bg-purple-900 w-16 h-16 rounded-full text-white flex items-center justify-center ">
              <FaBoxes size={40} />
            </div>
            Poste seu frete aqui
          </div>
          {hover2 === true ? (
            <div
              className={`relative w-full h-2/3 p-10 text-sm text-center flex flex-col items-center justify-center text-white bg-black/10 
          ${hover2 === true ? "animate-ApperText" : "animate-DesApperText"}`}
            >
              Aqui você anuncia informações sobre o frete que deseja que seja
              feito e então exibiremos uma lista de caminhoneiros disponíveis
              para fazer esse frete.
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Page;

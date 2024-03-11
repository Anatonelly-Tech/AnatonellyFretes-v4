"use client";
import "../../styles/main.css";

import React, { useState } from "react";
import { getCEP } from "@/services/viacep";

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState({});

  const getfuncionarios = async () => {
    // console.log(responsaveis.data.response);
    // console.log(responsaveis);

    const responsaveis = await getCEP("85903140");
    setResponsaveisFrete(responsaveis.data);
    console.log(responsaveisFrete);
  };

  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      <div>
        {responsaveisFrete !== null ? (
          <div className="text-white">
            <p>{responsaveisFrete.cep}</p>
            <p>{responsaveisFrete.logradouro}</p>
            <p>{responsaveisFrete.complemento}</p>
            <p>{responsaveisFrete.bairro}</p>
            <p>{responsaveisFrete.localidade}</p>
            <p>{responsaveisFrete.uf}</p>
            <p>{responsaveisFrete.ibge}</p>
            <p>{responsaveisFrete.gia}</p>
            <p>{responsaveisFrete.ddd}</p>
            <p>{responsaveisFrete.siafi}</p>
          </div>
        ) : (
          <span className="text-red-500">
            Nada Cadastrado ainda Click NO BOTÃO
          </span>
        )}
      </div>
      <button className="w-10 h-10 bg-white" onClick={getfuncionarios}></button>
    </div>
  );
};

export default page;

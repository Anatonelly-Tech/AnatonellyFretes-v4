"use client";
import "../../styles/main.css";

import React, { useState } from 'react';
import ModalComponent from '@/components/Modal';
import Loading from '@/components/Loading';
import ProgressBar from '@/components/ProgressBar';
import UserNotifyBar from '@/components/UserNotifyBar';
import AdvancedPages from '@/components/AdvancedPages';
import Page2 from '../CriarFrete/page2';
import { getAllFreight } from '@/services/formData';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import {
  getAllResponsibles,
  getResponsibleById,
  postResponsibleFreight,
} from '@/services/responsibleFreight';
import { RandomFormName } from '@/utils/randomFormName.js';
import { arrayOfResponsibles } from '@/utils/responsibleName';

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState([]);

  const getfuncionarios = async () => {
    // console.log(responsaveis.data.response);
    // console.log(responsaveis);
    
    const responsaveis = await getAllFreight();
    setResponsaveisFrete(responsaveis.data.response);
    console.log(responsaveisFrete);
    
  };

  // const datab = {
  //   name: 'testFuncionario',
  //   cpf: 'testFuncionario',
  //   email: 'testFuncionario',
  //   phone: 'testFuncionario',
  //   contactWay: 'callOnly',
  //   isAdmin: true,
  //   department: 'Compras',
  //   password: 'testFuncionario',
  // };
  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      <div>
        {responsaveisFrete.length > 0
          ? responsaveisFrete.map((item, index) => (
              <div className='text-white font-black flex flex-col' key={index}>
                <span>{item.name}</span>
              </div>
            ))
          : <span className='text-red-500'>Nada Cadastrado ainda Click NO BOTÃO</span> }
      </div>
      <button className="w-10 h-10 bg-white" onClick={getfuncionarios}></button>
    </div>
  );
};

export default page;

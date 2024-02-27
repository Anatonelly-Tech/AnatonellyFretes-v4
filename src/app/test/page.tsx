'use client';
import '@/styles/main.css';

import React, { useState } from 'react';
import ModalComponent from '@/components/Modal';
import Loading from '@/components/Loading';
import ProgressBar from '@/components/ProgressBar';
import UserNotifyBar from '@/components/UserNotifyBar';
import AdvancedPages from '@/components/AdvancedPages';
import Page2 from '../CriarFrete/page2';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import {
  getAllResponsibles,
  postResponsibleFreight,
} from '@/services/responsibleFreight';

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState([]);

  const getfuncionarios = async () => {
    const responsaveis = await getAllResponsibles();
    console.log(responsaveis.data.response);

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
    <div className='p-5 gap-5 w-full h-full flex '>
      <div>
        {responsaveisFrete.map((item) => (
          <div className='text-white font-black flex flex-col' key={item._id}>
            <span>{item.name}</span>
            <span>{item.phone}</span>
          </div>
        ))}
      </div>
      <button className='w-10 h-10 bg-white' onClick={getfuncionarios}></button>
    </div>
  );
};

export default page;
{
}

{
  // // const { register, control } = useForm();
  /* <ModalComponent /> */
}
{
  /* <Loading /> 
<div className="flex flex-col">
  <ProgressBar />
  <UserNotifyBar />
</div> */
}
{
  /* <form
  className='w-full h-full flex items-center justify-center'
  action=''
>
  <Page2 register={register} />
</form>
<DevTool control={control} /> */
}

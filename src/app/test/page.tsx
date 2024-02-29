'use client';
import '@/styles/main.css';

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
const data = {
  name: 'teste',
  idResponsible: ['1', '2'],
  veiculos: [
    'Todos os Leves',
    '3/4',
    'Fiorino',
    'Toco',
    'VLC',
    'Todos os Médios',
    'Bitruck',
    'Truck',
    'Todos os Pesados',
    'Bitrem',
    'Carreta',
    'Carreta LS',
    'Rodotrem',
    'Vanderléia',
  ],
  carrocerias: [
    'Todos os Fechados',
    'Baú',
    'Baú Frigorífico',
    'Baú Refrigerado',
    'Sider',
    'Todas as Abertas',
    'Caçamba',
    'Grade Baixa',
    'Graneleiro',
    'Plataforma',
    'Prancha',
    'Apenas Cavalo',
    'Bug Porta Container',
    'Cavaqueira',
    'Cegonheiro',
    'Gaiola',
    'Hopper',
    'Munck',
    'Silo',
    'Tanque',
  ],
  collectCity: 'CidadeColeta',
  collectDate: '2323-03-23',
  deliveryCity: 'CIdadeEntrega',
  deliveryDate: '2424-04-24',
  radioValueLocalizacao: 'Nacional',
  radioValueTipoCarga: 'Completa',
  radioValueLona: 'Sim',
  radioValueRastreador: 'Sim',
  product: 'Produto',
  species: 'Especie',
  weight: 'PesoTOtal',
  unitMeasurement: 'KG',
  volume: 'Volume',
  weightCuban: 'PesoCubano',
  sizeCubic: 'MetragemCubica',
  length: 'Comprimento',
  width: 'Largura',
  height: 'Altura',
  radioValueValor: 'JaSeiValor',
  radioValuePedagio: 'InclusoNoValor',
  freightPrice: 'ValorFrete',
  valueCalculation: 'KG',
  paymentForm: 'Pix',
  advancePrice: 'Adiantamento',
  comments: 'Observações',
  radioPacoteEscolhido: 'FreteDestaque',
};

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState([]);

  const getfuncionarios = async () => {
    const responsaveis = await arrayOfResponsibles(data);
    // console.log(responsaveis.data.response);
console.log(responsaveis);

    // setResponsaveisFrete(responsaveis.data.response);
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
          <div className='text-white font-black flex flex-col' key={item}>
            <span>{item}</span>
            {/* <span>{item.name}</span> */}
            {/* <span>{item.phone}</span> */}
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

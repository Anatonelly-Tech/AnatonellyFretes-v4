import React from 'react';
import CheckBox from '@/components/CheckBox';
//icons
import { HiArrowLongRight } from 'react-icons/hi2';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import Actions from '@/components/Actions';
import { Frete } from '@/utils/InterfaceFreight';

const index = ({
  idForm,
  statusItem,
  name,
  carrocerias,
  veiculos,
  unitMeasurement,
  freightPrice,
  collectCity,
  deliveryCity,
  idResponsible,
  weight,
  ...props
}: Frete) => {
  function TitleComponent() {
    return (
      <div className='flex items-center justify-between w-auto h-auto p-2 m-2 border-2 border-zinc-400 rounded shadow-interno shadow-zinc-400 bg-zinc-100 '>
        {/* resumo do frete */}

        <div className='w-[20%] flex flex-col'>
          <label className='text-zinc-800 font-semibold'>
            <p className='text-lg font-semibold'>Nome do Frete</p>
          </label>
          <label className='text-zinc-500 font-bold'>
            <p className='text-lg font-semibold'>Resumo do Frete</p>
          </label>
        </div>

        <p className='text-zinc-500 text-3xl text-center align-baseline'>|</p>
        {/* origem/destino */}
        <div className='w-[40%] flex items-center justify-between  gap-3'>
          <div className='w-[40%] h-full flex items-center justify-center gap-1 p-1'>
            <div className='w-[20%]'>
              <FaMapMarkerAlt />
            </div>
            <div className='w-[70%] text-nowrap text-ellipsis overflow-hidden'>
              {collectCity}
            </div>
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <HiArrowLongRight size={20} />
          </div>
          <div className='w-[40%] h-full flex items-center justify-center gap-1 p-1'>
            <div className='w-[20%]'>
              <FaMapLocationDot />
            </div>
            <div className='w-[70%] text-nowrap text-ellipsis overflow-hidden '>
              {deliveryCity}
            </div>
          </div>
        </div>
        {/* Valor */}
        <p className='text-zinc-500 text-3xl text-center align-baseline'>|</p>
        <div className='w-[20%] flex items-center justify-center'>
          <p className='text-sm font-semibold'>Valor do Frete</p>
        </div>
        {/* ações */}
        <p className='text-zinc-500 text-3xl text-center align-baseline'>|</p>
        <div className='w-[20%] flex justify-center'>
          <p className='text-lg font-semibold '>Ações</p>
        </div>
      </div>
    );
  }
  function InfosComponent() {
    return (
      <div className='flex items-center justify-between w-auto h-auto p-2 m-2 border-2 border-zinc-400 rounded shadow-interno shadow-zinc-200 bg-white '>
        {/* resumo do frete */}

        <div className='w-[20%] flex flex-col items-start'>
          <label className='text-zinc-800 font-semibold' htmlFor={idForm}>
            {name}
          </label>
          <label className='text-zinc-500 font-bold' htmlFor={idForm}>
            <p>
              {weight} {unitMeasurement}
            </p>
          </label>
        </div>

        {/* <p className="text-zinc-500 text-3xl text-center align-baseline">|</p> */}
        {/* origem/destino */}
        <div className='w-[40%] flex items-center justify-between border-black border-x-2'>
          <div className='w-[40%] h-full flex items-center justify-center gap-1 p-1'>
            <div className='w-[20%]'>
              <FaMapMarkerAlt />
            </div>
            <div className='w-[70%] text-nowrap text-ellipsis overflow-hidden'>
              {collectCity}
            </div>
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <HiArrowLongRight size={20} />
          </div>
          <div className='w-[40%] h-full flex items-center justify-center gap-1 p-1'>
            <div className='w-[20%]'>
              <FaMapLocationDot />
            </div>
            <div className='w-[70%] text-nowrap text-ellipsis overflow-hidden'>
              {deliveryCity}
            </div>
          </div>
        </div>
        {/* Valor */}
        {/* <p className="text-zinc-500 text-3xl text-center align-baseline"></p> */}
        <div className='w-[20%] h-full flex items-center justify-center '>
          {freightPrice}
        </div>
        {/* ações */}
        {/* <p className="text-zinc-500 text-3xl text-center flex items-center justify-center h-full">
          |
        </p> */}
        <div className='w-[20%] flex justify-center items-center border-black border-l-2'>
          <Actions
            idResponsible={idResponsible}
            idForm={idForm}
            statusItem={statusItem}
            _id={''}
            name={''}
            collectCity={''}
            collectDate={''}
            deliveryCity={''}
            deliveryDate={''}
            responsibleFreight={[]}
            product={''}
            species={''}
            weight={''}
            freightPrice={''}
            paymentForm={''}
            valueCalculation={''}
            radioValueLocalizacao={''}
            radioValueTipoCarga={''}
            radioValueLona={''}
            radioValueRastreador={''}
            unitMeasurement={''}
            radioValueValor={''}
            radioValuePedagio={''}
            radioPacoteEscolhido={''}
            veiculos={[]}
            carrocerias={[]}
            createdAt={''}
          />
        </div>
      </div>
    );
  }
  return idForm === 'title' ? <TitleComponent /> : <InfosComponent />;
};

export default index;

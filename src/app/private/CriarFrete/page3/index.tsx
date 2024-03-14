import React from 'react';
import Carrocerias from '@/utils/Storage/Carrocerias';
import Veiculos from '@/utils/Storage/Veiculos';
import CheckBox from '@/components/CheckBox';

interface Page3Props {
  register: any;
  error: any;
}

export default function Page3({ register, error }: Page3Props) {
  return (
    <div className=' mt-10 flex items-start justify-center w-4/5 h-4/5 bg-zinc-400 gap-5'>
      <div className='flex flex-col items-center justify-center w-1/2 h-5/6 gap-5'>
        <h2 className='text-white font-bold p-2 rounded'>
          Escolha Quantos Veículos Quiser*
        </h2>
        <div className='flex items-start justify-center w-auto h-4/5 p-10 gap-9 rounded '>
          <div className='flex flex-col items-start justify-center gap-2 '>
            <h3 className='text-white font-bold '>Leves</h3>
            {Veiculos.Leves.map((item, index) => (
              <div key={index}>
                <CheckBox
                  register={register}
                  name={'veiculos'}
                  label={item}
                  id={`VL${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Médios</h3>
            {Veiculos.Medios.map((item, index) => (
              <div key={index}>
                <CheckBox
                  register={register}
                  label={item}
                  name={'veiculos'}
                  id={`VM${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Pesados</h3>
            {Veiculos.Pesados.map((item, index) => (
              <div key={index}>
                <CheckBox
                  register={register}
                  label={item}
                  name={'veiculos'}
                  id={`CP${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
        </div>
        <span className='text-sm flex text-red-500 font-bold'>
          {error.veiculos?.message}
        </span>
      </div>
      <div className='flex flex-col items-center justify-start w-1/2 h-5/6 gap-5'>
        <h2 className='text-white font-bold  p-2 rounded '>
          Escolha Quantas Carrocerias Quiser*
        </h2>
        <div className='flex items-start justify-center w-auto h-4/5 p-10 gap-9  rounded'>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Fechadas</h3>
            {Carrocerias.Fechadas.map((item, index) => (
              <div key={index}>
                <CheckBox
                  register={register}
                  name={'carrocerias'}
                  label={item}
                  id={`CF${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Abertas</h3>
            {Carrocerias.Abertas.map((item, index) => (
              <div key={index}>
                <CheckBox
                  name={'carrocerias'}
                  register={register}
                  label={item}
                  id={`CA${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Especial</h3>
            {Carrocerias.Especial.map((item, index) => (
              <div key={index}>
                <CheckBox
                  name={'carrocerias'}
                  register={register}
                  label={item}
                  id={`CE${index}`}
                  value={item}
                />
              </div>
            ))}
          </div>
        </div>
        <span className='text-sm flex text-red-500 font-bold'>
          {error.carrocerias?.message}
        </span>
      </div>
    </div>
  );
}

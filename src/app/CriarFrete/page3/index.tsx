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
    <div className=' mt-10 flex items-center justify-center w-4/5 h-4/5 bg-zinc-400 gap-5'>
      <div className='flex flex-col items-center justify-start w-1/2 h-5/6 gap-5'>
        <h2 className='text-white font-bold bg-zinc-500 p-2 rounded shadow-especial shadow-zinc-800'>
          Escolha Quantos Veículos Quiser
        </h2>
        <div className='flex items-start justify-center w-auto h-96 p-10 gap-9 bg-zinc-500 rounded shadow-especial shadow-zinc-800'>
          <div className='flex flex-col items-start justify-center gap-2 '>
            <h3 className='text-white font-bold '>Leves</h3>
            {Veiculos.Leves.map((item, index) => (
              <CheckBox label={item} id={`VL${index}`} />
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Médios</h3>
            {Veiculos.Medios.map((item, index) => (
              <CheckBox label={item} id={`VM${index}`} />
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Pesados</h3>
            {Veiculos.Pesados.map((item, index) => (
              <CheckBox label={item} id={`VP${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-start w-1/2 h-5/6 gap-5'>
        <h2 className='text-white font-bold bg-zinc-500 p-2 rounded shadow-especial shadow-zinc-800'>
          Escolha Quantos Veículos Quiser
        </h2>
        <div className='flex items-start justify-center w-auto h-96 p-10 gap-9  bg-zinc-500 rounded shadow-especial shadow-zinc-800'>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Fechadas</h3>
            {Carrocerias.Fechadas.map((item, index) => (
              <CheckBox label={item} id={`VL${index}`} />
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Abertas</h3>
            {Carrocerias.Abertas.map((item, index) => (
              <CheckBox label={item} id={`VM${index}`} />
            ))}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-white font-bold '>Especial</h3>
            {Carrocerias.Especial.map((item, index) => (
              <CheckBox label={item} id={`VP${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

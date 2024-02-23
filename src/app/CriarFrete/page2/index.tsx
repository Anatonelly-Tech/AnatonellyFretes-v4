import InputRadio from '@/components/Radio';
import React from 'react';
import InputLabel from '@/components/Input';
import ModalComponent from '@/components/Modal';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
interface Page2Props {
  register: any;
}

const Page2 = ({ register }: Page2Props) => {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 h-4/5 bg-zinc-400 gap-5'>
      <div className='flex items-center justify-between h-auto w-full gap-5'>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['TipoCarga']}
            label={['Completa', 'Complemento']}
            subLabel={['frete completo', 'frete complemento']}
            register={register}
            name={'TipoCarga'}
            value={['Nacional', 'Internacional']}
            title={'Tipo de Carga'}
          />
        </div>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['PrecisaLona']}
            label={['Sim', 'Não']}
            subLabel={['Frete precisa de lona', 'frete não precisa de lona']}
            register={register}
            name={'Sim'}
            value={['Sim', 'Não']}
            title={'Precisa de lona?'}
          />
        </div>
        <div className='w-full h-auto flex bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['PrecisaRastreador']}
            label={['Sim', 'Não']}
            subLabel={[
              'Frete precisa de rastreador',
              'Frete não precisa de rastreador',
            ]}
            register={register}
            name={'Sim'}
            value={['Sim', 'Não']}
            title={'Precisa de Rastreador?'}
          />
        </div>
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='Produto'
          name='Produto'
          register={register}
          type='text'
          label='Produto'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='Especie'
          name='Especie'
          register={register}
          type='text'
          label='Espécie'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='PesoCarga'
          name='PesoCarga'
          register={register}
          type='text'
          label='Peso total da carga'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='UnidadeMedida'
          name='UnidadeMedida'
          register={register}
          type='text'
          label='Unidade de medida'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='Volumes'
          name='Volumes'
          register={register}
          type='text'
          label='Volumes'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='PesoCubano'
          name='PesoCubano'
          register={register}
          type='text'
          label='Peso cubano'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='MetragemCubica'
          name='MetragemCubica'
          register={register}
          type='text'
          label='Metragem cúbica total (m³)'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='Comprimento'
          name='Comprimento'
          register={register}
          type='text'
          label='Comprimento'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='Largura'
          name='Largura'
          register={register}
          type='text'
          label='Largura'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
        <InputLabel
          id='Altura'
          name='Altura'
          register={register}
          type='text'
          label='Altura'
          icon={<MdDateRange className='w-8' />}
          placeholder=''
        />
      </div>
    </div>
  );
};

export default Page2;

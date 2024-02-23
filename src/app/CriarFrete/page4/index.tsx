import InputRadio from '@/components/Radio';
import InputLabel from '@/components/Input';
import React from 'react';
import { FaCity } from 'react-icons/fa';
import PackagePlan from '@/components/PackagePlan';
interface Page4Props {
  register: any;
  error: any;
}

export default function Page4({ register, error }: Page4Props) {
  return (
    <div className=' mt-10 flex flex-col items-center justify-center w-4/5 h-4/5 bg-zinc-400 gap-5 p-5'>
      <div className='flex items-center justify-start w-full h-auto px-5 gap-20'>
        <InputRadio
          id={['Nacional', 'Internacional']}
          label={['Nacional', 'Internacional']}
          subLabel={[
            'Fretes realizados dentro do país',
            'Fretes realizados para fora do país',
          ]}
          register={register}
          name={'localizacaoFrete'}
          value={['Nacional', 'Internacional']}
          title={'Localizacao do Frete'}
        />
        <InputRadio
          id={['Nacional', 'Internacional']}
          label={['Nacional', 'Internacional']}
          subLabel={[
            'Fretes realizados dentro do país',
            'Fretes realizados para fora do país',
          ]}
          register={register}
          name={'localizacaoFrete'}
          value={['Nacional', 'Internacional']}
          title={'Localizacao do Frete'}
        />
      </div>
      <div className='w-full h-auto flex justify-between items-center px-5 gap-3'>
        <InputLabel
          id='colectCity'
          name='colectCity'
          register={register}
          label='Cidade de Coleta'
          icon={<FaCity className='w-8' />}
          placeholder='Cidade de Coleta'
        />{' '}
        <InputLabel
          id='colectCity'
          name='colectCity'
          register={register}
          label='Cidade de Coleta'
          icon={<FaCity className='w-8' />}
          placeholder='Cidade de Coleta'
        />{' '}
        <InputLabel
          id='colectCity'
          name='colectCity'
          register={register}
          label='Cidade de Coleta'
          icon={<FaCity className='w-8' />}
          placeholder='Cidade de Coleta'
        />{' '}
        <InputLabel
          id='colectCity'
          name='colectCity'
          register={register}
          label='Cidade de Coleta'
          icon={<FaCity className='w-8' />}
          placeholder='Cidade de Coleta'
        />
      </div>
      <div className='w-full h-auto px-5'>
        {' '}
        <InputLabel
          id='colectCity'
          name='colectCity'
          register={register}
          type='text'
          label='Cidade de Coleta'
          icon={<FaCity className='w-8' />}
          placeholder='Cidade de Coleta'
        />
      </div>
      <div className='w-full h-auto'>
        <PackagePlan />
      </div>
    </div>
  );
}

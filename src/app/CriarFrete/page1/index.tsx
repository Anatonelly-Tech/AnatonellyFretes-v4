// Libs

interface Page1Props {
  register: any;
}

import InputLabel from '@/components/Input';
import ModalComponent from '@/components/Modal';
// Components
import InputRadio from '@/components/Radio';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

export default function Page1({ register }: Page1Props) {
  return (
    <div className='flex w-full h-full flex-col items-start justify-center gap-8 p-5'>
      <div className='w-full h-auto flex flex-col justify-center items-center gap-5'>
        <div className='flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded'>
          <div className='w-2/3'>
            <InputLabel
              id='colectCity'
              name='colectCity'
              register={register}
              label='Cidade de Coleta'
              icon={<FaCity className='w-8' />}
              placeholder='Cidade de Coleta'
            />
          </div>

          <div className='w-1/3'>
            <InputLabel
              id='colectDate'
              name='colectDate'
              register={register}
              type='date'
              label='Data de Coleta'
              icon={<MdDateRange className='w-8' />}
              placeholder='DD/MM/AAAA'
            />
          </div>
        </div>
        <div className='flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded'>
          <div className='w-2/3'>
            <InputLabel
              id='deliveryCity'
              name='deliveryCity'
              register={register}
              label='Cidade de Entrega'
              icon={<FaCity className='w-8' />}
              placeholder='Cidade de Entrega'
            />
          </div>
          <div className='w-1/3'>
            <InputLabel
              id='deliveryDate'
              name='deliveryDate'
              register={register}
              type='date'
              label='Data de Entrega'
              icon={<MdDateRange className='w-8' />}
              placeholder='DD/MM/AAAA'
            />
          </div>
        </div>
      </div>
      <div className='flex w-full gap-5'>
        <div className=' w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <div className='w-auto h-auto'>
            <ModalComponent />
          </div>
          <div className='w-full'>lista de responsaveis pelo frete</div>
        </div>
        <div className='bg-zinc-300 shadow-md p-2 rounded flex w-1/3 '>
          <InputRadio
            id={['localizacaoFrete']}
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
      </div>
    </div>
  );
}

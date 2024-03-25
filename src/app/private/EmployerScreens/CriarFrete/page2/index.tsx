import InputRadio from '@/components/Radio';
import React from 'react';
import InputLabel from '@/components/Input';
import ModalComponent from '@/components/Modal';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import SelectComponent from '@/components/Select';
interface Page2Props {
  register: any;
  error: any;
}

const Page2 = ({ register, error }: Page2Props) => {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 h-4/5 bg-zinc-400 gap-5'>
      <div className='flex items-center justify-between h-auto w-full gap-5'>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['Completa', 'Complemento']}
            label={['Completa', 'Complemento']}
            subLabel={['frete completo', 'frete complemento']}
            register={register}
            name={'radioValueTipoCarga'}
            value={['Completa', 'Complemento']}
            title={'Tipo de Carga'}
            isRequired={true}
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.radioValueTipoCarga?.message}
          </span>
        </div>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['needCover', 'dontNeedCover']}
            label={['Sim', 'Não']}
            subLabel={['Frete precisa de lona', 'frete não precisa de lona']}
            isRequired={true}
            register={register}
            name={'radioValueLona'}
            value={['needCover', 'dontNeedCover']}
            title={'Precisa de lona?'}
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.radioValueLona?.message}
          </span>
        </div>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['needTracker', 'dontNeedTracker']}
            label={['Sim', 'Não']}
            isRequired={true}
            subLabel={[
              'Frete precisa de rastreador',
              'Frete não precisa de rastreador',
            ]}
            register={register}
            name={'radioValueRastreador'}
            value={['needTracker', 'dontNeedTracker']}
            title={'Precisa de Rastreador?'}
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.radioValueRastreador?.message}
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <div className='flex flex-col w-full'>
          <InputLabel
            id='product'
            name='product'
            isRequired={true}
            register={register}
            type='text'
            label='Produto'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.product?.message}
          </span>
        </div>

        <div className='flex flex-col w-full'>
          <InputLabel
            id='species'
            name='species'
            isRequired={true}
            register={register}
            type='text'
            label='Espécie'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.species?.message}
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <div className='flex flex-col w-full'>
          <InputLabel
            id='weight'
            name='weight'
            register={register}
            type='text'
            isRequired={true}
            label='Peso total da carga'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.weight?.message}
          </span>
        </div>
        <div className='flex flex-col w-full'>
          <SelectComponent
            register={register}
            placeholder='Selecione'
            value={['Por Quilograma', 'Por Tonelada']}
            valueId={['KG', 'T']}
            label='Unidade de Medida'
            id='unitMeasurement'
            name='unitMeasurement'
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.unitMeasurement?.message}
          </span>
        </div>

        <InputLabel
          id='volume'
          name='volume'
          register={register}
          type='text'
          label='Volumes'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='weightCuban'
          name='weightCuban'
          register={register}
          type='text'
          label='Peso cubano'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='sizeCubic'
          name='sizeCubic'
          register={register}
          type='text'
          label='Metragem cúbica total (m³)'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <InputLabel
          id='length'
          name='length'
          register={register}
          type='text'
          label='Comprimento'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='width'
          name='width'
          register={register}
          type='text'
          label='Largura'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='height'
          name='height'
          register={register}
          type='text'
          label='Altura'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
      </div>
    </div>
  );
};

export default Page2;

import InputRadio from '@/components/Radio';
import React from 'react';
import InputLabel from '@/components/Input';
import ModalComponent from '@/components/Modal';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import SelectComponent from '@/components/Select';
interface Page2Props {
}

<<<<<<<< HEAD:src/app/private/CriarFrete/page2/index.tsx
const Page2 = ({ register, error }: Page2Props) => {
========
const Page2 = ({  }: Page2Props) => {
>>>>>>>> master:src/app/private/CriarFrete/page2/page.tsx
  return (
    <div className='flex flex-col items-center justify-center w-4/5 h-4/5 bg-zinc-400 gap-5'>
      <div className='flex items-center justify-between h-auto w-full gap-5'>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['radioValueTipoCarga']}
            label={['Completa', 'Complemento']}
            subLabel={['frete completo', 'frete complemento']}
            name={'radioValueTipoCarga'}
            value={['Completa', 'Complemento']}
            title={'Tipo de Carga'}
            isRequired={true}
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['radioValueLona']}
            label={['Sim', 'Não']}
            subLabel={['Frete precisa de lona', 'frete não precisa de lona']}
            isRequired={true}
            name={'radioValueLona'}
            value={['Sim', 'Não']}
            title={'Precisa de lona?'}
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>
        <div className='w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <InputRadio
            id={['radioValueRastreador']}
            label={['Sim', 'Não']}
            isRequired={true}
            subLabel={[
              'Frete precisa de rastreador',
              'Frete não precisa de rastreador',
            ]}
            name={'radioValueRastreador'}
            value={['Sim', 'Não']}
            title={'Precisa de Rastreador?'}
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <div className='flex flex-col w-full'>
          <InputLabel
            id='product'
            name='product'
            isRequired={true}
            type='text'
            label='Produto'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>

        <div className='flex flex-col w-full'>
          <InputLabel
            id='species'
            name='species'
            isRequired={true}
            type='text'
            label='Espécie'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between h-auto w-full gap-5 bg-zinc-300 shadow-md p-2 rounded'>
        <div className='flex flex-col w-full'>
          <InputLabel
            id='weight'
            name='weight'
            type='text'
            isRequired={true}
            label='Peso total da carga'
            icon={<MdDateRange className='w-8' />}
            placeholder='placeholder'
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>
        <div className='flex flex-col w-full'>
          <SelectComponent
<<<<<<<< HEAD:src/app/private/CriarFrete/page2/index.tsx
            register={register}
            placeholder='Selecione'
========
            placeholder='Selecione a unidade de medida'
>>>>>>>> master:src/app/private/CriarFrete/page2/page.tsx
            value={['Por Quilograma', 'Por Tonelada']}
            valueId={['KG', 'T']}
            label='Unidade de Medida'
            id='unitMeasurement'
            name='unitMeasurement'
          />
          <span className='text-sm flex text-red-500 font-bold'>
          </span>
        </div>

        <InputLabel
          id='volume'
          name='volume'
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
          type='text'
          label='Peso cubano'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='sizeCubic'
          name='sizeCubic'
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
          type='text'
          label='Comprimento'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='width'
          name='width'
          type='text'
          label='Largura'
          icon={<MdDateRange className='w-8' />}
          placeholder='placeholder'
        />
        <InputLabel
          id='height'
          name='height'
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

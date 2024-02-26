import InputRadio from '@/components/Radio';
import InputLabel from '@/components/Input';
import React from 'react';
import {
  FaCalculator,
  FaCity,
  FaComments,
  FaHandHoldingUsd,
  FaMoneyBillAlt,
} from 'react-icons/fa';
import PackagePlan from '@/components/PackagePlan';
import { MdAttachMoney } from 'react-icons/md';
import SelectComponent from '@/components/Select';
interface Page4Props {
  register: any;
  error: any;
}

export default function Page4({ register, error }: Page4Props) {
  console.log(typeof register);
  
  return (
    <div className=' mt-10 flex flex-col items-center justify-start w-4/5 h-4/5 bg-zinc-400 gap-5 p-5'>
      <div className='flex items-center justify-start w-full h-auto px-5 gap-10'>
        <div className='bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start'>
          <InputRadio
            id={['Já sei o Valor', 'A combinar']}
            label={['Já sei o Valor', 'A combinar']}
            subLabel={[
              'Fretes realizados dentro do país',
              'Fretes realizados para fora do país',
            ]}
            register={register}
            name={'radioValueValor'}
            value={['JaSeiValor', 'Acombinar']}
            title={'Informações de Valor'}
          />
        </div>
        <div className='bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start'>
          <InputRadio
            id={['Incluso no valor', 'Pago a parte']}
            label={['Incluso no valor', 'Pago a parte']}
            subLabel={[
              'Fretes realizados dentro do país',
              'Fretes realizados para fora do país',
            ]}
            register={register}
            name={'radioValuePedagio'}
            value={['InclusoValor', 'PagoParte']}
            title={'Pedagio'}
          />
        </div>
      </div>
      <div className='w-full h-auto flex justify-between items-center px-5 gap-3'>
        <InputLabel
          id='freightPrice'
          name='freightPrice'
          register={register}
          label='Valor do frete'
          icon={<MdAttachMoney className='w-8' />}
          placeholder='Valor do frete'
        />
        <SelectComponent
          register={register}
          placeholder='Selecione'
          value={['Por Quilograma', 'Por Tonelada', 'Total']}
          valueId={['KG', 'T', 'Total']}
          label='Cálculo do valor'
          id='valueCalculation'
          name='valueCalculation'
        />
        <SelectComponent
          register={register}
          placeholder='Selecione'
          value={[
            'Pix',
            'Depósito em conta',
            'Crédito em cartão',
            'Cheque',
            'Outros',
          ]}
          valueId={['Pix', 'Deposito', 'Cartao', 'Cheque', 'Outros']}
          label='Forma de pagamento'
          id='paymentForm'
          name='paymentForm'
        />
        <InputLabel
          id='advancePrice'
          name='advancePrice'
          register={register}
          label='Adiantamento'
          icon={<FaMoneyBillAlt className='w-8' />}
          placeholder='Adiantamento'
        />
      </div>
      <div className='w-full h-auto px-5'>
        <InputLabel
          id='comments'
          name='comments'
          register={register}
          type='text'
          label='Observações'
          icon={<FaComments className='w-8' />}
          placeholder='Observações'
        />
      </div>
      
      <div className='w-full h-auto'>
        <PackagePlan register={register} />
      </div>
    </div>
  );

}

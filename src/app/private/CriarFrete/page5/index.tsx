import React, { useState } from 'react';

import { DiaFormatado } from '@/utils/formatDateFunction';
import { arrayOfResponsibles } from '@/utils/responsibleName';
import { postFreight } from '@/services/formData';

const Page5 = async ({ data }: any) => {
  const responsibles = await arrayOfResponsibles(data);
  return (
    <div className='w-full flex gap-2 h-full flex-col p-5'>
      <span className='text-xl font-semibold'>Pedido #001</span>
      <div className='flex gap-2'>
        <div className='w-1/2 h-full p-5 bg-zinc-300 shadow-xl'>
          <span className='text-xl font-semibold'>Informações de Entrega:</span>
          <div className='flex h-full w-full justify-between '>
            <div className='flex flex-col w-1/2'>
              <span className='font-medium'>
                Origem:
                <span className='font-normal pl-1'>{data.collectCity}</span>
              </span>
              <span className='font-medium'>
                Data de Coleta:
                <span className='font-normal pl-1'>
                  {DiaFormatado(new Date(data.collectDate))}
                </span>
              </span>
              <span className='font-medium'>
                Tipo de Entrega:
                <span className='font-normal pl-1'>
                  {data.radioValueLocalizacao}
                </span>
              </span>
            </div>
            <div className='flex flex-col w-1/2 border-l pl-5'>
              <span className='font-medium'>
                Destino:
                <span className='font-normal pl-1'>{data.deliveryCity}</span>
              </span>
              <span className='font-medium'>
                Data de Entrega:
                <span className='font-normal pl-1'>
                  {DiaFormatado(new Date(data.deliveryDate))}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className='w-1/2 h-full p-5 bg-zinc-300 shadow-xl'>
          <span className='text-xl font-semibold'>Informações da Carga:</span>
          <div className='flex h-full w-full justify-between '>
            <div className='flex flex-col w-1/2'>
              <span className='font-medium'>
                Produto:
                <span className='font-normal pl-1'>{data.product}</span>
              </span>
              <span className='font-medium'>
                Peso:
                <span className='font-normal pl-1'>
                  {data.weight} {data.valueCalculation}
                </span>
              </span>

              <span className='font-medium'>
                Tipo de Carga:
                <span className='font-normal pl-1'>
                  {data.radioValueTipoCarga}
                </span>
              </span>
            </div>
            <div className='flex flex-col w-1/2 border-l pl-5'>
              <span className='font-medium'>
                Espécie:
                <span className='font-normal pl-1'>{data.species}</span>
              </span>
              <span className='font-medium'>
                Precisa de Rastreador:
                <span className='font-normal pl-1'>
                  {data.radioValueRastreador}
                </span>
              </span>
              <span className='font-medium'>
                Precisa de Lona:
                <span className='font-normal pl-1'>{data.radioValueLona}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='w-1/2 h-full p-5 bg-zinc-300 shadow-xl'>
          <span className='text-xl font-semibold'>
            Informações do Transporte:
          </span>
          <div className='flex h-full w-full justify-between '>
            <div className='flex flex-col w-1/2'>
              <span className='font-medium flex'>
                Veiculos:
                <div className='flex flex-wrap pl-1 gap-1'>
                  {data.veiculos.map((veiculo: string) => (
                    <span key={veiculo} className='bg-zinc-100 font-normal rounded-lg p-1 '>
                      {veiculo}
                    </span>
                  ))}
                </div>
              </span>
            </div>
            <div className='flex flex-col w-1/2 border-l pl-5'>
              <span className='font-medium flex'>
                Carrocerias:
                <div className='flex flex-wrap pl-1 gap-1'>
                  {data.carrocerias.map((carroceria: string) => (
                    <span key={carroceria} className='bg-zinc-100 font-normal rounded-lg p-1 '>
                      {carroceria}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-full p-5 bg-zinc-300 shadow-xl'>
          <span className='text-xl font-semibold'>
            Informações de Pagamento:
          </span>
          <div className='flex flex-col h-full w-full justify-between '>
            <div className='flex '>
              <div className='flex flex-col w-1/2'>
                <span className='font-medium'>
                  Valor a Pagar:
                  {data.radioValueValor == 'aCombinar' ? (
                    <span className='font-normal pl-1'>A Combinar</span>
                  ) : (
                    <span className='font-normal pl-1'>
                      R$ {data.freightPrice}/{data.valueCalculation}
                    </span>
                  )}
                </span>
                <span className='font-medium'>
                  Pedagio Incluso:
                  <span className='font-normal pl-1'>
                    {data.radioValuePedagio == 'InclusoValor' ? 'Sim' : 'Não'}
                  </span>
                </span>
                <span className='font-medium'>
                  Adiantamento:
                  <span className='font-normal pl-1'>
                    {data.advancePrice == ''
                      ? 'Não'
                      : `R$ ${data.advancePrice}`}
                  </span>
                </span>
              </div>
              <div className='flex flex-col w-1/2 border-l pl-5'>
                <span className='font-medium'>
                  Forma de Pagamento:
                  <span className='font-normal pl-1'>{data.paymentForm}</span>
                </span>
                <span className='font-medium'>
                  Plano Escolhido:
                  <span className='font-normal pl-1'>
                    {data.radioPacoteEscolhido}
                  </span>
                </span>
              </div>
            </div>
            <span className='font-medium'>
              Responsável pelo Frete:
              {responsibles.map((responsible: string) => (
                <span key={responsible} className='font-normal pl-1'>{responsible}; </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <button
        className='w-36 h-10 bg-green-500 font-black text-white rounded shadow-lg hover:bg-green-600'
        type='submit'
        form='createFreight'
        onClick={async () => {
          await postFreight(data);
          console.log('Formulario enviado com sucesso!');
        }}
      >
        Confirmar
      </button>
    </div>
  );
};

export default Page5;

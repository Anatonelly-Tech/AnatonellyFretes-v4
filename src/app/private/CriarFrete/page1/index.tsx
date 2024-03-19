// Libs

interface Page1Props {
  register: any;
  error: any;
}

import CheckBox from '@/components/CheckBox';
import InputLabel from '@/components/Input';
import ModalComponent from '@/components/Modal';
import { useEffect, useState } from 'react';
// Components
import InputRadio from '@/components/Radio';

import { FaCity } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { getAllResponsibles } from '@/services/responsibleFreight';
import LoadingForComponents from '@/components/Loading/LoadingForComponents';
import { VscAccount } from 'react-icons/vsc';
export default function Page1({ register, error }: Page1Props) {
  const [loaded, setLoaded] = useState(false);

  const [responsaveisFrete, setResponsaveisFrete] = useState([]);
  useEffect(() => {
    const getResponsaveis = async () => {
      const responsaveis = await getAllResponsibles();
      setResponsaveisFrete(responsaveis.data.response);
    };
    getResponsaveis();
  }, [responsaveisFrete]);

  const WaitLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  };

  const tryLoading = () => {
    return loaded == false ? (
      <>
        <LoadingForComponents />
        {WaitLoad()}
      </>
    ) : (
      <div className='flex flex-col items-center justify-center'>
        <VscAccount className='text-white' size={50} />
        <span className='text-white font-bold'>
          Nenhum Funcionario Cadastrado!
        </span>
      </div>
    );
  };

  return (
    <div className='flex w-full h-full flex-col items-start justify-center gap-8 p-5'>
      <div className='w-full h-auto flex flex-col justify-center items-center gap-5'>
        <div className='flex w-full gap-4 md:flex-row xs:flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <div className='lg:w-2/3 xxs:w-full'>
            <InputLabel
              id='collectCity'
              name='collectCity'
              register={register}
              label='Cidade de Coleta'
              icon={<FaCity className='w-8' />}
              isRequired={true}
              placeholder='Ex. São Paulo - SP'
            />
            <span className='text-sm flex text-red-500 font-bold'>
              {error.collectCity?.message}
            </span>
          </div>

          <div className='lg:w-1/3 xxs:w-full'>
            <InputLabel
              isRequired={true}
              id='collectDate'
              name='collectDate'
              register={register}
              type='date'
              label='Data de Coleta'
              icon={<MdDateRange className='w-8' />}
              placeholder='DD/MM/AAAA'
            />
            <span className='text-sm flex text-red-500 font-bold'>
              {error.collectDate?.message}
            </span>
          </div>
        </div>
        <div className='flex w-full gap-4 md:flex-row xs:flex-col  bg-zinc-300 shadow-md p-2 rounded'>
          <div className='lg:w-2/3 xxs:w-full'>
            <InputLabel
              isRequired={true}
              id='deliveryCity'
              name='deliveryCity'
              register={register}
              label='Cidade de Entrega'
              icon={<FaCity className='w-8' />}
              placeholder='Ex. Rio de Janeiro - RJ'
            />
            <span className='text-sm flex text-red-500 font-bold'>
              {error.deliveryCity?.message}
            </span>
          </div>
          <div className='lg:w-1/3 xxs:w-full'>
            <InputLabel
              id='deliveryDate'
              name='deliveryDate'
              register={register}
              type='date'
              label='Data de Entrega'
              isRequired={true}
              icon={<MdDateRange className='w-8' />}
              placeholder='DD/MM/AAAA'
            />
            <span className='text-sm flex text-red-500 font-bold'>
              {error.deliveryDate?.message}
            </span>
          </div>
        </div>
      </div>
      <div className='flex md:flex-row xs:flex-col w-full sm:h-auto gap-5'>
        <div className=' w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded'>
          <div className='w-auto h-auto p-2 flex flex-col gap-2'>
            <div className='w-4/5  flex flex-col gap-2'>
              <div className='flex flex-col'>
                <span className='font-bold text-lg '>
                  Responsável pelo Frete*
                </span>
                <span className='text-sm font-semibold'>
                  Selecione pelo menos um Responsável pelo frete
                </span>
              </div>
              <div>
                <ModalComponent setResponsaveisFrete={setResponsaveisFrete} />
              </div>
              <span className='text-sm flex text-red-500 font-bold'>
                {error.responsibleFreight?.message}
              </span>
            </div>

            {/* <div className="w-full">lista de responsaveis pelo frete</div> */}
            <div className='w-full h-32 grid xxs:grid-cols-1 overflow-y-auto  md:grid-cols-4 p-2 bg-gray-500 shadow-md rounded gap-4'>
              {responsaveisFrete.length > 0 ? (
                responsaveisFrete.map(
                  (
                    item: {
                      name: string;
                      phone: string;
                      idResponsible: number;
                    },
                    index: number
                  ) => {
                    return (
                      <div key={index}>
                        <CheckBox
                          label={item.name}
                          sublabel={item.phone}
                          id={item.idResponsible}
                          name={'idResponsible'}
                          register={register}
                          value={item.idResponsible}
                        />
                      </div>
                    );
                  }
                )
              ) : (
                <div className='grid col-start-1 col-end-5 py-5 w-full justify-center items-center'>
                  {tryLoading()}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start'>
          <InputRadio
            id={['Nacional', 'Internacional']}
            isRequired={true}
            label={['Nacional', 'Internacional']}
            subLabel={[
              'Fretes realizados dentro do país',
              'Fretes realizados para fora do país',
            ]}
            register={register}
            name={'radioValueLocalizacao'}
            value={['Nacional', 'Internacional']}
            title={'Localizacao do Frete'}
          />
          <span className='text-sm flex text-red-500 font-bold'>
            {error.radioValueLocalizacao?.message}
          </span>
        </div>
      </div>
    </div>
  );
}

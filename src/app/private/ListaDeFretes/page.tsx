'use client';

// Libs
import React, { useEffect, useState } from 'react';

// API
import { getAllFreight } from '@/services/formData';

// Components
import TabsComponent from '@/components/Tabs/index';
import LoadingForComponents from '@/components/Loading/LoadingForComponents';

// Icons
import { CiDeliveryTruck } from 'react-icons/ci';

const page = () => {
  const [inactiveFreights, setInactiveFreights] = useState<any>([]);
  const [activeFreights, setActiveFreights] = useState<any>([]);
  const [allFreightsLoaded, setAllFreightsLoaded] = useState([]);

  useEffect(() => {
    const getAllFreights = async () => {
      const AllFreights = await getAllFreight();

      const active: any[] = [];
      const inactive: any[] = [];

      AllFreights.data.response.forEach((item: { statusItem: boolean }) => {
        if (item.statusItem === true) {
          active.push(item);
        } else {
          inactive.push(item);
        }
      });

      setActiveFreights(active);
      setInactiveFreights(inactive);
      setAllFreightsLoaded(AllFreights.data.response);
    };

    getAllFreights();
  }, []);

  const [loaded, setLoaded] = useState(false);
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
        <div className='bg-purple-500 flex flex-col items-center p-5 rounded-lg shadow-lg shadow-gray-800 justify-center'>
          <CiDeliveryTruck className='text-white' size={50} />
          <span className='text-white font-bold'>Nenhum Frete Cadastrado!</span>
          <span className='text-white/60 font-bold text-sm'>
            Verifique a conexão com a internet!
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full h-full flex flex-col '>
      <div className='flex w-full h-full justify-between '>
        <div className='flex-1'>
          <h1 className=' absolute w-auto text-start bg-gradient-to-br from-purple-900 to-violet-900 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all'>
            Lista de
            <br /> Fretes
          </h1>
        </div>
        {allFreightsLoaded.length > 0 ? (
          <TabsComponent
            freteAtivo={activeFreights}
            freteInativo={inactiveFreights}
          />
        ) : (
          tryLoading()
        )}
        <div className='flex-1'></div>
      </div>
    </div>
  );
};

export default page;

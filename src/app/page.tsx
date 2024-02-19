'use client';

// libs

// components
import UserInfo from '@/components/UserInfo';
import AccountInformations from '@/components/AccountInformations';
import ProgressBar from '@/components/ProgressBar';
import Ranking from '@/components/Ranking';

// style
import '../styles/main.css';
import { useState } from 'react';
import { Carousel } from '@/components/Carousel';

export default function Home() {
  const [username, setUsername] = useState('Maria');

  const Sellers = [
    {
      QtdFretes: 15,
      NameSeller: 'Maria',
      photoSeller: '/img/UsersImage/Maria.png',
    },
    {
      QtdFretes: 14,
      NameSeller: 'Jefferson',
      photoSeller: '/img/UsersImage/Jefferson.png',
    },
    {
      QtdFretes: 20,
      NameSeller: 'Gabi',
      photoSeller: '/img/UsersImage/Gabi.png',
    },
    {
      QtdFretes: 25,
      NameSeller: 'Brahms',
      photoSeller: '/img/UsersImage/Brahms.png',
    },
    {
      QtdFretes: 2,
      NameSeller: 'Laion',
      photoSeller: '/img/UsersImage/Laion.png',
    },
  ];

  const sortedSellers = [...Sellers].sort((a, b) => b.QtdFretes - a.QtdFretes);

  function Placing(index: number) {
    return `${index + 1}º`;
  }

  return (
    <div className='w-full h-full flex '>
      {/* esquerda */}
      <div className='w-1/5 flex flex-col h-full py-2 items-center justify-center gap-5'>
        <UserInfo
          username={username}
          role={'Admin'}
          plan={'Prata'}
          invoice={150.0}
        />
        <AccountInformations
          title={'Quantidade Fretes Realizados'}
          result={'15 Fretes'}
        />
        <AccountInformations title={'Valor Economizado'} result={'R$150,00'} />
        <ProgressBar />
      </div>
      {/* meio */}
      <div className='w-3/5 h-full flex flex-col py-28 text-white'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold text-center'>
            Seja Bem Vindo(a) {username}
          </h1>

          <div>
            <span className='text-2xl'>Informações do dia</span>
            <hr className='border-zinc-400 w-56 border-2' />
          </div>
          <div className=' flex justify-between gap-5'>
            <div className='bg-zinc-300/45 w-1/2 h-64'></div>
            <div className='bg-zinc-300/45 w-1/2 h-64'>
              <h1>Meus Fretes</h1>
            </div>
          </div>

          <div>
            <span className='text-2xl'>Publicidade</span>
            <hr className='border-zinc-400 w-36 border-2' />
          </div>
          <div className=' w-full'>
            <Carousel />
          </div>
        </div>
      </div>
      {/* direita */}
      <div className='w-1/5 h-full flex flex-col '>
        <div className=' flex flex-col items-center p-6'>
          <h1 className='text-white text-2xl font-bold text-left'>
            Rankings da Semana
          </h1>
          <hr className='w-full items-center' />
          <div className='flex flex-col w-full items-start'>
            {sortedSellers.map((seller, index) => (
              <Ranking
                key={index}
                QtdFretes={seller.QtdFretes}
                NameSeller={seller.NameSeller}
                photoSeller={seller.photoSeller}
                Placing={() => Placing(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

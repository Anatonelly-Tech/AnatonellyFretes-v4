'use client';

// libs

// components
import UserInfo from '@/components/UserInfo';
import AccountInformations from '@/components/AccountInformations';
import ProgressBar from '@/components/ProgressBar';

// style
import '../styles/main.css';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername ] = useState('Maria')


  return (
    <div className='w-full h-full flex '>
      {/* esquerda */}
      <div className='w-1/5 flex flex-col h-full py-2 items-center justify-center gap-5'>
        <UserInfo username={username} role={'Admin'} plan={'Prata'} invoice={150.00} />
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
            <span className='text-2xl'>
              Informações do dia
            </span>
              <hr className='border-zinc-400 w-56 border-2' />
          </div>
        <div className='bg-zinc-300/45 w-full h-36'></div>
        </div>
      </div>
      {/* direita */}
      <div className='w-1/5 h-full bg-yellow-500 flex flex-col '></div>
    </div>
  );
}

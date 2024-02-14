'use client';

// libs

// components
import { NavBar } from '@/components/NavBar';
import UserInfo from '@/components/UserInfo';
import AccountInformations from '@/components/AccountInformations';
import ProgressBar from '@/components/ProgressBar';

// style
import '../styles/main.css';

export default function Home() {
  return (
    <div className='w-full h-full flex '>
      <NavBar />
      {/* esquerda */}
      <div className='w-1/6 flex flex-col h-full py-2 items-center justify-center'>
        <UserInfo />
        <AccountInformations
          title={'Quantidade Fretes Realizados'}
          result={'15 Fretes'}
        />
        <AccountInformations title={'Valor Economizado'} result={'R$150,00'} />
        <ProgressBar />
      </div>
      {/* meio */}
      <div className='w-3/5 h-full bg-blue-400 flex flex-col '></div>
      {/* direita */}
      <div className='w-1/5 h-full bg-yellow-500 flex flex-col '></div>
    </div>
  );
}

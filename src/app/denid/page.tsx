import Link from 'next/link';
import { MdBlock } from 'react-icons/md';

export default function DaniedPage() {
  return (
    <div className='h-screen flex flex-col items-center  justify-center text-black'>
      <div className='flex flex-col bg-zinc-600 rounded shadow-inner shadow-black items-center justify-center p-5 h-80'>
        <MdBlock size={60} className='text-red-600' />
        <h1 className='text-3xl mb-6 font-black text-white '>
          Acesso Restrito
        </h1>
        <p className='text-base text-white  font-bold mb-10'>
          Você não tem permissão para prosseguir
        </p>
        <Link
          className='p-4 bg-red-600 hover:bg-red-700 shadow shadow-black text-slate-50 rounded'
          href='/'
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const UserInfo = () => {
  return (
    <div className='w-5/6 bg-purple-600 items-center justify-center flex pt-2 rounded-md flex-col gap-3'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Avatar.Root className='bg-white border inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle '>
          <Avatar.Image
            className='h-full w-full rounded object-cover text-black'
            src='/img/UsersImage/Maria.png'
            alt="Brahms's avatar"
          />
          <Avatar.Fallback
            className='text-purple-300 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
            delayMs={600}
          >
            MA
          </Avatar.Fallback>
        </Avatar.Root>
        <div className='flex flex-col'>
          <p className='text-white text-md font-medium'>Maria</p>
          <p className='text-white text-sm font-light'>Admin</p>
        </div>
      </div>
      <div className='pl-2 pr-2 w-11/12'>
        <hr className='border-purple-700 w-full border-[1px] pl-2 pr-2' />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-white text-sm font-medium'>Valor Fatura: R$ 00,00</p>
        <p className='text-white text-sm font-medium'>
          Plano Contratado: Prata
        </p>
      </div>
      <div className='w-full h-8 bg-purple-800 rounded-b-md'></div>
    </div>
  );
};

export default UserInfo;

import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface UserInfoProps {
  username: string;
  role: string;
  plan: string;
  invoice: number;
}

const UserInfo = ({ username, role, plan, invoice }: UserInfoProps) => {
  return (
    <div className='w-5/6 bg-purple-600 items-center justify-center flex pt-2 rounded-md flex-col gap-3'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Avatar.Root className='bg-white border inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle '>
          <Avatar.Image
            className='h-full w-full rounded object-cover text-black'
            src='/img/UsersImage/Maria.png'
            alt={`${username}'s profile picture`}
          />
          <Avatar.Fallback
            className='text-purple-300 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
            delayMs={600}
          >
            {username.charAt(0).toUpperCase() +
              username.charAt(1).toUpperCase()}
          </Avatar.Fallback>
        </Avatar.Root>
        <div className='flex flex-col'>
          <p className='text-white text-md font-medium'>{username}</p>
          <p className='text-white text-sm font-light'>{role}</p>
        </div>
      </div>
      <div className='pl-2 pr-2 w-11/12'>
        <hr className='border-purple-700 w-full border-[1px] pl-2 pr-2' />
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-white text-sm font-medium'>
          Valor Fatura: R$ {invoice.toFixed(2).replace('.', ',')}
        </p>
        <p className='text-white text-sm font-medium'>
          Plano Contratado: {plan}
        </p>
      </div>
      <div className='w-full h-8 bg-purple-800 rounded-b-md'></div>
    </div>
  );
};

export default UserInfo;

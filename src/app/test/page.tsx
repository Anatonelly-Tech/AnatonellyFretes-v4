'use client';
import '@/styles/main.css';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ModalComponent from '@/components/Modal';
import { PlusCircledIcon } from '@radix-ui/react-icons';

const page = () => {
  return (
    <div className='p-5 gap-5 h-full flex '>
      <Dialog.Root>
        <Dialog.Trigger className='w-50 h-8 p-2 items-center justify-center gap-1 bg-violet-500 rounded-sm flex flex-row leading-none hover:bg-violet-600 text-gray-100 shadow-md shadow-black/30 font-black'>
          <PlusCircledIcon />
          Adicionar Funcionario
        </Dialog.Trigger>
        <ModalComponent />
      </Dialog.Root>
    </div>
  );
};

export default page;

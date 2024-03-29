'use client';

// Libs
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ModalComponentInside from './inside';

// Documentação da lib
// https://www.radix-ui.com/primitives/docs/components/dialog

// Icons
import { PlusCircledIcon } from '@radix-ui/react-icons';

const ModalComponent = ({ setResponsaveisFrete, session }: any) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='h-12 p-2 items-center justify-center gap-1 bg-gray-500 rounded-sm flex flex-row leading-none hover:bg-gray-600 text-gray-100 shadow-md shadow-black/30 font-black'>
        <PlusCircledIcon />
        Adicionar Funcionario
      </Dialog.Trigger>
      <ModalComponentInside
        setResponsaveisFrete={setResponsaveisFrete}
        session={session}
      />
    </Dialog.Root>
  );
};

export default ModalComponent;

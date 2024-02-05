'use client';
import '@/styles/main.css';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ModalComponent from '@/components/Modal';
import { PersonIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import InputLabel from '@/components/Input/InputLabel';
import SelectComponent from '@/components/Select';
import RadioGroupComponent from '@/components/Radio';

const page = () => {
  return (
    <div className='p-5 gap-5 h-full flex '>
      <InputLabel
        id='nome'
        placeholder='teste'
        label='Nome Completo'
        icon={<PersonIcon className='w-8 h8 text-white' />}
      />

      <SelectComponent
        placeholder='Test'
        title='test'
        value={['test', 'test2']}
        options={['test', 'teste2']}
      />

      <Dialog.Root>
        <Dialog.Trigger className='w-50 h-8 p-2 items-center justify-center gap-1 bg-violet-500 rounded-sm flex flex-row leading-none hover:bg-violet-600 text-gray-100 shadow-md shadow-black/30 font-black'>
          <PlusCircledIcon />
          Adicionar Funcionario
        </Dialog.Trigger>
        <ModalComponent />
      </Dialog.Root>

      <RadioGroupComponent
        title='test'
        value={['1', '2']}
        id={['1', '2']}
        label={['1', '2']}
        subLabel={[
          'teste descrição 1.',
          'teste descrição 2.',
        ]}
      />
    </div>
  );
};

export default page;

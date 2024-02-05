'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Input from '@/components/Input';
import React from 'react';
import InputLabel from '../Input/InputLabel';
import { PersonIcon } from '@radix-ui/react-icons';
import { FaPhoneAlt, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import SelectComponent from '../Select';
import { TbDeviceMobileMessage } from 'react-icons/tb';

const ModalComponent = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed ' />
      <Dialog.Content className='fixed bg-zinc-300 h-full p-8 text-white top-0 right-0 w-64 px-3 shadow-lg shadow-black/25'>
        <div>
          <InputLabel
            id='nome'
            placeholder='Nome completo do usuário'
            label='Nome Completo'
            icon={<PersonIcon className='w-8' />}
            required
          />
          <InputLabel
            id='cpf'
            placeholder='000.000.000-00'
            label='CPF'
            icon={<FaRegAddressCard className='w-8' />}
            required
          />
          <InputLabel
            id='email'
            placeholder='mail@mail.com'
            label='E-mail'
            icon={<MdOutlineMailOutline className='w-8' />}
            required
          />
          <InputLabel
            id='phone'
            placeholder='(XX) 00000-0000'
            label='Telefone'
            icon={<FaPhoneAlt className='w-8' />}
            required
          />
        </div>
        <div>
          <SelectComponent
            label='Forma de contato*'
            icon={<TbDeviceMobileMessage className='w-8 h-5  text-white' />}
            placeholder='Selecione uma opção*'
            title='Forma de contato'
            value={['onlyCall', 'callAndWhatsapp']}
            options={['Somente Ligação', 'Ligação e Whatsapp']}
          />
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ModalComponent;

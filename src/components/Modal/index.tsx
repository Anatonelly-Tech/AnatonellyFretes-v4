'use client';
//libs
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FaPhoneAlt, FaRegAddressCard } from 'react-icons/fa';
import { PersonIcon } from '@radix-ui/react-icons';
import { MdOutlineMailOutline } from 'react-icons/md';
import { TbDeviceMobileMessage } from 'react-icons/tb';

//components
import InputLabel from '../Input/InputLabel';
import SelectComponent from '../Select';
import RadioGroupComponent from '../Radio';

const ModalComponent = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed ' />
      <Dialog.Content className='fixed bg-zinc-300 h-full p-8 text-white top-0 right-0 w-1/3 px-3 shadow-lg shadow-black/25'>
        <div>
          <InputLabel
            id='name'
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
            mask='999.999.999-99'
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
            mask='(99) 99999-9999'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <SelectComponent
            label='Forma de contato'
            icon={<TbDeviceMobileMessage className='w-8 h-5  text-white' />}
            placeholder='Selecione uma opção'
            title='Forma de contato'
            value={['onlyCall', 'callAndWhatsapp']}
            options={['Somente Ligação', 'Ligação e Whatsapp']}
          />
          <RadioGroupComponent
            title='Nível de acesso'
            value={['Administrador', 'Colaborador']}
            id={['Administrador', 'Colaborador']}
            label={['Administrador', 'Colaborador']}
            subLabel={[
              'Pode adicionar, editar e excluir os dados de qualquer usuário.',
              'Pode editar os próprios dados, exceto nome, e-mail e nível de acesso.',
            ]}
          />
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ModalComponent;

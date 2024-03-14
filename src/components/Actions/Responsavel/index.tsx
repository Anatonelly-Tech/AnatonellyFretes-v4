import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FaRegEye, FaTrashAlt } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {
  deleteResponsible,
  getResponsibleById,
  putResponsible,
} from '@/services/responsibleFreight';
import { removeRespByUserEmail } from '@/services/user';
import { useSession } from 'next-auth/react';

const ActionResponsible = ({ idResponsible }: number) => {
  const customColors = ['#15803d', '#a16207', '#22c55e', '#fbbf24', '#dc2626'];
  const { data: session } = useSession();

  return (
    <div className='flex h-full w-full items-center justify-center gap-1'>
      <Tooltip title='Exibir Frete' arrow>
        <Button
          size='small'
          id='GET'
          onClick={async () => {
            const data = await getResponsibleById(idResponsible);
            console.log(data.data.response);
          }}
          style={{
            backgroundColor: customColors[0],
            color: 'white',
          }}
        >
          <FaRegEye className='text-lg font-bold' />
        </Button>
      </Tooltip>

      <Tooltip title='Editar Frete' arrow>
        <Button
          size='small'
          id='PUT'
          onClick={async () => {
            const data = await getResponsibleById(idResponsible);
            console.log(data.data.response);
            // edit freight
            // primeiro campo id segundo campo objeto
            // putResponsible(idResponsible, { data });
          }}
          style={{ backgroundColor: customColors[1], color: 'white' }}
        >
          <CiEdit className='text-lg font-black text-white' />
        </Button>
      </Tooltip>

      <Tooltip title='Remover Frete' arrow>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button
              size='small'
              id='ChangeStatus'
              style={{ backgroundColor: customColors[4], color: 'white' }}
            >
              <FaTrashAlt className='text-lg font-bold text-white' />
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className='bg-black/60 fixed inset-0' />
            <AlertDialog.Content className=' fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]  '>
              <AlertDialog.Title className='font-bold text-lg'>
                Você Realmente Quer Apagar Este Usuário?
              </AlertDialog.Title>
              <AlertDialog.Description className='font-semibold mb-10'>
                Após a exclusão, não será possível recuperar os dados.
              </AlertDialog.Description>
              <div className='flex w-full gap-5 justify-end items-center'>
                <AlertDialog.Cancel asChild>
                  <button className='bg-black/60 text-white font-bold w-full h-8 rounded hover:bg-black/70'>
                    Cancelar
                  </button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <button
                    onClick={
                      async () => {
                        await deleteResponsible(idResponsible);
                        await removeRespByUserEmail(
                          session.user.email,
                          idResponsible
                        );
                      } /* remove freight*/
                    }
                    className='bg-red-500 text-white font-bold w-28 h-8 rounded hover:bg-red-600'
                  >
                    Apagar
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </Tooltip>
    </div>
  );
};

export default ActionResponsible;

'use client';

import DaniedPage from '@/app/denid/page';
import ActionResponsible from '@/components/Actions/Responsavel';
import ModalComponent from '@/components/Modal';
import { getUserByEmail } from '@/services/user';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState([]);

  const { data: session } = useSession();
  useEffect(() => {
    const getResponsaveis = async () => {
      setResponsaveisFrete([]);
      const responsaveis = await getUserByEmail(session.user.email);
      setResponsaveisFrete(responsaveis.data.response.employees);
    };
    getResponsaveis();
  }, [session]);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Asc');
  if (session) {
    return (
      <div className='flex flex-col w-full gap-2 p-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3 justify-between h-auto'>
            <div className='flex gap-5'>
              <div className='flex items-center justify-center  shadow-md '>
                <input
                  className='p-2 rounded-l w-56 text-black bg-white focus:outline-0'
                  type='text'
                  name='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Pesquisar'
                />
                <label
                  htmlFor='search'
                  className='text-gray-400 p-2 rounded-r h-10 bg-white'
                >
                  <CiSearch size={20} />
                </label>
              </div>
              <div className='flex text-white gap-5 font-bold'>
                <button
                  className='bg-purple-400 p-2 rounded w-auto h-auto'
                  onClick={() => setSort('Asc')}
                >
                  ^
                </button>
                <button
                  className='bg-purple-400 p-2 rounded w-auto h-auto'
                  onClick={() => setSort('Desc')}
                >
                  v
                </button>
              </div>
              <ModalComponent
                setResponsaveisFrete={setResponsaveisFrete}
                session={session}
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-1 bg-purple-600 rounded-full w-20 h-20 shadow-lg shadow-purple-900 p-3 text-white'>
              <FaRegUser size={20} />
              {responsaveisFrete.length > 10 ? (
                <span className='font-bold  text-lg'>
                  <span className='font-bold text-red-500 text-lg'>
                    {responsaveisFrete.length}
                  </span>
                  /10
                </span>
              ) : (
                <span className='font-bold text-lg'>
                  {responsaveisFrete.length}/10
                </span>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            {responsaveisFrete
              .sort((a, b) =>
                sort === 'Asc'
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name)
              )
              .filter(
                (resp) =>
                  resp.phone.includes(search) ||
                  resp.name.toLowerCase().includes(search.toLowerCase()) ||
                  resp.email.toLowerCase().includes(search.toLowerCase()) ||
                  resp.department.toLowerCase().includes(search.toLowerCase())
              )
              .map((resp) => (
                <div className='flex w-full max-w-full bg-gray-100 gap-3 p-3 rounded shadow-lg shadow-black'>
                  <div className='flex w-1/4 flex-col items-center justify-center border-r-gray-300 pr-2 border-r-2'>
                    <p className='font-bold'>{resp.name}</p>
                    <p>{resp.email}</p>
                  </div>
                  <div className='flex w-1/4 flex-col items-center justify-center  border-r-gray-300 pr-2 border-r-2'>
                    <p className='font-bold'>{resp.department}</p>
                    <p>{resp.phone}</p>
                  </div>
                  <div className='flex w-1/4 flex-col items-center justify-center  border-r-gray-300 pr-2 border-r-2'>
                    <p className='font-bold'>
                      {resp.role == 'Admin' ? 'Admin' : 'Colaborador'}
                    </p>
                  </div>
                  <div className='w-1/4 flex'>
                    <ActionResponsible idResponsible={resp.idResponsible} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  return <DaniedPage />;
};

export default page;

'use client';

import ActionResponsible from '@/components/Actions/Responsavel';
import { getAllResponsibles } from '@/services/responsibleFreight';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState([]);
  useEffect(() => {
    const getResponsaveis = async () => {
      const responsaveis = await getAllResponsibles();
      setResponsaveisFrete(responsaveis.data.response);
    };
    getResponsaveis();
  }, []);
  console.log(responsaveisFrete);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Asc');

  return (
    <div className='flex flex-col gap-2 p-5'>
      <div className=' flex text-white items-center justify-center w-64 h-auto bg-purple-500 flex-col rounded p-10 gap-5 shadow-inner shadow-purple-950 '>
        <p className='font-bold text-xl text-center'>
          Quantidade De Usuarios Cadastrados
        </p>
        <div className='flex flex-col items-center justify-center gap-1 bg-purple-600 rounded-full w-2/5 h-full shadow-lg shadow-purple-900 p-3'>
          <FaRegUser size={20} />
          <span className='font-bold text-lg'>
            {responsaveisFrete.length}/10
          </span>
        </div>
      </div>
      <div>
        <div className='flex flex-col gap-5'>

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
              <label htmlFor="search" className='text-gray-400 p-2 rounded-r h-10 bg-white'>
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
                  resp.phone.toLowerCase().includes(search.toLowerCase()) ||
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
                      {resp.isAdmin == true ? 'Administrador' : 'Colaborador'}
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
    </div>
  );
};

export default page;

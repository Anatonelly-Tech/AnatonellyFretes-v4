'use client';
import '@/styles/main.css';

import React from 'react';
import ModalComponent from '@/components/Modal';
import Loading  from '@/components/Loading';

const page = () => {
  return (
    <div className='p-5 gap-5 h-full flex '>
      <ModalComponent />
      <Loading/>
    </div>
  );
};

export default page;

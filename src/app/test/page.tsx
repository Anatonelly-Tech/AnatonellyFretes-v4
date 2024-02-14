'use client';
import '@/styles/main.css';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ModalComponent from '@/components/Modal';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { NavBar } from '@/components/NavBar';

const page = () => {
  return (
    <div className='p-5 gap-5 h-full flex '>
      <NavBar />
      <ModalComponent />
    </div>
  );
};

export default page;

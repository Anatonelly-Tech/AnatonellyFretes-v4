'use client';
import React, { useState } from 'react';

import AdvancedPages from '@/components/AdvancedPages';
import StepperComponent from '@/components/Stepper';
import Page1 from './page1';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { VscChevronRight } from 'react-icons/vsc';
import { VscChevronLeft } from 'react-icons/vsc';

const page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { register, control } = useForm();

  const prevStep = () => {
    const actualStep = activeStep - 1;
    return setActiveStep(actualStep);
  };
  const nextStep = () => {
    const actualStep = activeStep + 1;
    return setActiveStep(actualStep);
  };

  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <DevTool control={control} />

      <h1 className='bg-gradient-to-br from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all'>
        Meus <br /> Fretes
      </h1>
      <div className='bg-zinc-400 w-[80%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-5'>
        <StepperComponent
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
        <form action=''>
          <AdvancedPages register={register} activeStep={activeStep} />
        </form>
      </div>
      <div className='w-full h-15 items-center flex justify-around mb-14'>
        <button
          onClick={prevStep}
          className='w-10 h-10 bg-violet-600 shadow-especial shadow-violet-950 hover:bg-violet-800 hover:shadow-zinc-800 justify-center items-center rounded-full flex font-bold'
        >
          <VscChevronLeft size={50} className='text-white text-xl' />
        </button>
        <button
          onClick={nextStep}
          className='w-10 h-10 bg-violet-600 shadow-especial shadow-violet-950 hover:bg-violet-800 hover:shadow-zinc-800 justify-center items-center rounded-full  flex font-bold'
        >
          <VscChevronRight size={50} className='text-white text-xl' />
        </button>
      </div>
    </div>
  );
};

export default page;
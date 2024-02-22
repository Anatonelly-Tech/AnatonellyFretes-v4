'use client';
import React, { useState } from 'react';

import AdvancedPages from '@/components/AdvancedPages';
import StepperComponent from '@/components/Stepper';

const page = () => {
  const [activeStep, setActiveStep] = useState(0);

  const prevStep = () => {
    const actualStep = activeStep - 1;
    return setActiveStep(actualStep);
  };
  const nextStep = () => {
    const actualStep = activeStep + 1;
    return setActiveStep(actualStep);
  };

  return (
    <div className='w-full h-full'>
      <h1 className='bg-gradient-to-br from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all'>
        Meus <br /> Fretes
      </h1>
      <div className='bg-zinc-500 w-[80%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded'>
        <StepperComponent
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
        <form action=''></form>
        <button
          onClick={nextStep}
          className='w-20 h-5 bg-green-300 justify-center items-center rounded p-4 flex font-bold'
        >
          Next
        </button>
        <button
          onClick={prevStep}
          className='w-20 h-5 bg-red-300 justify-center items-center rounded p-4 flex font-bold'
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default page;

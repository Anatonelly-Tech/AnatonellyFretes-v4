'use client';
// Libs
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

// Components
import AdvancedPages from '@/components/AdvancedPages';
import StepperComponent from '@/components/Stepper';

// Utils
import { createFreightValidationSchema } from '@/utils/createFreightValidation';

// Icons
import { VscChevronRight } from 'react-icons/vsc';
import { VscChevronLeft } from 'react-icons/vsc';
import { Alert } from '@mui/material';

// Interface
interface State extends SnackbarOrigin {
  open: boolean;
}

const page = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [activeStep, setActiveStep] = useState(3);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(createFreightValidationSchema),
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data);
    //manda para o db
    setState({ vertical: 'bottom', horizontal: 'left', open: true });
  };

  const prevStep = () => {
    const actualStep = activeStep - 1;
    return setActiveStep(actualStep);
  };

  const nextStep = () => {
    let actualStep = activeStep;
    // page1
    if (activeStep == 0) {
      if (
        touchedFields.collectCity == true &&
        touchedFields.collectDate == true &&
        touchedFields.deliveryCity == true &&
        touchedFields.deliveryDate == true &&
        touchedFields.radioValueLocalizacao == true
      ) {
        setState({ vertical: 'bottom', horizontal: 'left', open: false });
  
        if (
          errors.collectCity == undefined &&
          errors.collectDate == undefined &&
          errors.deliveryCity == undefined &&
          errors.deliveryDate == undefined &&
          errors.radioValueLocalizacao == undefined
        ) {
          actualStep = activeStep + 1;
        }
      } else {
        setState({ vertical: 'bottom', horizontal: 'left', open: true });
      }
    }
    // page2
    if (activeStep == 1) {
      if (
        touchedFields.product == true &&
        touchedFields.species == true &&
        touchedFields.weight == true &&
        touchedFields.unitMeasurement == true &&
        touchedFields.radioValueTipoCarga == true &&
        touchedFields.radioValueRastreador == true &&
        touchedFields.radioValueLona == true 
      ) {
        setState({ vertical: 'bottom', horizontal: 'left', open: false });
  
        if (
          errors.product == undefined &&
          errors.species == undefined &&
          errors.weight == undefined &&
          errors.unitMeasurement == undefined &&
          errors.radioValueTipoCarga == undefined &&
          errors.radioValueLona == undefined &&
          errors.radioValueRastreador == undefined
        ) {
          actualStep = activeStep + 1;
        }
      } else {
        setState({ vertical: 'bottom', horizontal: 'left', open: true });
      }
    }
    // page3
    if (activeStep == 2) {
      actualStep = activeStep + 1;
    }

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
        <form
          action=''
          onSubmit={handleSubmit(onSubmit)}
          id='createFreight'
          className='w-full h-auto flex items-center justify-center'
        >
          <AdvancedPages
            error={errors}
            register={register}
            activeStep={activeStep}
          />
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={10000}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity='error'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Preencha todos os campos obrigatórios!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default page;

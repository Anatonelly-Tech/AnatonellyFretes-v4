"use client";
// Libs
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

// Components
import AdvancedPages from "@/components/AdvancedPages";
import StepperComponent from "@/components/Stepper";

// Utils
import { createFreightValidationSchema } from '@/utils/createFreightValidation';
import { RandomFormName } from '@/utils/randomFormName';
// Icons
import { VscChevronRight } from 'react-icons/vsc';
import { VscChevronLeft } from 'react-icons/vsc';
import { Alert } from '@mui/material';
import { postFreight } from '@/services/formData';

// Interface
interface State extends SnackbarOrigin {
  open: boolean;
}

const page = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: { idResponsible: [], veiculos: [], carrocerias: [] },
    resolver: yupResolver(createFreightValidationSchema),
    mode: 'all',
  });

  const [data, setData] = useState({});

  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const [bgRightButton, setBgRightButton] = useState('bg-violet-600');

  const [hoverBgRightButton, setHoverBgRightButton] = useState(
    'hover:bg-violet-800'
  );

  const [shadowRightButton, setShadowRightButton] =
    useState('shadow-violet-950');

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [activeStep, setActiveStep] = useState(0);

  const prevStep = () => {
    const actualStep = activeStep - 1;

    if (activeStep == 4) {
      setBgRightButton('bg-violet-600');
      setHoverBgRightButton('hover:bg-violet-800');
      setShadowRightButton('shadow-violet-950');
    }

    return setActiveStep(actualStep);
  };

  const nextStep = async () => {
    let actualStep = activeStep;
    // console.log(RandomFormName());

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
          errors.idResponsible == undefined &&
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
      if (touchedFields.veiculos == true && touchedFields.carrocerias == true) {
        if (errors.veiculos == undefined && errors.carrocerias == undefined) {
          actualStep = activeStep + 1;
        }
      } else {
        setState({ vertical: 'bottom', horizontal: 'left', open: true });
      }
    }

    if (activeStep == 3) {
      if (
        touchedFields.radioValueValor == true &&
        touchedFields.radioValuePedagio == true &&
        touchedFields.freightPrice == true &&
        touchedFields.valueCalculation == true &&
        touchedFields.paymentForm == true &&
        touchedFields.radioPacoteEscolhido == true
      ) {
        setState({ vertical: 'bottom', horizontal: 'left', open: false });

        if (
          errors.radioValueValor == undefined &&
          errors.radioValuePedagio == undefined &&
          errors.freightPrice == undefined &&
          errors.valueCalculation == undefined &&
          errors.paymentForm == undefined &&
          errors.radioPacoteEscolhido == undefined
        ) {
          actualStep = activeStep + 1;

          setBgRightButton('bg-gray-500');
          setHoverBgRightButton('hover:bg-gray-700');
          setShadowRightButton('');
          setValue('name', await RandomFormName());
          setData(getValues());
        }
      } else {
        setState({ vertical: 'bottom', horizontal: 'left', open: true });
      }
    }

    return setActiveStep(actualStep);
  };

  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <h1 className='bg-gradient-to-br from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all'>
        Meus <br /> Fretes
      </h1>

      <div className='bg-zinc-400 w-[80%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-5'>
        <StepperComponent
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
        <form
          action=''
          id='createFreight'
          className='w-full h-auto flex items-center justify-center'
        >
          <AdvancedPages
            error={errors}
            register={register}
            activeStep={activeStep}
            data={data}
          />
        </form>
      </div>
      <div className="w-full h-15 items-center flex justify-around mb-14">
        <button
          onClick={prevStep}
          className="w-10 h-10 bg-violet-600 shadow-especial shadow-violet-950 hover:bg-violet-800 hover:shadow-zinc-800 justify-center items-center rounded-full flex font-bold"
        >
          <VscChevronLeft size={50} className="text-white text-xl" />
        </button>
        <button
          onClick={nextStep}
          className={`w-10 h-10 shadow-especial ${shadowRightButton} ${bgRightButton} ${hoverBgRightButton} hover:shadow-zinc-800 justify-center items-center rounded-full  flex font-bold`}
        >
          <VscChevronRight size={50} className="text-white text-xl" />
        </button>
      </div>
      {/* <Snackbar
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
      </Snackbar> */}
    </div>
  );
};

export default page;

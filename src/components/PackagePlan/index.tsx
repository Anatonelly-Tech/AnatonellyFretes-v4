import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PackagePlanProps {
  Title: string;
  beneficios: string[];
  setVisibleBenefits: React.Dispatch<React.SetStateAction<string[]>>;
  accordionOpen: boolean;
  register: any;
  error: any;
}

const beneficiosPlan1 = [
  'Beneficio 1',
  'Beneficio 2',
  'Beneficio 3',
  'Beneficio 4',
  'Beneficio 5',
];
const beneficiosPlan2 = [
  'Beneficio 5',
  'Beneficio 4',
  'Beneficio 3',
  'Beneficio 2',
  'Beneficio 1',
];
const PackagePlan = ({ register, error }: any) => {
  const [visibleBenefits1, setVisibleBenefits1] = useState<string[]>([]);
  const [visibleBenefits2, setVisibleBenefits2] = useState<string[]>([]);
  const [accordionOpen1, setAccordionOpen1] = useState<boolean>(false);
  const [accordionOpen2, setAccordionOpen2] = useState<boolean>(false);
  const createPlan = ({
    Title,
    beneficios,
    setVisibleBenefits,
    accordionOpen,
    register,
    error,
  }: PackagePlanProps) => (
    <div className='rounded w-full h-auto bg-zinc-300 flex flex-col gap-3 p-2'>
      <div className='flex w-full h-auto'>
        <label
          className='relative flex items-start p-3 rounded-full cursor-pointer'
          htmlFor={Title}
        >
          <input
            name='radioPacoteEscolhido'
            type='radio'
            {...register('radioPacoteEscolhido')}
            className="appearance-none focus:outline-none before:content[''] peer relative h-5 w-5 cursor-pointer outline-none rounded-full border border-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id={Title}
            value={Title}
          />
          <span className=' text-gray-900 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 relative -translate-x-[17px] translate-y-[3px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3.5 w-3.5'
              viewBox='0 0 16 16'
              fill='currentColor'
            >
              <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
            </svg>
          </span>
        </label>
        <label
          className='w-full mt-px font-light text-gray-700 cursor-pointer select-none'
          htmlFor={Title}
        >
          <Accordion
            className='rounded w-full bg-zinc-800 text-zinc-200'
            disableGutters
            expanded={accordionOpen}
            onChange={(event, isExpanded) => {
              if (Title === 'Plano 1') {
                setAccordionOpen1(isExpanded);
              } else if (Title === 'Plano 2') {
                setAccordionOpen2(isExpanded);
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='text-white' />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              {Title}
            </AccordionSummary>
            <AccordionDetails className='h-40 px-10 pb-6 m-0'>
              {beneficios.map((beneficio, index) => (
                <p className='animate-MoveLeft' key={index}>
                  {beneficio}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
        </label>
      </div>
    </div>
  );

  useEffect(() => {
    const timeout = 200; // Tempo limite entre a exibição de cada benefício em milissegundos

    const showBenefitsWithTimeout = async (
      beneficios: string[],
      setVisibleBenefits: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
      for (let i = 0; i < beneficios.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, timeout));
        setVisibleBenefits((prevBenefits) => {
          if (!prevBenefits.includes(beneficios[i])) {
            return [...prevBenefits, beneficios[i]];
          }
          return prevBenefits;
        });
      }
    };

    if (accordionOpen1) {
      setVisibleBenefits1([]);
      showBenefitsWithTimeout(beneficiosPlan1, setVisibleBenefits1);
    }

    if (accordionOpen2) {
      setVisibleBenefits2([]);
      showBenefitsWithTimeout(beneficiosPlan2, setVisibleBenefits2);
    }
  }, [accordionOpen1, accordionOpen2]); // Dependências ajustadas para ambos os accordions

  return (
    <div className='flex flex-col items-start justify-center gap-2 w-full p-5'>
      <div className='flex  w-full gap-2'>
        {createPlan({
          Title: 'Plano 1',
          beneficios: visibleBenefits1,
          setVisibleBenefits: setVisibleBenefits1,
          accordionOpen: accordionOpen1,
          register: register,
          error: error,
        })}
        {createPlan({
          Title: 'Plano 2',
          beneficios: visibleBenefits2,
          setVisibleBenefits: setVisibleBenefits2,
          accordionOpen: accordionOpen2,
          register: register,
          error: error,
        })}
      </div>
      <span className='text-sm flex text-red-500 font-bold'>
        {error.radioPacoteEscolhido?.message}
      </span>
    </div>
  );
};

export default PackagePlan;

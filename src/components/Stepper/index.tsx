import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Page1 from '@/app/CriarFrete/page1';

const steps = [
  'Primeira Página',
  'Segunda Página',
  'Terceira Página',
];
interface StepperProps {
  activeStep: number;
  setActiveStep:any
}

export default function StepperComponent({ activeStep,setActiveStep }: StepperProps) {

  if (activeStep < 0) {
    setActiveStep(0)
  } 
  if (activeStep > steps.length - 1) {
    setActiveStep(steps.length)
  } 

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface RadioGroupProps {
  title: string;
  value: string[];
  id: string[];
  label: string[];
  subLabel: string[];
}

const RadioGroupComponent = ({
  title,
  value,
  id,
  label,
  subLabel,
}: RadioGroupProps) => {
  return (
    <div className='text-black flex flex-col items-start justify-center'>
      <span className='text-sm text-black font-medium'>{title}*</span>
      <RadioGroup.Root required className=' flex flex-col gap-2  items-start'>
        {value.map((item, index) => (
          <div className='flex  justify-center items-center gap-2' key={index}>
            <RadioGroup.Item
              value={item}
              id={id[index]}
              className='bg-gray-500 w-6 h-6 rounded-full shadow-sm shadow-black hover:bg-black/65 outline-none cursor-default'
            >
              <RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-white' />
            </RadioGroup.Item>
            <div className='flex flex-col'>
              <label htmlFor={id[index]}> {label[index]}</label>
              <label className='text-xs text-zinc-500' htmlFor={id[index]}>
                {' '}
                {subLabel[index]}
              </label>
            </div>
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
};

export default RadioGroupComponent;

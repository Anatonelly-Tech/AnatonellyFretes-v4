import React from 'react';

interface RadioProps {
  id: string[];
  label: string[];
  subLabel: string[];
  register: any;
  name?: string;
  value: string[];
  title: string;
}

const InputRadio = ({
  title,
  value,
  id,
  label,
  subLabel,
  register,
  name,
}: RadioProps) => {
  return (
    <div className='text-black flex flex-col items-start justify-center gap-1'>
      <span className='text-sm text-black font-medium'>{title}*</span>
      {value.map((item, index) => (
        <div
          className='flex items-center justify-center '
          title={subLabel[index]}
        >
          <div className='flex items-center h-5'>
            <input
              {...register(name)}
              id={id[index]}
              type='radio'
              value={item}
              className='w-5 h-5 text-blue-600 bg-gray-800 border-gray-800 focus:ring-blue-500 focus:ring-2'
            />
          </div>
          <div className='ms-2 text-sm'>
            <label htmlFor={id[index]} className='font-medium text-gray-900'>
              {label[index]}
            </label>
            <p
              id='helper-radio-text'
              className='text-xs font-normal text-black'
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputRadio;

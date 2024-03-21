// Libs
import React, { InputHTMLAttributes } from 'react';
import { useHookFormMask } from 'use-mask-input';

// Interface
interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  mask?: string;
  register: any;
  isRequired?: boolean;
}

const InputLabel = ({
  label,
  icon,
  mask,
  register,
  isRequired = false,
  ...props
}: InputLabelProps) => {
  const RegisterWithMask = useHookFormMask(register);
  const fieldRegister = mask
    ? props.name !== undefined
      ? RegisterWithMask(props.name, mask)
      : console.log('props.name is undefined')
    : register(props.name);

  if (!isRequired) {
    return (
      <div className='w-full'>
        <label className='text-sm font-medium text-black' htmlFor={props.id}>
          {label}
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 text-white rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <input
            {...fieldRegister}
            {...props}
            className='bg-zinc-900 min-w-40 p-2 rounded-r rounded-l-none  w-full text-sm placeholder:text-zinc-500 text-zinc-300 dark:[color-scheme:dark]'
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='w-full'>
        <label className='text-sm font-medium text-black' htmlFor={props.id}>
          {label}*
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 text-white rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <input
            {...fieldRegister}
            {...props}
            className='bg-zinc-900 p-2 rounded-r  rounded-l-none w-full min-w-40 text-sm placeholder:text-zinc-500 text-zinc-300 dark:[color-scheme:dark]'
          />
        </div>
      </div>
    );
  }
};

export default InputLabel;

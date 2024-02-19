// Libs
import React, { InputHTMLAttributes } from 'react';

// Interface
interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  mask?: string;
  register: any;
}

const InputLabel = ({
  label,
  icon,
  mask,
  register,
  ...props
}: InputLabelProps) => {
  if (props.required === true) {
    return (
      <div>
        <label className='text-sm font-medium text-black' htmlFor={props.id}>
          {label}*
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <input
            {...register(`${props.name}`)}
            {...props}
            className='bg-zinc-900 py-2 px-2 rounded-r w-full text-sm placeholder:text-zinc-500 text-zinc-300'
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label className='text-sm font-medium text-black' htmlFor={props.id}>
          {label}
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <input
            {...register(`${props.name}`)}
            {...props}
            className='bg-zinc-900 py-2 px-2 rounded-r w-full text-sm placeholder:text-zinc-500 text-zinc-300'
          />
        </div>
      </div>
    );
  }
};

export default InputLabel;

import React from 'react';
import Input from '@/components/Input';

interface InputLabelProps {
  id: string;
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  mask?: string;
}

const InputLabel = ({
  id,
  type = 'text',
  placeholder,
  label,
  required,
  icon,
  mask,
}: InputLabelProps) => {
  if (required === true) {
    return (
      <div>
        <label className='text-sm font-medium text-black' htmlFor={id}>
          {label}*
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <Input
            id={id}
            type={type}
            placeholder={`${placeholder}*`}
            mask={mask}
            required
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label className='text-sm font-medium text-black' htmlFor={id}>
          {label}
        </label>
        <div className='flex rounded shadow-md shadow-black/30'>
          <div className='flex py-2 rounded-l bg-gray-500 items-center justify-center'>
            {icon}
          </div>
          <Input id={id} type={type} placeholder={placeholder} mask={mask} />
        </div>
      </div>
    );
  }
};

export default InputLabel;

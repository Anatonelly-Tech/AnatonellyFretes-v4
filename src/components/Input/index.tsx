import React from 'react';
import InputMask from 'react-input-mask';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
}

const Input: React.FC<InputProps> = ({ mask, ...props }) => {
  if (mask) {
    return (
      <InputMask mask={mask} {...props}>
        {(inputProps: any) => (
          <input
            {...inputProps}
            className='bg-zinc-900 py-2 px-2 rounded-r w-full text-sm placeholder:text-zinc-500 text-zinc-300'
          />
        )}
      </InputMask>
    );
  }

  return (
    <input
      {...props}
      className='bg-zinc-900 py-2 px-2 rounded-r w-full text-sm placeholder:text-zinc-500 text-zinc-300'
    />
  );
};

export default Input;

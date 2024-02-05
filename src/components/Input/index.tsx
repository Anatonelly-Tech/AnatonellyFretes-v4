import { InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: inputProps) => {
  return (
    <input
      {...props}
      className='bg-zinc-900 py-2 px-2 rounded-r w-full text-sm placeholder:text-zinc-500 text-zinc-300'
    />
  );
};

export default Input;


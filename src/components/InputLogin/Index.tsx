// InputLogin.tsx

import React, { InputHTMLAttributes } from "react";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  register?: any;
  isRequired?: boolean;
}

const InputLogin = ({
  label,
  mask,
  register,
  isRequired = false,
  ...props
}: InputLoginProps) => {
  return (
    <div className=" p-4 rounded-lg w-full">
      <div className="relative bg-inherit">
        <input
          // {...register(props.name)}
          type="text"
          id={props.id}
          name={props.name}
          className="peer bg-transparent h-10 w-full text-gray-100 placeholder-transparent border-b-2 px-2 border-gray-200  focus:outline-none focus:border-purple-100"
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={props.name}
          className="absolute cursor-text left-0 -top-3 text-sm font-bold text-gray-100 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm transition-all"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputLogin;

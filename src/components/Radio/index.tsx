// Libs
import React from "react";

// Interface
interface RadioProps {
  id: string[];
  label: string[];
  subLabel: string[];
  name?: string;
  value: any[];
  title: string;
  isRequired?: boolean;
}

const InputRadio = ({
  title,
  value,
  id,
  label,
  subLabel,
  name,
  isRequired = false,
}: RadioProps) => {
  if (!isRequired) {
    return (
      <div className="text-black flex flex-col w-auto items-start justify-center gap-1">
        <span className="text-sm text-black font-medium">{title}</span>
        {value.map((item, index) => (
          <div
            key={index}
            className='flex items-center w-auto justify-center '
            title={subLabel[index]}
          >
            <div className="flex items-center w-auto h-5">
              <input
                id={id[index]}
                type="radio"
                value={item}
                className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-800  "
              />
            </div>
            <div className="ms-2 text-sm">
              <label htmlFor={id[index]} className="font-medium text-gray-900">
                {label[index]}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-black flex flex-col w-auto items-start justify-center gap-1">
        <span className="text-sm text-black font-medium">{title}*</span>
        {value.map((item, index) => (
          <div
            key={index}
            className='flex items-center w-auto justify-center '
            title={subLabel[index]}
          >
            <div className="flex items-center w-auto h-5">
              <input
                id={id[index]}
                type="radio"
                value={item}
                className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-800  "
              />
            </div>
            <div className="ms-2 text-sm">
              <label htmlFor={id[index]} className="font-medium text-gray-900">
                {label[index]}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default InputRadio;

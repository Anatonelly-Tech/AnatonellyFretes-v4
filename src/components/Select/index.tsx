import React from 'react';
import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

interface SelectProps {
  placeholder: string;
  title?: string;
  value: string[];
  options: string[];
  icon?: React.ReactNode;
  label?: string;
}

const SelectComponent = ({
  placeholder,
  title,
  value,
  options,
  icon,
  label,
}: SelectProps) => {
  return (
    <div className='rounded'>
      <label className='text-sm text-black font-medium'> {label}*</label>
      <Select.Root required>
        <Select.Trigger className=' rounded w-full flex items-center justify-start  gap-3 data-[placeholder]:text-zinc-500  bg-zinc-900 shadow-md shadow-black/30 text-sm text-zinc-300'>
          <div className='flex py-2 rounded-l bg-gray-500 justify-center items-start'>
            {icon}
          </div>
          <div className='flex w-full pr-2 items-center justify-between'>
            <Select.Value placeholder={`${placeholder}*`} />
            <Select.Icon className='text-zinc-500'>
              <ChevronDownIcon />
            </Select.Icon>
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className='overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
            <Select.ScrollUpButton className='flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default'>
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className='p-1'>
              <Select.Group>
                <Select.Label className='px-[25px]  leading-[25px] select-none '>
                  {title}
                </Select.Label>
                {options.map((option, index) => (
                  <Select.Item
                    key={index}
                    value={value[index]}
                    className='rounded hover:border p-1 select-none data-[highlighted]:bg-gray-200 text-sm'
                  >
                    <Select.ItemText>{option}</Select.ItemText>
                    <Select.ItemIndicator className='absolute right-0 w-[25px] inline-flex items-center justify-center translate-y-1 text-green-500'>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Separator />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectComponent;

// Libs
import React from "react";

// Icons
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Interface
interface SelectProps {
  value: string[];
  valueId: string[];
  label: string;
  id: string;
  name: string;
  placeholder: string;
}

const SelectComponent = ({
  value,
  valueId,
  label,
  id,
  name,
  placeholder,
}: SelectProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-black" htmlFor={id}>
        {label}*
      </label>
      <select
        id={id}
        className="bg-zinc-900 p-2 rounded shadow-md shaodw-black focus:outline-none focus:shadow-outline invalid:text-black text-white"
      >
        <option value="" disabled selected>
          <p className="text-zinc-500">{placeholder}</p>
        </option>
        {valueId.map((item, index) => (
          <option key={index} value={item}>
            {value[index]}
            <ChevronDownIcon />
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckBoxProps {
  label: string;
  sublabel: string;
  id: string;
}

export default function CheckBox({ label, id, sublabel }: CheckBoxProps) {
  return (
    <div className="flex items-center w-56">
      <Checkbox.Root
        className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        id={id}
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="flex flex-col items-start justify-center ">
        <label
          className="pl-2 text-[15px] leading-none text-white w-36"
          htmlFor={id}
        >
          {label}
        </label>
        <label
          className="pl-2 text-[12px] leading-none text-zinc-200 font-bold"
          htmlFor={id}
        >
          {sublabel}
        </label>
      </div>
    </div>
  );
}

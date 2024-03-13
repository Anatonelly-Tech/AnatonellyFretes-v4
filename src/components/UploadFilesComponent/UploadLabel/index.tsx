import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

interface UploadLabelProps {
  htmlFor: string;
}

const UploadLabel = ({ htmlFor }: UploadLabelProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="flex items-center justify-center gap-2 p-4 h-16 rounded-lg cursor-pointer text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
      >
        <MdOutlineFileUpload size={28} />{" "}
        <p className="text-sm whitespace-nowrap font-bold">
          Selecionar um arquivo
        </p>
      </label>
    </>
  );
};

export default UploadLabel;

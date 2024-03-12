"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface UploadInputProps {
  selectedFile: string;
  register: any;
  preview: any;
  setSelectedFile: any;
  setValue: any;
  getValues: any;
}

const UploadInput = ({
  selectedFile,
  register,
  preview,
  setValue,
  getValues,
  setSelectedFile,
}: UploadInputProps) => {
  const [nameFile, setNameFile] = useState("");

  const HandleOnChange = (e) => {
    preview(e);
    register("picture").onChange(e);
    setNameFile(getValues("picture"));
  };
  console.log(nameFile);
  return (
    <>
      <input
        id="picture"
        className={`hidden`}
        {...register("picture")}
        name="picture"
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => {
          HandleOnChange(e);
        }}
      />
      <p className={`${selectedFile} text-white w-auto`}>{nameFile}</p>
      <IoMdClose
        className={`${selectedFile} text-white`}
        onClick={() => {
          setSelectedFile("hidden");

          setValue("picture", null);
        }}
      />
    </>
  );
};

export default UploadInput;

'use client';

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface UploadInputProps {
  selectedFile: string;
  register: any;
  preview: any;
  setSelectedFile: any;
  setValue: any;
  getValues?: any;
}

const UploadInput = ({
  selectedFile,
  register,
  preview,
  setValue,
  getValues,
  setSelectedFile,
}: UploadInputProps) => {
  const [nameFile, setNameFile] = useState('');

  const HandleOnChange = (e: any) => {
    preview(e);
    const file = getValues('picture');
    setNameFile(file[0].name);
  };
  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        id='picture'
        className={`hidden`}
        {...register('picture')}
        name='picture'
        type='file'
        accept='image/png, image/gif, image/jpeg'
        onChange={(e) => {
          register('picture').onChange(e);
          HandleOnChange(e);
        }}
      />
      <p className={`${selectedFile} text-white w-auto`}>{nameFile}</p>
      <IoMdClose
        size={20}
        className={`${selectedFile} text-white text-center h-6 flex items-center justify-center`}
        onClick={() => {
          setSelectedFile('hidden');

          setValue('picture', null);
        }}
      />
    </div>
  );
};

export default UploadInput;

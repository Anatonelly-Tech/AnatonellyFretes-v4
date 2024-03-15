'use client';
import React, { ChangeEvent, Component, useRef, useState } from 'react';
import { set } from 'react-hook-form';
import { MdOutlineFileUpload } from 'react-icons/md';

import UploadView from './UploadView';
import UploadLabel from './UploadLabel';
import { Upload } from 'antd';
import UploadInput from './UploadInput';

interface UpdateProps {
  setValue: any;
  register: any;
  getValues: any;
}

const index = ({ setValue, register, getValues }: UpdateProps) => {
  const [selectedFile, setSelectedFile] = useState('hidden');

  const frameRef = useRef<HTMLImageElement | null>(null);

  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    setSelectedFile('flex');
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <UploadView frameRef={frameRef} selectedFile={selectedFile} />
      <UploadLabel htmlFor='picture' />
      <UploadInput
        getValues={getValues}
        selectedFile={selectedFile}
        register={register}
        preview={preview}
        setSelectedFile={setSelectedFile}
        setValue={setValue}
      />
    </div>
  );
};

export default index;

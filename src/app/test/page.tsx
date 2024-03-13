"use client";
import "../../styles/main.css";
import UploadInput from "@/components/UploadFilesComponent/UploadInput";
import UploadLabel from "@/components/UploadFilesComponent/UploadLabel";
import UploadView from "@/components/UploadFilesComponent/UploadView";
import React, { useState } from "react";
import { ChangeEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const page = () => {
  const [selectedFile, setSelectedFile] = useState("hidden");
  const frameRef = useRef<HTMLImageElement | null>(null);
  const [responsaveisFrete, setResponsaveisFrete] = useState({});
  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    setSelectedFile("flex");
  };
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({});

  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      <UploadView frameRef={frameRef} selectedFile={selectedFile} />

      <UploadLabel htmlFor="picture" />
      <UploadInput
        selectedFile={selectedFile}
        register={register}
        preview={preview}
        setSelectedFile={setSelectedFile}
        setValue={setValue}
        getValues={getValues}
      />
      <DevTool control={control} />
    </div>
  );
};

export default page;

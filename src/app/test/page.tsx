"use client";
import "../../styles/main.css";

import React, { useState } from "react";
import { getCEP } from "@/services/viacep";
import UploadFilesComponent from "@/components/UploadFilesComponent";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const page = () => {
  const [responsaveisFrete, setResponsaveisFrete] = useState({});

  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({});

  const getfuncionarios = async () => {
    // console.log(responsaveis.data.response);
    // console.log(responsaveis);

    const responsaveis = await getCEP("85903140");
    setResponsaveisFrete(responsaveis.data);
    console.log(responsaveisFrete);
  };

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
    console.log("entriou");
  };

  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="nome"
          className="w-36 h-36 bg-white"
        />

        <UploadFilesComponent setValue={setValue} register={register} />
        <button className="w-36 h-36 bg-white" type="submit">
          enviaaaa
        </button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default page;

"use client";
import "@/styles/main.css";

import React from "react";
import ModalComponent from "@/components/Modal";
import Loading from "@/components/Loading";
import ProgressBar from "@/components/ProgressBar";
import UserNotifyBar from "@/components/UserNotifyBar";
import AdvancedPages from "@/components/AdvancedPages";
import Page3 from "../CriarFrete/page3";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const page = () => {
  const { register, control } = useForm();
  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      {/* <ModalComponent /> */}
      {/* <Loading /> 
      <div className="flex flex-col">
        <ProgressBar />
        <UserNotifyBar />
  </div> */}
      <form
        className="w-full h-full flex items-center justify-center"
        action=""
      >
        <Page3 register={register} />
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default page;

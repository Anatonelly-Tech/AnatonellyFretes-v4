"use client";
import "@/styles/main.css";

import React from "react";
import ModalComponent from "@/components/Modal";
import Loading from "@/components/Loading";
import ProgressBarAntd from "@/components/newProgressBar";
import UserNotifyBar from "@/components/UserNotifyBar";
import AdvancedPages from "@/components/AdvancedPages";
import Page3 from "../CriarFrete/page3";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const page = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full h-full flex items-start justify-start p-20">
      <ProgressBarAntd meta={100} percentProgress={50} />
    </div>
  );
};

export default page;

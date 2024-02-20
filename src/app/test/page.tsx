"use client";
import "@/styles/main.css";

import React from "react";
import ModalComponent from "@/components/Modal";
import Loading from "@/components/Loading";
import ProgressBar from "@/components/ProgressBar";
import UserNotifyBar from "@/components/UserNotifyBar";
import AdvancedPages from "@/components/AdvancedPages";

const page = () => {
  return (
    <div className="p-5 gap-5 h-full flex ">
      <ModalComponent />
      {/* <Loading /> */}
      <div className="flex flex-col">
        <ProgressBar />
        <UserNotifyBar />
      </div>

      <div className="w-8/12 h-2/4 absolute  left-1/2 top-44 -translate-x-1/2 bg-slate-400">
        <AdvancedPages WhatPage={1} />
      </div>
    </div>
  );
};

export default page;

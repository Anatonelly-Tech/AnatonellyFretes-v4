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


    </div>
  );
};

export default page;

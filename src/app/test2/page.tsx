"use client";
import ModalComponent from "@/components/ModalComponent";
import "../../styles/main.css";

import React from "react";
import { FaRegEye } from "react-icons/fa";
  const page = () => {
  return (
    <div className="w-full h-full flex items-start justify-start p-10">
      <ModalComponent
        color="green"
        method="GET"
        Icon={<FaRegEye className="text-lg font-bold" />}
        nameTitle="testeee"
        id={"65e5ee8d1894f424c7a19af5"}
      />
    </div>
  );
};

export default page;

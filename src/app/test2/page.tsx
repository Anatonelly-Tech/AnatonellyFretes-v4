"use client";
import NavBarMobile from "@/components/NavBarMobile";
import "../../styles/main.css";

import React from "react";
import { FaRegEye } from "react-icons/fa";
const page = () => {
  return (
    <div className="w-full h-full flex items-start justify-start p-10">
      <NavBarMobile />
    </div>
  );
};

export default page;

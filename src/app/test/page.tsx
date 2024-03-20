"use client";

import "../../styles/main.css";

import React, { useState } from "react";
import NavBarMobile from "@/components/NavBarMobile";
import { NavBar } from "@/components/NavBar";

const page = () => {
  return (
    <div className="p-5 gap-3 w-full h-full flex ">
      <NavBar />
      {/* <NavBarMobile /> */}
    </div>
  );
};

export default page;

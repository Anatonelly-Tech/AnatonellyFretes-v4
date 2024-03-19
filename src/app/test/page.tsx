"use client";
import ViewShippingSummary from "@/components/ViewShippingSummary";
import "../../styles/main.css";
import Box from "@mui/material/Box";
import { RiCustomerService2Line } from "react-icons/ri";
import Fab from "@mui/material/Fab";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";

import React, { useState } from "react";

const page = () => {
  return (
    <div className="p-5 gap-3 w-full h-full flex ">
      <Fab className="bg-green-700 hover:bg-green-800" aria-label="add">
        <FaWhatsapp className="text-white text-3xl" />
      </Fab>
      <Fab
        className="bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 "
        aria-label="add"
      >
        <FaInstagram className="text-white text-3xl" />
      </Fab>
      <Fab className="bg-orange-700 hover:bg-orange-800" aria-label="add">
        <RiCustomerService2Line className="text-white text-3xl" />
      </Fab>
    </div>
  );
};

export default page;

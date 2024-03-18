"use client";
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const SocialMedias = () => {
  return (
    <div className="p-5 gap-3 w-auto h-auto flex mt-10">
      <div
        className="p-2 rounded-full bg-green-700 hover:bg-green-800"
        aria-label="add"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </div>
      <div
        className="p-2 rounded-full bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 transition-all duration-500 ease-in-out hover:from-purple-800 hover:via-pink-700 hover:to-red-600 "
        aria-label="add"
      >
        <FaInstagram className="text-white text-3xl" />
      </div>
      <div
        className="p-2 rounded-full bg-orange-700 hover:bg-orange-800"
        aria-label="add"
      >
        <RiCustomerService2Line className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default SocialMedias;

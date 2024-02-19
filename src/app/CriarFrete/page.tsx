"use client";

import AdvancedPages from "@/components/AdvancedPages";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full">
      <h1 className="bg-gradient-to-br from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text text-6xl font-extrabold break-all">
        Meus <br /> Fretes
      </h1>
      <div className="bg-zinc-500 w-[80%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded">
        <AdvancedPages WhatPage={3} />
      </div>
      <form action=""></form>
    </div>
  );
};

export default page;

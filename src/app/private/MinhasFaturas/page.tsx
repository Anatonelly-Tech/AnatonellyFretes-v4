"use client";

import DaniedPage from "@/app/denid/page";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  if (session) {
    return <div>page</div>;
  }
  return <DaniedPage />;
};

export default page;

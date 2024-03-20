"use client";
import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  return (
    <div className="flex w-full bg-black h-32 gap-5">
      <button
        onClick={() => {
          router.push("/auth/loginDriver");
        }}
        className="w-32 h-12 bg-white rounded"
      >
        caminhoneiro
      </button>
      <button
        onClick={() => {
          router.push("/auth/login");
        }}
        className="w-32 h-12 bg-white rounded"
      >
        Empresario
      </button>
    </div>
  );
};

export default page;

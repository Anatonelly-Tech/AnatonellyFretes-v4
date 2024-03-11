"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const redirectToLogin = () => {
  const router = useRouter();

  useEffect(() => {
    return router.push("/auth/login");
  }, []);
};

export default redirectToLogin;

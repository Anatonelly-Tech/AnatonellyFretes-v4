"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const redirectToLogin = () => {
  const router = useRouter();

  useEffect(() => {
    return router.push("/public/ChooseSystem");
  }, []);
};

export default redirectToLogin;

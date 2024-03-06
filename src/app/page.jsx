"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const redirectToLogin = () => {
  const router = useRouter();

  useEffect(() => {
    // Coloque o código de redirecionamento aqui

    // Redireciona para a página desejada após o tempo de espera

    // Certifique-se de limpar o temporizador para evitar vazamentos de memória
    return router.push("/auth/login");
  }, []); // O segundo argumento vazio [] garante que este efeito só seja executado uma vez após a montagem inicial

};

export default redirectToLogin;

"use client";
import { useSession } from "next-auth/react";
import CheckBox from "@/components/CheckBox";
import InputLogin from "@/components/InputLogin/Index";
import React from "react";
import { useForm } from "react-hook-form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
  } = useForm();
  const { data: session } = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cpf, setCpf] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn("credetials", {
        cpf,
        password,
        redirect: false,
      });

      if (!response?.error) {
        console.log(session);
        router.refresh();
        router.push("/public/CadastroMotorista");
      } else {
        setError("cpf ou senha incorretos");
      }
    } catch (error) {
      console.log("[LOGIN_ERROR]", error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative -z-10">
      <div className="flex flex-col items-center justify-between gap-5 h-3/4 sm:h-auto md:h-auto sm:w-auto md:w-auto lg:w-1/4 bg-gradient-to-t from-purple-200 via-[rgba(60,7,100,0.82)] to-purple-950 p-10 rounded-lg shadow-lg shadow-black">
        <p className="text-white font-bold text-lg ">
          Insira as informações de login
        </p>
        <form
          className="flex flex-col items-center justify-around h-full w-full gap-5"
          onSubmit={handleLogin}
        >
          <div className="w-full">
            <InputLogin
              id="CPF"
              register={register}
              name="cpf"
              type="text"
              label="CPF"
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <InputLogin
              id="Senha"
              register={register}
              type="password"
              name="Senha"
              label="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a
            className="text-zinc-300 hover:text-zinc-500 font-bold underline text-center"
            href=""
          >
            Esqueci minha senha
          </a>
          {error && (
            <span className="text-red-400 text-sm block mt-2">{error}</span>
          )}
          {/* <a href="/private/Home"> */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-2 text-xl rounded-lg shadow-especial shadow-purple-800"
          >
            Entrar
          </button>
          {/* </a> */}
        </form>
        <a
          className="text-purple-500 hover:text-purple-600 font-bold underline"
          href=".././public/Cadastro"
        >
          Ainda não tem uma conta?
        </a>
      </div>
    </div>
  );
};

export default page;

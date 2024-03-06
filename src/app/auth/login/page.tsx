"use client";
import { useSession } from "next-auth/react";
import CheckBox from "@/components/CheckBox";
import InputLogin from "@/components/InputLogin/Index";
import React from "react";
import { useForm, Controller } from "react-hook-form";

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
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState("");

  console.log(session);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    try {
      console.log(email, password);
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (!response?.error) {
        console.log(session);
        router.refresh();
        router.push("/private/Home");
      } else {
        setError("email ou senha incorretos");
      }
    } catch (error) {
      console.log("[LOGIN_ERROR]", error);
    }
  };

  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative -z-10">
      <img
        draggable={false}
        className="w-full h-full absolute -z-10"
        src="/bgLogin.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-between gap-5 h-3/4 w-1/4 bg-gradient-to-t from-purple-200 via-[rgba(60,7,100,0.82)] to-purple-950 p-10 rounded-lg shadow-lg shadow-black">
        <img
          draggable={false}
          className="w-52"
          src="/AnatonellyPc.png"
          alt=""
        />
        <form
          className="flex flex-col items-center justify-around h-full"
          onSubmit={handleLogin}
        >
          <div className="w-full">
            <InputLogin
              id="Email"
              register={register}
              name="Email"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex justify-between gap-5 w-full">
            <CheckBox
              id="ManterConcectado"
              register={register}
              label="Manter conectado"
              value={false}
              name="ManterConcectado"
            />
            <a
              className="text-zinc-300 hover:text-zinc-500 font-bold underline"
              href=""
            >
              Esqueci minha senha
            </a>
          </div>
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
          href=""
        >
          Ainda não tem uma conta?
        </a>
      </div>
    </div>
  );
};

export default page;

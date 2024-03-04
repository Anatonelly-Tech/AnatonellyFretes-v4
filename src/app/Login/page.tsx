"use client";
import CheckBox from "@/components/CheckBox";
import InputLogin from "@/components/InputLogin/Index";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, touchedFields },
  } = useForm();
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative -z-10">
      <img
        draggable={false}
        className="w-full h-full absolute -z-10"
        src="/bgLogin.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-between gap-5 h-3/4 w-1/4 bg-gradient-to-t from-purple-200 via-[rgba(60,7,100,0.82)] to-purple-950 p-10 rounded-lg">
        <img
          draggable={false}
          className="w-52"
          src="/AnatonellyPc.png"
          alt=""
        />
        <InputLogin
          id="Email"
          register={register}
          name="Email"
          label="Email"
          required
        />
        <div className="w-full">
          <InputLogin
            id="Senha"
            register={register}
            name="Senha"
            label="Senha"
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
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-2 text-xl rounded-lg shadow-especial shadow-purple-800">
          Entrar
        </button>
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

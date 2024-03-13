"use client";
import { useSession } from "next-auth/react";
import InputLogin from "@/components/InputLogin/Index";
import React, { ChangeEvent, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { getCEP } from "@/services/viacep";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { FaUserCircle } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "@/utils/userValidation";
import { FaSearch } from "react-icons/fa";

import UploadInput from "@/components/UploadFilesComponent/UploadInput";
import UploadLabel from "@/components/UploadFilesComponent/UploadLabel";
import UploadView from "@/components/UploadFilesComponent/UploadView";
import { HiUserCircle } from "react-icons/hi2";
const page = () => {
  const {
    register,
    control,
    getValues,
    setValue,

    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });
  const [selectedFile, setSelectedFile] = useState("hidden");
  const frameRef = useRef<HTMLImageElement | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const getEndereco = async (cep) => {
    const NovoEndereco = await getCEP(cep);

    setValue("Cidade", NovoEndereco.data.localidade);
    setValue("Estado", NovoEndereco.data.uf);
    setValue("Rua", NovoEndereco.data.logradouro);
    setValue("Bairro", NovoEndereco.data.bairro);
  };

  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    setSelectedFile("flex");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
  //  (
  //
  // )

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center relative -z-10">
      <DevTool control={control} />
      <img
        draggable={false}
        className="w-full h-full absolute -z-10"
        src="/bgLogin.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-center gap-5 p-14 bg-gradient-to-t from-purple-400 via-[rgba(60,7,100,0.82)] to-purple-950 rounded-lg shadow-lg shadow-black">
        <div className="flex items-center w-20 h-20  justify-center rounded-full border-2 border-purple-600">
          <UploadView frameRef={frameRef} selectedFile={selectedFile} />
          {selectedFile !== "hidden" ? null : (
            <FaUserCircle className="text-zinc-200 w-full h-full" />
          )}
        </div>
        <form className="w-full h-full flex flex-col items-center justify-around ">
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex flex-col items-center gap-5 justify-between">
              <p className="text-xl text-white font-bold">Dados Pessoais</p>
              <div className="flex flex-col items-center justify-center gap-5 p-3">
                <InputLogin
                  id="NomeCompleto"
                  register={register}
                  name="NomeCompleto"
                  type="text"
                  label="Nome Completo"
                />

                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="CPF"
                    register={register}
                    name="CPF"
                    type="text"
                    label="CPF"
                    mask="999.999.999-99"
                  />

                  <InputLogin
                    id="Telefone"
                    register={register}
                    name="Telefone"
                    type="text"
                    label="Telefone"
                    mask="(99) 99999-9999"
                  />
                </div>

                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Senha"
                    register={register}
                    name="Senha"
                    type="password"
                    label="Senha"
                  />
                  <InputLogin
                    id="ConfirmarSenha"
                    register={register}
                    name="ConfirmarSenha"
                    type="password"
                    label="Confirmar Senha"
                  />
                </div>
                <div className="w-full flex items-center justify-center gap-4 p-1">
                  <UploadLabel htmlFor="picture" />
                  <UploadInput
                    selectedFile={selectedFile}
                    register={register}
                    preview={preview}
                    setSelectedFile={setSelectedFile}
                    setValue={setValue}
                    getValues={getValues}
                  />
                </div>
              </div>
            </div>
            {/* <div className=" "></div> */}
            <div className="flex flex-col items-center gap-5 justify-between">
              <p className="text-xl text-white font-bold">Endereço</p>
              <div className="flex flex-col items-center justify-center gap-5 p-3">
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="CEP"
                    register={register}
                    name="CEP"
                    type="text"
                    label="CEP"
                    mask="99999-999"
                  />
                  <button
                    className="w-auto h-9 flex items-center justify-center gap-3 p-3 px-5 rounded-lg text-nowrap text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
                    type="button"
                    onClick={async () => await getEndereco(getValues("CEP"))}
                  >
                    {/* Buscar Cep */}
                    <FaSearch />
                  </button>
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Cidade"
                    register={register}
                    name="Cidade"
                    type="text"
                    label="Cidade"
                  />
                  <InputLogin
                    id="Estado"
                    register={register}
                    name="Estado"
                    type="text"
                    label="Estado"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Rua"
                    register={register}
                    name="Rua"
                    type="text"
                    label="Rua"
                  />
                  <InputLogin
                    id="Numero"
                    register={register}
                    name="Numero"
                    type="text"
                    label="Numero"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Bairro"
                    register={register}
                    name="Bairro"
                    type="text"
                    label="Bairro"
                  />
                  <InputLogin
                    id="Complemento"
                    register={register}
                    name="Complemento"
                    type="text"
                    label="Complemento"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-32 h-9 rounded-lg font-bold text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;

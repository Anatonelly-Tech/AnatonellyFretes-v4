"use client";
// Libs
import React, { useState, ChangeEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

// Icons
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// Validation
import { userValidationSchema } from "@/utils/userValidation";

// Services
import { postUserFreight } from "@/services/user";
// Util
import { getCEP } from "@/services/viacep";

// Component
import InputLogin from "@/components/InputLogin/Index";
import UploadInput from "@/components/UploadFilesComponent/UploadInput";
import UploadLabel from "@/components/UploadFilesComponent/UploadLabel";
import UploadView from "@/components/UploadFilesComponent/UploadView";

const page = () => {
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });
  const [selectedFile, setSelectedFile] = useState("hidden");
  const frameRef = useRef<HTMLImageElement | null>(null);
  const router = useRouter();

  const getEndereco = async (cep: any) => {
    const NovoEndereco = await getCEP(cep);

    setValue("city", NovoEndereco.data.localidade);
    setValue("state", NovoEndereco.data.uf);
    setValue("street", NovoEndereco.data.logradouro);
    setValue("neighborhood", NovoEndereco.data.bairro);
  };

  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    setSelectedFile("flex");
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await postUserFreight(data);
      console.log(response);
    } catch {
      console.log("Erro ao cadastrar usuário");
    }
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          id="CadastroForm"
          className="w-full h-full flex flex-col items-center justify-around "
        >
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex flex-col items-center gap-5 justify-between">
              <p className="text-xl text-white font-bold">Dados Pessoais</p>
              <div className="flex flex-col items-center justify-center gap-5 p-3">
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="NomeCompleto"
                    register={register}
                    name="name"
                    type="text"
                    label="Nome Completo"
                  />
                  <InputLogin
                    id="Email"
                    register={register}
                    name="email"
                    type="email"
                    label="Email"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="CPF"
                    register={register}
                    name="cpf"
                    type="text"
                    label="CPF"
                    mask="999.999.999-99"
                  />

                  <InputLogin
                    id="Telefone"
                    register={register}
                    name="phone"
                    type="text"
                    label="Telefone"
                    mask="(99) 99999-9999"
                  />
                </div>

                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Senha"
                    register={register}
                    name="password"
                    type="password"
                    label="Senha"
                  />
                  <InputLogin
                    id="ConfirmarSenha"
                    register={register}
                    name="confirmPassword"
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
            <div className="flex flex-col items-center gap-5 justify-between">
              <p className="text-xl text-white font-bold">Endereço</p>
              <div className="flex flex-col items-center justify-center gap-5 p-3">
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="CEP"
                    register={register}
                    name="cep"
                    type="text"
                    label="CEP"
                    mask="99999-999"
                  />
                  <button
                    className="w-auto h-9 flex items-center justify-center gap-3 p-3 px-5 rounded-lg text-nowrap text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
                    type="button"
                    onClick={async () => await getEndereco(getValues("cep"))}
                  >
                    {/* Buscar Cep */}
                    <FaSearch />
                  </button>
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Cidade"
                    register={register}
                    name="city"
                    type="text"
                    label="Cidade"
                  />
                  <InputLogin
                    id="Estado"
                    register={register}
                    name="state"
                    type="text"
                    label="Estado"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Rua"
                    register={register}
                    name="street"
                    type="text"
                    label="Rua"
                  />
                  <InputLogin
                    id="Numero"
                    register={register}
                    name="number"
                    type="text"
                    label="Numero"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Bairro"
                    register={register}
                    name="neighborhood"
                    type="text"
                    label="Bairro"
                  />
                  <InputLogin
                    id="Complemento"
                    register={register}
                    name="complement"
                    type="text"
                    label="Complemento"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="w-32 h-9 rounded-lg font-bold text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
              type="button"
            >
              Voltar
            </button>
            <button
              type="submit"
              className="w-32 h-9 rounded-lg font-bold text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

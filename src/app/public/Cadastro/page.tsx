"use client";
import { useSession } from "next-auth/react";
import CheckBox from "@/components/CheckBox";
import InputLogin from "@/components/InputLogin/Index";
import React, { ChangeEvent, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { getCEP } from "@/services/viacep";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { MdOutlineFileUpload } from "react-icons/md";

import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "@/utils/userValidation";
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

  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [CEP, setCEP] = useState("");
  const getEndereco = async (cep) => {
    const NovoEndereco = await getCEP(cep);
    setCEP(cep);

    setValue("Cidade", NovoEndereco.data.localidade);
    setValue("Estado", NovoEndereco.data.uf);
    setValue("Rua", NovoEndereco.data.logradouro);
    setValue("Bairro", NovoEndereco.data.bairro);
    setCidade(NovoEndereco.data.localidade);
    setUf(NovoEndereco.data.uf);
    setLogradouro(NovoEndereco.data.logradouro);
    setBairro(NovoEndereco.data.bairro);
  };

  const frameRef = useRef<HTMLImageElement | null>(null);

  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
  };

  const { data: session } = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState("");

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

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center relative -z-10">
      <DevTool control={control} />
      <img
        draggable={false}
        className="w-full h-full absolute -z-10"
        src="/bgLogin.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-between gap-5 p-14 bg-gradient-to-t from-purple-400 via-[rgba(60,7,100,0.82)] to-purple-950 rounded-lg shadow-lg shadow-black">
        <img draggable={false} className="w-52 z-10" src="/pc.png" alt="" />
        <img
          className="absolute top-36 w-52 object-cover object-center max-h-32 rounded"
          id="frame"
          ref={frameRef}
          src={
            frameRef.current && frameRef.current.src
              ? frameRef.current.src
              : undefined
          }
          width="100px"
          height="100px"
          alt=""
        />

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

                <InputLogin
                  id="CPF"
                  register={register}
                  name="CPF"
                  type="text"
                  label="CPF"
                  mask="999.999.999-99"
                />

                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Telefone"
                    register={register}
                    name="Telefone"
                    type="text"
                    label="Telefone"
                    mask="(99) 99999-9999"
                  />
                  <label
                    htmlFor="picture"
                    className="flex items-center justify-center gap-2 text-white bg-purple-600  p-2 rounded-lg cursor-pointer hover:bg-purple-700 shadow shadow-black hover:ring-2 hover:ring-purple-950"
                  >
                    <MdOutlineFileUpload size={28} />{" "}
                    <p className="text-sm whitespace-nowrap font-bold">
                      Selecionar um arquivo
                    </p>
                  </label>
                  <input
                    className="hidden"
                    id="picture"
                    {...register("picture")}
                    name="picture"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => {
                      preview(e); // Sua lógica personalizada aqui
                      register("picture").onChange(e); // Atualiza o campo usando o método onChange do register
                    }}
                  />
                </div>

                <div className="w-full flex items-center justify-center">
                  <InputLogin
                    id="Senha"
                    register={register}
                    name="Senha"
                    type="text"
                    label="Senha"
                  />
                  <InputLogin
                    id="ConfirmarSenha"
                    register={register}
                    name="ConfirmarSenha"
                    type="text"
                    label="Confirmar Senha"
                  />
                </div>
              </div>
            </div>
            <div className=" "></div>
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
                    className="w-32 h-9 bg-purple-600 text-white rounded-lg"
                    type="button"
                    onClick={async () => await getEndereco(getValues("CEP"))}
                  >
                    Buscar Cep
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
        </form>
        <button className="w-32 h-9 bg-purple-600 text-white rounded-lg">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default page;

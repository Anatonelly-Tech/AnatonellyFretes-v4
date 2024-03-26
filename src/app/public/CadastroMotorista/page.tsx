"use client";
import InputLogin from "@/components/InputLogin/Index";
import { getCEP } from "@/services/viacep";
import { userValidationSchema } from "@/utils/userValidation";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { postDriverFreight } from "@/services/driver";
const page = () => {
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();
  const [buttons, setButtons] = useState(0);
  const getEndereco = async (cep: any) => {
    const NovoEndereco = await getCEP(cep);

    setValue("city", NovoEndereco.data.localidade);
    setValue("state", NovoEndereco.data.uf);
    setValue("street", NovoEndereco.data.logradouro);
    setValue("neighborhood", NovoEndereco.data.bairro);
  };
  const onSubmit = async (data: any) => {
    try {
      const response = await postDriverFreight(data);
      console.log(response);
    } catch {
      console.log("Erro ao cadastrar usuário");
    }
  };

  const DriverInformations = () => {
    return (
      <div className="w-full h-full  flex flex-col items-center">
        <h1 className="text-center text-white texdt-xl">
          Insira as informações para cadastro
        </h1>
        <InputLogin
          id="name"
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
    );
  };

  const EnderecoCadastro = () => {
    return (
      <div className="w-full h-full">
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
        />{" "}
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
        />{" "}
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
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start gap-5">
      <DevTool control={control} />
      <div className="w-5/6 h-5/6  bg-purple-950 rounded mt-16 flex flex-col items-center p-5">
        <form action="#" id="cadastroDriver" onSubmit={handleSubmit(onSubmit)}>
          {buttons === 0 ? <DriverInformations /> : <EnderecoCadastro />}
        </form>
      </div>
      <div className="flex w-full h-auto items-center justify-center gap-5">
        {buttons === 0 ? (
          <button
            className=" text-xl font-medium rounded px-3 py-1 text-white bg-purple-600 hover:bg-purple-700"
            onClick={() => {
              setButtons(1);
            }}
          >
            Avançar
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setButtons(0);
              }}
              className=" text-xl font-medium rounded px-3 py-1 text-white bg-purple-600 hover:bg-purple-700"
            >
              Voltar
            </button>{" "}
            <button
              form="cadastroDriver"
              type="submit"
              className=" text-xl font-medium rounded px-3 py-1 text-white bg-purple-600 hover:bg-purple-700"
            >
              Finalizar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default page;

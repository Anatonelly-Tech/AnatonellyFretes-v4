"use client";

// Libs
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { yupResolver } from "@hookform/resolvers/yup";

// Documentação da lib
// Dialog: https://www.radix-ui.com/primitives/docs/components/dialog
// UseForm: https://react-hook-form.com/api/useform/useform
// DevTools: https://react-hook-form.com/dev-tools

// Utils
import { responsibleValidationSchema } from "@/utils/responsibleValidation";

// Icons
import { FaLock, FaPhoneAlt, FaRegAddressCard } from "react-icons/fa";
import { PersonIcon } from "@radix-ui/react-icons";
import { MdOutlineMailOutline } from "react-icons/md";

// Components
import InputLabel from "@/components/Input";
import SelectComponent from "@/components/Select";
import InputRadio from "@/components/Radio";
import { Alert } from "@mui/material";

// Interface
interface State extends SnackbarOrigin {
  open: boolean;
}

const ModalComponentInside = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(responsibleValidationSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    setState({ vertical: "bottom", horizontal: "left", open: true });

    //manda para o db
    reset();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed " />
      <Dialog.Content className="fixed bg-zinc-300 h-full py-4 text-white top-0 right-0 w-2/7 px-3 shadow-lg shadow-black/25 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-50 scroll-smooth scrollbar-h-1  ">
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
          id="modalForm"
        >
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-xl font-semibold text-black">
                Dados Pessoais
              </h1>
              <hr className="border-zinc-400 " />
            </div>
            <div>
              <InputLabel
                id="name"
                name="name"
                register={register}
                placeholder="Nome completo do usuário"
                label="Nome Completo"
                icon={<PersonIcon className="w-8" />}
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.name?.message}
              </span>
            </div>
            <div>
              <InputLabel
                id="cpf"
                name="cpf"
                register={register}
                placeholder="000.000.000-00"
                label="CPF"
                icon={<FaRegAddressCard className="w-8" />}
                mask="999.999.999-99"
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.cpf?.message}
              </span>
            </div>
            <div>
              <InputLabel
                id="email"
                name="email"
                register={register}
                placeholder="mail@mail.com"
                label="E-mail"
                type="email"
                icon={<MdOutlineMailOutline className="w-8" />}
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.email?.message}
              </span>
            </div>
            <div>
              <InputLabel
                id="phone"
                name="phone"
                register={register}
                placeholder="(XX) 00000-0000"
                label="Telefone"
                icon={<FaPhoneAlt className="w-8" />}
                mask="(99) 99999-9999"
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.phone?.message}
              </span>
            </div>
            <div>
              <SelectComponent
                register={register}
                placeholder="Selecione o método de contato"
                value={["Apenas Ligação", "Ligação e Whatsapp"]}
                valueId={["onlyCall", "callAndWhatsapp"]}
                label="Forma de Contato"
                id="contactForm"
                name="contactForm"
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.contactForm?.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-xl font-semibold text-black">
                Dados Profissionais
              </h1>
              <hr className="border-zinc-400 " />
            </div>

            <div>
              <InputRadio
                title="Nível de acesso"
                value={["Administrador", "Colaborador"]}
                register={register}
                name="isAdmin"
                id={["Administrador", "Colaborador"]}
                label={["Administrador", "Colaborador"]}
                subLabel={[
                  "Pode adicionar, editar e excluir os dados de qualquer usuário.",
                  "Pode editar os próprios dados, exceto nome, e-mail e nível de acesso.",
                ]}
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.isAdmin?.message}
              </span>
            </div>
            <div>
              <SelectComponent
                register={register}
                placeholder="Selecione o cargo"
                value={[
                  "Administrativo",
                  "Comercial",
                  "Compras",
                  "Diretoria",
                  "Financeiro",
                  "Fiscal",
                  "Gerencial",
                  "Operacional",
                  "Suporte",
                ]}
                valueId={[
                  "Administrativo",
                  "Comercial",
                  "Compras",
                  "Diretoria",
                  "Financeiro",
                  "Fiscal",
                  "Gerencial",
                  "Operacional",
                  "Suporte",
                ]}
                label="Cargo"
                id="departament"
                name="departament"
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.departament?.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-xl font-semibold text-black">Senha</h1>
              <hr className="border-zinc-400 " />
            </div>
            <div>
              <InputLabel
                id="password"
                name="password"
                register={register}
                placeholder="********"
                label="Senha"
                type="password"
                icon={<FaLock className="w-8" />}
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.password?.message}
              </span>
            </div>
            <div>
              <InputLabel
                id="confirmPassword"
                name="confirmPassword"
                register={register}
                placeholder="********"
                label="Confirme a senha"
                type="password"
                icon={<FaLock className="w-8" />}
              />
              <span className="text-red-500 font-bold text-sm m-0 p-0">
                {errors.confirmPassword?.message}
              </span>
            </div>
          </div>
        </form>
        <DevTool control={control} />

        <div className="flex mt-6 gap-3">
          <button
            form="modalForm"
            type="submit"
            className="w-20 h-10 rounded-md bg-gray-500 hover:bg-gray-600 items-center justify-center"
          >
            Enviar
          </button>
        </div>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={122000}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Usuário cadastrado com sucesso!
          </Alert>
        </Snackbar>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ModalComponentInside;

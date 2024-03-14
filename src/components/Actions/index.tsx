import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { FaRegEye, FaTrashAlt, FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Frete } from "@/utils/InterfaceFreight";
import Modal2 from "@/components/ModalComponent";
import {
  changeStatus,
  deleteFreight,
  getFreightById,
  putFreight,
} from "@/services/formData";
import { MdBlock } from "react-icons/md";

const Actions = ({ idForm, statusItem, idResponsible, ...props }: Frete) => {
  if (statusItem == false) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center gap-1">
          <Modal2
            color="bg-green-600 hover:bg-green-700"
            method="GET"
            Icon={<FaRegEye className="text-lg font-bold" />}
            nameTitle="testeee"
            id={idForm}
          />
          <Modal2
            color="bg-yellow-600 hover:bg-yellow-700 "
            method="PUT"
            Icon={<CiEdit className="text-lg font-black text-white" />}
            nameTitle="teste2"
            id={idForm}
          />
        </div>

        <div className="flex items-center justify-center gap-1">
          <Tooltip title="Reativar Frete" arrow>
            <button
              className="rounded w-auto h-auto px-6 py-1 bg-green-700 hover:bg-green-800 text-white font-bold"
              id="ChangeStatus"
              type="submit"
              onClick={async () =>
                await changeStatus(idForm, idResponsible, true)
              }
            >
              <FaCheck className="text-lg font-black text-white" />
            </button>
          </Tooltip>

          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Tooltip title="Remover Frete" arrow>
                <button
                  id="ChangeStatus"
                  className="rounded w-auto h-auto px-6 py-1 bg-red-700 hover:bg-red-800 text-white font-bold"
                >
                  <FaTrashAlt className="text-lg font-bold text-white" />
                </button>
              </Tooltip>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-black/60 fixed inset-0" />
              <AlertDialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]  ">
                <AlertDialog.Title className="font-bold text-lg">
                  Você Realmente Quer Apagar Este Frete?
                </AlertDialog.Title>
                <AlertDialog.Description className="font-semibold mb-10">
                  Após a exclusão, não será possível recuperar os dados.
                </AlertDialog.Description>
                <div className="flex w-full gap-5 justify-end items-center">
                  <AlertDialog.Cancel asChild>
                    <button className="bg-black/60 text-white font-bold w-full h-8 rounded hover:bg-black/70">
                      Cancelar
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <button
                      className="rounded w-auto h-auto px-6 py-1 bg-red-500 hover:bg-red-600 text-white font-bold"
                      onClick={async () => await deleteFreight(idForm)}
                    >
                      Apagar
                    </button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center gap-1">
          <Modal2
            color="bg-green-600 hover:bg-green-700"
            method="GET"
            Icon={<FaRegEye className="text-lg font-bold" />}
            nameTitle="testeee"
            id={idForm}
          />
          <Modal2
            color="bg-yellow-600 hover:bg-yellow-700 "
            method="PUT"
            Icon={<CiEdit className="text-lg font-black text-white" />}
            nameTitle="teste2"
            id={idForm}
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <Tooltip title="Inativar Frete" arrow>
            <button
              className="rounded w-auto h-auto px-6 py-1 bg-red-700 hover:bg-red-800 text-white font-bold"
              id="ChangeStatus"
              type="submit"
              onClick={async () =>
                await changeStatus(idForm, idResponsible, true)
              }
            >
              <MdBlock className="text-lg font-black text-white" />
            </button>
          </Tooltip>

          <AlertDialog.Root>
            <Tooltip title="Remover Frete" arrow>
              <AlertDialog.Trigger asChild>
                <Tooltip title="Remover Frete" arrow>
                  <button
                    id="ChangeStatus"
                    className="rounded w-auto h-auto px-6 py-1 bg-red-700 hover:bg-red-800 text-white font-bold"
                  >
                    <FaTrashAlt className="text-lg font-bold text-white" />
                  </button>
                </Tooltip>
              </AlertDialog.Trigger>
            </Tooltip>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-black/60 fixed inset-0" />
              <AlertDialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]  ">
                <AlertDialog.Title className="font-bold text-lg">
                  Você Realmente Quer Apagar Este Frete?
                </AlertDialog.Title>
                <AlertDialog.Description className="font-semibold mb-10">
                  Após a exclusão, não será possível recuperar os dados.
                </AlertDialog.Description>
                <div className="flex w-full gap-5 justify-end items-center">
                  <AlertDialog.Cancel asChild>
                    <button className="bg-black/60 text-white font-bold w-28 h-8 rounded hover:bg-black/70">
                      Cancelar
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <button
                      onClick={async () => await deleteFreight(idForm)}
                      className="rounded w-auto h-auto px-6 py-1 bg-red-500 hover:bg-red-600 text-white font-bold"
                    >
                      Deletar
                    </button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </div>
      </div>
    );
  }
};

export default Actions;

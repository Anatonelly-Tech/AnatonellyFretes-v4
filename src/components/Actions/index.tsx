import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { FaRegEye, FaTrashAlt, FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Frete } from "@/utils/InterfaceFreight";
import {
  changeStatus,
  deleteFreight,
  getFreightById,
  putFreight,
} from "@/services/formData";
import { MdBlock } from "react-icons/md";

const Actions = ({ idForm, statusItem, idResponsible, ...props }: Frete) => {
  const customColors = ["#15803d", "#a16207", "#22c55e", "#fbbf24", "#dc2626"];

  if (statusItem == false) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center gap-1">
          <Tooltip title="Exibir Frete" arrow>
            <Button
              size="small"
              id="GET"
              onClick={async () => {
                const data = await getFreightById(idForm);
                console.log(data.data.response);
              }}
              style={{
                backgroundColor: customColors[0],
                color: "white",
              }}
            >
              <FaRegEye className="text-lg font-bold" />
            </Button>
          </Tooltip>

          <Tooltip title="Editar Frete" arrow>
            <Button
              size="small"
              id="PUT"
              onClick={async () => {
                const data = await getFreightById(idForm);
                const response = data.data.response;

                // adiciona os resultados na tela com inputs preenchidos
                // primeiro campo id segundo campo objeto
                // await putFreight(response.id, response);
              }}
              style={{ backgroundColor: customColors[1], color: "white" }}
            >
              <CiEdit className="text-lg font-black text-white" />
            </Button>
          </Tooltip>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Tooltip title="Reativar Frete" arrow>
            <Button
              size="small"
              id="ChangeStatus"
              type="submit"
              onClick={async () =>
                await changeStatus(idForm, idResponsible, true)
              }
              style={{ backgroundColor: customColors[2], color: "white" }}
            >
              <FaCheck className="text-lg font-black text-white" />
            </Button>
          </Tooltip>

          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Tooltip title="Remover Frete" arrow>
                <Button
                  size="small"
                  id="ChangeStatus"
                  style={{ backgroundColor: customColors[4], color: "white" }}
                >
                  <FaTrashAlt className="text-lg font-bold text-white" />
                </Button>
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
                      onClick={async () => await deleteFreight(idForm)}
                      className="bg-red-500 text-white font-bold w-28 h-8 rounded hover:bg-red-600"
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
      <div className="w-full h-full flex items-center justify-center gap-2">
        <Tooltip title="Exibir Frete" arrow>
          <Button
            id="GET"
            onClick={async () => {
              const data = await getFreightById(idForm);
              console.log(data.data.response);
            }}
            style={{ backgroundColor: customColors[0], color: "white" }}
          >
            <FaRegEye className="text-xl font-bold" />
          </Button>
        </Tooltip>

        <Tooltip title="Editar Frete" arrow>
          <Button
            id="PUT"
            onClick={async () => {
              const data = await getFreightById(idForm);
              const response = data.data.response;

              // adiciona os resultados na tela com inputs preenchidos
              // primeiro campo id segundo campo objeto
              await putFreight(response.id, response);
            }}
            style={{ backgroundColor: customColors[1], color: "white" }}
          >
            <CiEdit className="text-xl font-black text-white" />
          </Button>
        </Tooltip>

        <Tooltip title="Inativar Frete" arrow>
          <Button
            id="ChangeStatus"
            type="submit"
            onClick={async () =>
              await changeStatus(idForm, idResponsible, false)
            }
            style={{ backgroundColor: customColors[3], color: "white" }}
          >
            <MdBlock className="text-xl font-black text-white" />
          </Button>
        </Tooltip>

        <AlertDialog.Root>
          <Tooltip title="Remover Frete" arrow>
            <AlertDialog.Trigger className="bg-[#b91c1c] flex w-[63.98px] rounded items-center px-[8px] py-[6px] justify-center h-[31.99px]">
              <FaTrashAlt className="text-xl font-bold text-white" />
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
                    className="bg-red-500 text-white font-bold w-28 h-8 rounded hover:bg-red-600"
                  >
                    Deletar
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    );
  }
};

export default Actions;

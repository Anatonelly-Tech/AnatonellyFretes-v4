"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Tooltip from "@mui/material/Tooltip";
import READ from "../Method/Read";

interface ModalComponentProps {
  nameTitle: string;
  Icon: any;
  method: string;
  color: string;
  id: string;
}

const ModalComponent = ({
  Icon,
  nameTitle,
  color,
  method,
  id,
}: ModalComponentProps) => {
  return (
    <div className="w-full h-full">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Tooltip title={nameTitle} arrow>
            <button
              className={`rounded w-auto h-auto px-6 py-1 bg-${color}-700 hover:bg-${color}-800 text-white font-bold`}
            >
              {Icon}
            </button>
          </Tooltip>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-[rgba(0,0,0,0.53)] data-[state=open]:animate-overlayShow fixed inset-0">
            <Dialog.Content className="p-10 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-auto w-auto translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              {method === "GET" ? (
                <READ id={id} />
              ) : method === "PUT" ? (
                <READ id={id} />
              ) : method === "POST" ? (
                <div></div>
              ) : method === "DELETE" ? (
                <div></div>
              ) : null}
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ModalComponent;

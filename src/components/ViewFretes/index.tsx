import React from "react";
import CheckBox from "@/components/CheckBox";
//icons
import { HiArrowLongRight } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import Actions from "@/components/Actions";

interface indexProps {
  idFrete: string;
  nomeFrete: string;
  resumoFrete: string;
  freteValue: string;
  exitLocation: string;
  deliveryPlace: string;
}

const index = ({
  idFrete,
  nomeFrete,
  resumoFrete,
  freteValue,
  exitLocation,
  deliveryPlace,
}: indexProps) => {
  return (
    <div className="flex items-center justify-between w-auto h-auto p-2 m-2 border-2 border-zinc-500 rounded shadow-interno shadow-zinc-500 ">
      {/* resumo do frete */}
      <div className="">
        <div className="flex flex-col">
          <label className="text-zinc-800 font-semibold" htmlFor={idFrete}>
            {nomeFrete}
          </label>
          <label className="text-zinc-500 font-bold" htmlFor={idFrete}>
            {resumoFrete}
          </label>
        </div>
      </div>{" "}
      <p className="text-zinc-500 text-3xl">|</p>
      {/* origem/destino */}
      <div className="flex items-center justify-between w-[30%] ">
        <div className="w-2/5 h-full flex items-center justify-center gap-1 p-1">
          <div className="w-[20%]">
            <FaMapMarkerAlt />
          </div>
          <div className="w-auto break-all">{exitLocation}</div>
        </div>
        <div className="flex items-center justify-center">
          <HiArrowLongRight size={20} />
        </div>
        <div className="w-2/5 h-full flex items-center justify-center gap-1 p-1">
          <div className="w-[20%]">
            <FaMapLocationDot />
          </div>
          <div className="w-auto break-all">{deliveryPlace}</div>
        </div>
      </div>
      {/* Valor */}
      <p className="text-zinc-500 text-3xl">|</p>
      <div>{freteValue}</div>
      {/* ações */}
      <p className="text-zinc-500 text-3xl">|</p>
      <div>
        <Actions idFrete={idFrete} />
      </div>
      <div></div>
    </div>
  );
};

export default index;

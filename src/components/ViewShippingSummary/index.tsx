import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

interface ViewShippingSummaryProps {
  idForm: string;
  statusItem: boolean;
  name: string;
  freightPrice: string;
  collectCity: string;
  deliveryCity: string;
  collectDate?: string;
  deliveryDate?: string;
  product?: string;
}

const ViewShippingSummary = ({
  idForm,
  statusItem,
  name,
  freightPrice,
  collectCity,
  deliveryCity,
  collectDate,
  deliveryDate,
  product,
}: ViewShippingSummaryProps) => {
  function FreightComponent() {
    return (
      <div className="w-11/12 flex items-center justify-between h-auto p-2 gap-2 m-1 rounded shadow-interno shadow-zinc-400 bg-zinc-100">
        <div className="w-[30%] flex flex-col items-center">
          <label className="text-zinc-800 font-semibold text-xs">
            <p className="text-xs font-semibold">{name}</p>
          </label>
          <label className="text-zinc-500 font-bold text-xs">
            <p className="text-xs font-semibold">Resumo do Frete</p>
          </label>
        </div>
        <div className="h-7 bg-black w-[1px]"></div>
        <div className="w-[50%] flex items-center justify-between">
          <div className="w-[45%] h-full flex items-center justify-center gap-1 p-1">
            <div className="w-[20%]">
              <FaMapMarkerAlt size={14} />
            </div>
            <div className="w-[80%] text-nowrap text-ellipsis overflow-hidden text-xs">
              {collectCity}
            </div>
          </div>
          <div className="w-auto flex items-center justify-center">
            <HiArrowLongRight size={14} />
          </div>
          <div className="w-[45%] h-full flex items-center justify-center gap-1 p-1">
            <div className="w-[20%]">
              <FaMapLocationDot size={14} />
            </div>
            <div className="w-[80%] text-nowrap text-ellipsis overflow-hidden text-xs">
              {deliveryCity}
            </div>
          </div>
        </div>
        <div className="h-7 bg-black w-[1px]"></div>
        <div className="w-[20%] h-full flex items-center justify-center text-xs text-center">
          {freightPrice}
        </div>
      </div>
    );
  }

  function FreightInfoComponent() {
    return (
      <div className="w-11/12 flex items-center justify-between h-auto p-2 gap-2 m-1  rounded shadow-interno shadow-zinc-200 bg-white">
        <div className="w-[30%] flex flex-col items-center">
          <label
            className="text-zinc-800 font-semibold text-xs"
            htmlFor={idForm}
          >
            {name}
          </label>
          <label className="text-zinc-500 font-bold text-xs" htmlFor={idForm}>
            <p className="text-xs">{product}</p>
          </label>
        </div>
        <div className="h-7 bg-black w-[1px]"></div>
        <div className="w-[50%] flex items-center justify-between ">
          <div className="w-[45%] h-full flex items-center justify-center gap-1 p-1">
            <div className="w-[20%]">
              <FaMapMarkerAlt size={14} />
            </div>
            <div className="w-[80%] text-nowrap text-ellipsis overflow-hidden text-xs">
              {collectCity}
            </div>
          </div>
          <div className="w-auto flex items-center justify-center">
            <HiArrowLongRight size={14} />
          </div>
          <div className="w-[45%] h-full flex items-center justify-center gap-1 p-1">
            <div className="w-[20%]">
              <FaMapLocationDot size={14} />
            </div>
            <div className="w-[80%] text-nowrap text-ellipsis overflow-hidden text-xs">
              {deliveryCity}
            </div>
          </div>
        </div>
        <div className="h-7 bg-black w-[1px]"></div>
        <div className="w-[20%] h-full flex items-center justify-center text-xs text-center">
          {freightPrice}
        </div>
      </div>
    );
  }

  return idForm === "title" ? <FreightComponent /> : <FreightInfoComponent />;
};

export default ViewShippingSummary;

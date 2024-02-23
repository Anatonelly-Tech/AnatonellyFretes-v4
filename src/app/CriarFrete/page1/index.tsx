// Libs

interface Page1Props {
  register: any;
  error: any;
}

import CheckBox from "@/components/CheckBox";
import InputLabel from "@/components/Input";
import ModalComponent from "@/components/Modal";
// Components
import InputRadio from "@/components/Radio";
import error from "next/error";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import ResponsaveisFrete from "@/utils/Storage/ResposaveisFrete";
export default function Page1({ register, error }: Page1Props) {
  console.log(ResponsaveisFrete[0]);
  return (
    <div className="flex w-full h-full flex-col items-start justify-center gap-8 p-5">
      <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
        <div className="flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded">
          <div className="w-2/3">
            <InputLabel
              id="colectCity"
              name="colectCity"
              register={register}
              label="Cidade de Coleta"
              icon={<FaCity className="w-8" />}
              placeholder="Cidade de Coleta"
            />
            <span className="text-sm flex text-red-500 font-bold">
              {error.colectCity?.message}
            </span>
          </div>

          <div className="w-1/3">
            <InputLabel
              id="colectDate"
              name="colectDate"
              register={register}
              type="date"
              label="Data de Coleta"
              icon={<MdDateRange className="w-8" />}
              placeholder="DD/MM/AAAA"
            />
            <span className="text-sm flex text-red-500 font-bold">
              {error.colectDate?.message}
            </span>
          </div>
        </div>
        <div className="flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded">
          <div className="w-2/3">
            <InputLabel
              id="deliveryCity"
              name="deliveryCity"
              register={register}
              label="Cidade de Entrega"
              icon={<FaCity className="w-8" />}
              placeholder="Cidade de Entrega"
            />
            <span className="text-sm flex text-red-500 font-bold">
              {error.deliveryCity?.message}
            </span>
          </div>
          <div className="w-1/3">
            <InputLabel
              id="deliveryDate"
              name="deliveryDate"
              register={register}
              type="date"
              label="Data de Entrega"
              icon={<MdDateRange className="w-8" />}
              placeholder="DD/MM/AAAA"
            />
            <span className="text-sm flex text-red-500 font-bold">
              {error.deliveryDate?.message}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div className=" w-full h-auto flex flex-col bg-zinc-300 shadow-md p-2 rounded">
          <div className="w-auto h-auto p-2 flex flex-col gap-2">
            <div className="w-4/5">
              <ModalComponent />
            </div>

            {/* <div className="w-full">lista de responsaveis pelo frete</div> */}
            <div className="w-full h-auto grid grid-cols-4 p-2 bg-gray-500 shadow-md rounded gap-4">
              <CheckBox label="teste 1" sublabel="teste 1 sub" id="teste1" />
              <CheckBox label="teste 2" sublabel="teste 2 sub" id="teste2" />
              <CheckBox label="teste 3" sublabel="teste 3 sub" id="teste3" />
              <CheckBox label="teste 4" sublabel="teste 4 sub" id="teste4" />
              <CheckBox label="teste 5" sublabel="teste 5 sub" id="teste5" />
              <CheckBox label="teste 6" sublabel="teste 6 sub" id="teste6" />
              <CheckBox label="teste 7" sublabel="teste 7 sub" id="teste7" />
              <CheckBox label="teste 8" sublabel="teste 8 sub" id="teste8" />
              <CheckBox label="teste 9" sublabel="teste 9 sub" id="teste9" />
              <CheckBox label="teste 10" sublabel="teste 10 sub" id="teste10" />
              <CheckBox label="teste 11" sublabel="teste 11 sub" id="teste11" />
              <CheckBox label="teste 12" sublabel="teste 12 sub" id="teste12" />
            </div>
          </div>
        </div>
        <div className="bg-zinc-300 shadow-md p-2 rounded flex w-1/3 ">
          <InputRadio
            id={["Nacional", "Internacional"]}
            label={["Nacional", "Internacional"]}
            subLabel={[
              "Fretes realizados dentro do país",
              "Fretes realizados para fora do país",
            ]}
            register={register}
            name={"localizacaoFrete"}
            value={["Nacional", "Internacional"]}
            title={"Localizacao do Frete"}
          />
          <span className="text-sm flex text-red-500 font-bold">
            {error.localizacaoFrete?.message}
          </span>
        </div>
      </div>
    </div>
  );
}

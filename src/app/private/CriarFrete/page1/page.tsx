"use client";
// Libs

interface Page1Props {}

import CheckBox from "@/components/CheckBox";
import InputLabel from "@/components/Input";
import ModalComponent from "@/components/Modal";
import { useEffect, useState } from "react";
// Components
import InputRadio from "@/components/Radio";
import ResponsaveisFrete from "@/utils/Storage/ResposaveisFrete";
import { FaCity } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { getAllResponsibles } from "@/services/responsibleFreight";
import LoadingForComponents from "@/components/Loading/LoadingForComponents";
import { VscAccount } from "react-icons/vsc";
export default function Page1({}: Page1Props) {
  const [loaded, setLoaded] = useState(false);

  // const [responsaveisFrete, setResponsaveisFrete] = useState([]);
  // useEffect(() => {
  //   const getResponsaveis = async () => {
  //     const responsaveis = await getAllResponsibles();
  //     setResponsaveisFrete(responsaveis.data.response);
  //   };
  //   getResponsaveis();
  // }, []);

  // const WaitLoad = () => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 5000);
  // };

  // const tryLoading = () => {
  //   return loaded == false ? (
  //     <>
  //       <LoadingForComponents />
  //       {WaitLoad()}
  //     </>
  //   ) : (
  //     <div className='flex flex-col items-center justify-center'>
  //       <VscAccount className='text-white' size={50}/>
  //       <span className='text-white font-bold'>
  //         Nenhum Funcionario Cadastrado!
  //       </span>
  //     </div>
  //   );
  // };

  return (
    <div className="flex w-full h-full flex-col items-start justify-center gap-8 p-5">
      <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
        <div className="flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded">
          <div className="w-2/3">
            <InputLabel
              id="collectCity"
              name="collectCity"
              label="Cidade de Coleta"
              icon={<FaCity className="w-8" />}
              placeholder="Cidade de Coleta"
            />
            <span className="text-sm flex text-red-500 font-bold"></span>
          </div>

          <div className="w-1/3">
            <InputLabel
              id="collectDate"
              name="collectDate"
              type="date"
              label="Data de Coleta"
              icon={<MdDateRange className="w-8" />}
              placeholder="DD/MM/AAAA"
            />
            <span className="text-sm flex text-red-500 font-bold"></span>
          </div>
        </div>
        <div className="flex w-full gap-4  bg-zinc-300 shadow-md p-2 rounded">
          <div className="w-2/3">
            <InputLabel
              id="deliveryCity"
              name="deliveryCity"
              label="Cidade de Entrega"
              icon={<FaCity className="w-8" />}
              placeholder="Cidade de Entrega"
            />
            <span className="text-sm flex text-red-500 font-bold"></span>
          </div>
          <div className="w-1/3">
            <InputLabel
              id="deliveryDate"
              name="deliveryDate"
              type="date"
              label="Data de Entrega"
              icon={<MdDateRange className="w-8" />}
              placeholder="DD/MM/AAAA"
            />
            <span className="text-sm flex text-red-500 font-bold"></span>
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
              {ResponsaveisFrete.length > 0
                ? ResponsaveisFrete.map((item) => {
                    return (
                      <>
                        <CheckBox
                          label={item.name}
                          sublabel={item.phone}
                          id={item.id}
                        />
                      </>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start">
          <InputRadio
            id={["Nacional", "Internacional"]}
            label={["Nacional", "Internacional"]}
            subLabel={[
              "Fretes realizados dentro do país",
              "Fretes realizados para fora do país",
            ]}
            name={"radioValueLocalizacao"}
            value={["Nacional", "Internacional"]}
            title={"Localizacao do Frete"}
          />
          <span className="text-sm flex text-red-500 font-bold"></span>
        </div>
      </div>
    </div>
  );
}

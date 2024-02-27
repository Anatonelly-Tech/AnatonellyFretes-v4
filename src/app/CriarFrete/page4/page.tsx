import InputRadio from "@/components/Radio";
import InputLabel from "@/components/Input";
import React from "react";
import {
  FaCalculator,
  FaCity,
  FaComments,
  FaHandHoldingUsd,
  FaMoneyBillAlt,
} from "react-icons/fa";
import PackagePlan from "@/components/PackagePlan";
import { MdAttachMoney } from "react-icons/md";
interface Page4Props {}

export default function Page4({}: Page4Props) {
  return (
    <div className=" mt-10 flex flex-col items-center justify-start w-4/5 h-4/5 bg-zinc-400 gap-5 p-5">
      <div className="flex items-center justify-start w-full h-auto px-5 gap-10">
        <div className="bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start">
          <InputRadio
            id={["Já sei o Valor", "A combinar"]}
            label={["Já sei o Valor", "A combinar"]}
            subLabel={[
              "Fretes realizados dentro do país",
              "Fretes realizados para fora do país",
            ]}
            name={"InformacoesValor"}
            value={["JaSeiValor", "Acombinar"]}
            title={"Informações de Valor"}
          />
        </div>
        <div className="bg-zinc-300 shadow-md p-4 rounded flex flex-col gap-3 w-auto h-auto items-start">
          <InputRadio
            id={["Incluso no valor", "Pago a parte"]}
            label={["Incluso no valor", "Pago a parte"]}
            subLabel={[
              "Fretes realizados dentro do país",
              "Fretes realizados para fora do país",
            ]}
            name={"Pedagio"}
            value={["InclusoValor", "PagoParte"]}
            title={"Pedagio"}
          />
        </div>
      </div>
      <div className="w-full h-auto flex justify-between items-center px-5 gap-3">
        <InputLabel
          id="ValorFrete"
          name="ValorFrete"
          label="Valor do frete"
          icon={<MdAttachMoney className="w-8" />}
          placeholder="Valor do frete"
        />{" "}
        <InputLabel
          id="CalculoValor"
          name="CalculoValor"
          label="Calculo do valor"
          icon={<FaCalculator className="w-8" />}
          placeholder="Calculo do valor"
        />{" "}
        <InputLabel
          id="FormaPagamento"
          name="FormaPagamento"
          label="Forma de pagamento"
          icon={<FaHandHoldingUsd className="w-8" />}
          placeholder="Forma de pagamento"
        />{" "}
        <InputLabel
          id="Adiantamento"
          name="Adiantamento"
          label="Adiantamento"
          icon={<FaMoneyBillAlt className="w-8" />}
          placeholder="Adiantamento"
        />
      </div>
      <div className="w-full h-auto px-5">
        {" "}
        <InputLabel
          id="Observacoes"
          name="Observacoes"
          type="text"
          label="Observações"
          icon={<FaComments className="w-8" />}
          placeholder="Observações"
        />
      </div>
      <div className="w-full h-auto">
        <PackagePlan />
      </div>
    </div>
  );
}

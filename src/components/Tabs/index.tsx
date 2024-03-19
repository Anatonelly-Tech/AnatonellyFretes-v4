"use client";
import "../../styles/main.css";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import React from "react";
import ViewFrete from "@/components/Tabs/ViewFretes";
import { Frete } from "@/utils/InterfaceFreight";

interface Fretes {
  freteAtivo: Frete[];
  freteInativo: Frete[];
}

const TabsComponent = async ({ freteAtivo, freteInativo }: Fretes) => {
  const [activeTab, setActiveTab] = React.useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const getFreteList = () => {
    if (activeTab === "1") {
      return freteAtivo;
    } else {
      return freteInativo;
    }
  };

  const freteList = getFreteList();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ativos",
    },
    {
      key: "2",
      label: "Inativos",
    },
  ];

  return (
    <div className="flex-1 w-auto h-auto flex items-start justify-center mt-28">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "#a855f7",
              itemColor: "#cbd5e1",
              colorPrimary: "#fff",
              itemHoverColor: " #fff",
              fontWeightStrong: 900,
              controlItemBgHover: "#fff ",
              titleFontSizeLG: 20,
              borderRadius: 2,
              colorBgContainer: "#7c3aed",
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={"large"}
          items={items}
          onChange={handleTabChange}
        />
      </ConfigProvider>

      <div className="w-2/3 h-2/3 rounded-lg shadow-lg shadow-black bg-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-gray-400">
        <ViewFrete
          key={1}
          idForm={"title"}
          name={"Nome do Frete"}
          freightPrice={"Valor do Frete"}
          collectCity={"Local de Saída"}
          deliveryCity={"Local de Entrega"}
          _id={""}
          collectDate={""}
          deliveryDate={""}
          responsibleFreight={[]}
          product={""}
          species={""}
          weight={""}
          paymentForm={""}
          valueCalculation={""}
          radioValueLocalizacao={""}
          radioValueTipoCarga={""}
          radioValueLona={""}
          radioValueRastreador={""}
          unitMeasurement={""}
          radioValueValor={""}
          radioValuePedagio={""}
          radioPacoteEscolhido={""}
          veiculos={[]}
          carrocerias={[]}
          statusItem={true}
          createdAt={""}
          idResponsible={[]}
        />
        {freteList.map((frete) => (
          <>
            <ViewFrete
              key={frete.idForm}
              idForm={frete.idForm}
              name={frete.name}
              carrocerias={frete.carrocerias}
              veiculos={frete.veiculos}
              weight={frete.weight}
              unitMeasurement={frete.unitMeasurement}
              freightPrice={frete.freightPrice}
              collectCity={frete.collectCity}
              deliveryCity={frete.deliveryCity}
              _id={frete._id}
              collectDate={frete.collectDate}
              deliveryDate={frete.deliveryDate}
              responsibleFreight={frete.responsibleFreight}
              product={frete.product}
              species={frete.species}
              paymentForm={frete.paymentForm}
              valueCalculation={frete.valueCalculation}
              radioValueLocalizacao={frete.radioValueLocalizacao}
              radioValueTipoCarga={frete.radioValueTipoCarga}
              radioValueLona={frete.radioValueLona}
              radioValueRastreador={frete.radioValueRastreador}
              radioValueValor={frete.radioValueValor}
              radioValuePedagio={frete.radioValuePedagio}
              radioPacoteEscolhido={frete.radioPacoteEscolhido}
              statusItem={frete.statusItem}
              createdAt={frete.createdAt}
              idResponsible={frete.idResponsible}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;

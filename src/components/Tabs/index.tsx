"use client";
import "../../styles/main.css";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import React from "react";
import ViewFrete from "@/components/Tabs/ViewFretes";

interface Frete {
  freteAtivo: {
    idFrete: string;
    nomeFrete: string;
    resumoFrete: string;
    freteValue: string;
    exitLocation: string;
    deliveryPlace: string;
  }[];
  freteInativo: {
    idFrete: string;
    nomeFrete: string;
    resumoFrete: string;
    freteValue: string;
    exitLocation: string;
    deliveryPlace: string;
  }[];
}

const TabsComponent = ({ freteAtivo, freteInativo }: Frete) => {
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

      <div className="w-2/3 h-2/3 rounded-lg shadow-rounded shadow-[#4f2d5b] bg-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-gray-400">
        <ViewFrete
          key={1}
          idFrete={"title"}
          nomeFrete={"Nome do Frete"}
          resumoFrete={"Resumo do Frete"}
          freteValue={"Valor do Frete"}
          exitLocation={"Local de Saída"}
          deliveryPlace={"Local de Entrega"}
        />
        {freteList.map((frete) => (
          <ViewFrete
            key={frete.idFrete}
            idFrete={frete.idFrete}
            nomeFrete={frete.nomeFrete}
            resumoFrete={frete.resumoFrete}
            freteValue={frete.freteValue}
            exitLocation={frete.exitLocation}
            deliveryPlace={frete.deliveryPlace}
          />
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;

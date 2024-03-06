"use client";
import "../../styles/main.css";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import React from "react";

const page = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ativos",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Inativos",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <div className="w-full h-full flex items-start justify-start p-10">
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
        <style jsx>{`
          .custom-tab-hover:hover {
            background-color: #581c87 !important;
          }
        `}</style>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={"large"}
          items={new Array(2).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: items.map((item) => item.label)[i] || `Tab ${id} `,
              key: id,
              className: "custom-tab-hover", // Adiciona a classe customizada aqui
              children:
                `pagina dos fretes ` + items.map((item) => item.label)[i] ||
                `Tab ${id}`,
            };
          })}
        />
      </ConfigProvider>
    </div>
  );
};

export default page;

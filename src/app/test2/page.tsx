"use client";
import "@/styles/main.css";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import React from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="w-full h-full flex items-start justify-start p-10 bg-white">
      <Tabs
        
        defaultActiveKey="1"
        type="card"
        size={"large"}
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: items.map((item) => item.label)[i] || `Tab ${id} `,
            key: id,
            children:
              `pagina dos fretes ` + items.map((item) => item.label)[i] ||
              `Tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default page;

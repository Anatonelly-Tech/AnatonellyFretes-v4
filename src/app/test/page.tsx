"use client";
import ViewShippingSummary from "@/components/ViewShippingSummary";
import "../../styles/main.css";

import React, { useState } from "react";

const page = () => {
  const FreteListHome = [
    {
      key: 1,
      idForm: "123",
      name: "Frete Expresso",
      freightPrice: "1500.75",
      collectCity: "São Paulo",
      deliveryCity: "Rio de Janeiro",
      collectDate: "2024-03-15",
      deliveryDate: "2024-03-18",
      product: "Eletrônicos",
      statusItem: true,
    },
    // {
    //   key: 2,
    //   idForm: "123",
    //   name: "Frete Expresso",
    //   freightPrice: "1500.75",
    //   collectCity: "São Paulo",
    //   deliveryCity: "Rio de Janeiro",
    //   collectDate: "2024-03-15",
    //   deliveryDate: "2024-03-18",
    //   product: "Eletrônicos",
    //   statusItem: true,
    // },
    // {
    //   key: 3,
    //   idForm: "123",
    //   name: "Frete Expresso",
    //   freightPrice: "1500.75",
    //   collectCity: "São Paulo",
    //   deliveryCity: "Rio de Janeiro",
    //   collectDate: "2024-03-15",
    //   deliveryDate: "2024-03-18",
    //   product: "Eletrônicos",
    //   statusItem: true,
    // },
  ];
  return (
    <div className="p-5 gap-5 w-full h-full flex ">
      <div className="bg-zinc-300/45 w-1/2 h-64">
        <ViewShippingSummary
          idForm="title"
          name="Resumo do Frete"
          freightPrice="Preço do Frete"
          collectCity="cidade de coleta"
          deliveryCity="cidade de entrega"
          collectDate="data da coleta"
          deliveryDate="data da entrega"
          product="Produto"
          statusItem={true}
        />

        {FreteListHome.map((frete) => (
          <>
            <ViewShippingSummary
              key={frete.key}
              idForm={frete.idForm}
              name={frete.name}
              freightPrice={frete.freightPrice}
              collectCity={frete.collectCity}
              deliveryCity={frete.deliveryCity}
              collectDate={frete.collectDate}
              deliveryDate={frete.deliveryDate}
              product={frete.product}
              statusItem={frete.statusItem}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default page;

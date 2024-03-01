import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

interface IndexProps {
  idFrete: string;
}

const Index = ({ idFrete }: IndexProps) => {
  function handleOpen(action: string) {
    console.log(`ID do Frete: ${idFrete}, Ação: ${action}`);
    // Adicione lógica adicional conforme necessário
  }

  const customColors = ["#15803d", "#a16207", "#b91c1c"];

  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      <Tooltip title="Exibir Frete" arrow>
        <Button
          id="GET"
          onClick={() => handleOpen("GET")}
          style={{ backgroundColor: customColors[0], color: "white" }}
        >
          <FaRegEye className="text-xl font-bold" />
        </Button>
      </Tooltip>

      <Tooltip title="Editar Frete" arrow>
        <Button
          id="PUT"
          onClick={() => handleOpen("PUT")}
          style={{ backgroundColor: customColors[1], color: "white" }}
        >
          <CiEdit className="text-xl font-black text-white" />
        </Button>
      </Tooltip>

      <Tooltip title="Remover Frete" arrow>
        <Button
          id="DELETE"
          onClick={() => handleOpen("DELETE")}
          style={{ backgroundColor: customColors[2], color: "white" }}
        >
          <FaTrashAlt className="text-xl font-bold" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default Index;

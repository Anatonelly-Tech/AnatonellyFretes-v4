import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import CreateMobilePages from "./CreateMobilePages";

const DropdownMenuDemo = () => {
  const PagesNavBar = [
    {
      name: "Home",
      AllPages: [
        { title: "Home", path: "./Home" },
        {
          title: "Rastreamento de carga",
          path: "https://globaltransportes.log.br/fretes/login_system/login.php",
        },
      ],
      icon: <MdHomeFilled size={30} className="text-white" />,
    },
    {
      name: "Meus Fretes",
      AllPages: [
        { title: "Criar frete", path: "./CriarFrete" },
        { title: "Lista de fretes", path: "./ListaDeFretes" },
        {
          title: "Monitoramento e viagens",
          path: "./MonitoramentoEViagens",
        },
      ],
      icon: <FaBox size={30} className="text-white" />,
    },
    {
      name: "Buscar Fretes",
      AllPages: [
        { title: "Todos os Fretes", path: "./TodosFretes" },
        { title: "Cotação de fretes", path: "./CotacaoFretes" },
      ],
      icon: <LuSearch size={30} className="text-white" />,
    },
    {
      name: "Gerenciamento de Riscos",
      AllPages: [
        { title: "Cadastro e consulta", path: "./CadastroConsulta" },
        { title: "Listagem", path: "./Listagem" },
      ],
      icon: <IoShieldCheckmark size={30} className="text-white" />,
    },
    {
      name: "Relatorios",
      AllPages: [
        { title: "Dados dos Fretes", path: "./DadosDosFretes" },
        { title: "Análise de rota", path: "./AnaliseDeRota" },
        { title: "Avaliação da empresa", path: "./AvaliacaoDaEmpresa" },
      ],
      icon: <IoDocumentText size={30} className="text-white" />,
    },
    {
      name: "Minha Conta",
      AllPages: [
        { title: "Gestão de Acessos", path: "./GestaodeAcessos" },
        { title: "Minhas Faturas", path: "./MinhasFaturas" },
        { title: "Consumo de Produtos", path: "./ConsumoDeProdutos" },
        {
          title: "Identificação de pagamento",
          path: "./IdentificacaoDePagamento",
        },
      ],
      icon: <FaUser size={30} className="text-white" />,
    },
    {
      name: "Sair",
      AllPages: [{ title: "Sair", path: "/" }],
      icon: <ImExit size={30} className="text-white" />,
    },
  ];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {PagesNavBar.map((page, index) => (
        <CreateMobilePages key={index} page={page} />
        ))}    
        
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;

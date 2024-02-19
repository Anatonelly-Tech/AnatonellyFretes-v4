"use client";
// Libs
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// Documentação da lib
// Dialog: https://www.radix-ui.com/primitives/docs/components/dialog
// NavigationMenu: https://www.radix-ui.com/primitives/docs/components/navigation-menu

// Icons
import { FaBox, FaUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { CreatedPages } from "./CreatedPages";
import { LuSearch } from "react-icons/lu";
import { IoDocumentText, IoShieldCheckmark } from "react-icons/io5";

export function NavBar() {
  const [navBarActive, setNavBarActive] = useState(false);
  const [animationRoot, setAnimationRoot] = useState(false);

  const PagesNavBar = [
    {
      name: "Home",
      AllPages: [
        { title: "Home", path: "./" },
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
        { title: "Monitoramento e viagens", path: "./MonitoramentoEViagens" },
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
  ];

  function HandleClickOpenNav() {
    setTimeout(() => {
      setNavBarActive(!navBarActive);
    }, 150);
  }
  function HadleAddAnimation() {
    HandleClickOpenNav();
    setAnimationRoot(!animationRoot);
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger
          className="fixed top-0 left-1/2 -translate-x-1/2 w-60 h-10 bg-violet-600 text-white font-bold text-3xl rounded-b-xl  shadow-especial shadow-violet-950 hover:shadow-zinc-800"
          onClick={HadleAddAnimation}
        >
          MENU
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className={`${
              navBarActive ? "fixed inset-0 bg-black opacity-50" : "hidden"
            }`}
            onClick={HadleAddAnimation}
          />
          <button
            className="fixed top-0 left-1/2 -translate-x-1/2 w-60 h-10 bg-violet-600 text-white font-bold text-3xl rounded-b-xl  shadow-especial shadow-violet-950 hover:shadow-zinc-800"
            onClick={HadleAddAnimation}
          >
            MENU
          </button>
          <NavigationMenu.Root
            data-state={navBarActive ? true : false}
            className={`w-0 h-0 fixed top-0 left-1/2 ${
              navBarActive ? "visible animate-fadeIn" : "invisible"
            }
            ${animationRoot ? "" : "animate-fadeOut"}
            `}
          >
            <NavigationMenu.List
              className={` flex gap-3 fixed top-16 left-1/2 -translate-x-1/2  items-center justify-center w-auto h-16 `}
            >
              {PagesNavBar.map((page, index) => (
                <CreatedPages
                  key={index}
                  AllPages={page.AllPages}
                  icon={page.icon}
                  HadleAddAnimation={HadleAddAnimation}
                />
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

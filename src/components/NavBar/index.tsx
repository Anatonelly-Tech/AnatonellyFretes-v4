import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AiFillHome } from "react-icons/ai";
import { FaBox, FaUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { CreatedPages } from "./CreatedPages";
import { title } from "process";
import { LuSearch } from "react-icons/lu";
import { IoDocumentText, IoShieldCheckmark } from "react-icons/io5";

export function NavBar() {
  const PagesNavBar = [
    {
      name: "Home",
      AllPages: [{ title: "Home", path: "./home" }],
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

  return (
    <NavigationMenu.Root className="fixed w-full h-full top-20 left-52 right-52  rounded-xl ">
      <NavigationMenu.List className="flex gap-2 fixed items-center justify-center w-9/12 h-16 bg-zinc-500">
        {PagesNavBar.map((page, index) => (
          <CreatedPages
            key={index}
            name={page.name}
            AllPages={page.AllPages}
            icon={page.icon}
          />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

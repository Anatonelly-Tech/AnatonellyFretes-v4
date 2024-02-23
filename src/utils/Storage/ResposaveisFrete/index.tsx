interface ResponsaveisFreteClass {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  contactForm: string;
  isAdmin: string;
  departament: string;
  password: string;
}

const ResponsaveisFrete: ResponsaveisFreteClass[] = [
  {
    id: "1",
    contactForm: "onlyCall",
    cpf: "222.222.222-22",
    departament: "Diretoria",
    email: "pedrinReiDela@gmail.com",
    isAdmin: "Administrador",
    name: "pedrinhoInho",
    password: "123",
    phone: "(69) 69696-9696",
  },
];

export default ResponsaveisFrete;

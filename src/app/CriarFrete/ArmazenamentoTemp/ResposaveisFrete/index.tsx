interface ResponsaveisFreteClass {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  formaContato: string;
  nivelAcesso: string;
  cargo: ["adimistrativo", "operacional", "financeiro", "comercial", "diretoria", "gerencial"];
  senha: string;
}

const ResponsaveisFrete: ResponsaveisFreteClass[] = [];

export default ResponsaveisFrete;

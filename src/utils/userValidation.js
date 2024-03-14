import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome completo é obrigatório"),
  cpf: Yup.string()
    .required("CPF é obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g, "CPF inválido"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: Yup.string()
    .required("Telefone é obrigatório")
    .matches(/\(\d{2,}\) \d{4,}\-\d{4}/g, "Telefone inválido"),
  password: Yup.string().required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas não coincidem"),
  cep: Yup.string()
    .required("CEP é obrigatório")
    .matches(/^\d{5}\-\d{3}$/g, "CEP inválido"),
  city: Yup.string().required("Cidade é obrigatória"),
  state: Yup.string().required("Estado é obrigatório"),
  neighborhood: Yup.string().required("Bairro é obrigatório"),
  street: Yup.string().required("Rua é obrigatória"),
  number: Yup.string().required("Número é obrigatório"),
  complement: Yup.string(),
  picture: Yup.mixed().required("File is required"),
});

import * as Yup from 'yup';

export const responsibleValidationSchema = Yup.object().shape({
  name: Yup.string().required('Nome completo é obrigatório'),
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g, 'CPF inválido'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/\(\d{2,}\) \d{4,}\-\d{4}/g, 'Telefone inválido'),
  contactWay: Yup.string().required('Forma de contato é obrigatória'),
  role: Yup.string().required('Tipo de usuário é obrigatório'),
  department: Yup.string().required('Departamento é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .required('A confirmação da senha é obrigatória')
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem'),
});

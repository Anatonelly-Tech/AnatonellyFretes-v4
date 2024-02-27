import * as Yup from 'yup';

export const createFreightValidationSchema = Yup.object().shape({
  // Page1
  collectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  collectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  radioValueLocalizacao: Yup.string().required(
    'Localização do frete é obrigatória'
  ),
  // Page 2
  product: Yup.string().required('Produto é obrigatório'),
  species: Yup.string().required('Espécie é obrigatória'),
  weight: Yup.string().required('Peso é obrigatório'),
  unitMeasurement: Yup.string().required('Unidade de medida é obrigatória'),
  volume: Yup.string(),
  weightCuban: Yup.string(),
  sizeCubic: Yup.string(),
  length: Yup.string(),
  width: Yup.string(),
  height: Yup.string(),
  radioValueTipoCarga: Yup.string().required('Tipo de carga é obrigatório'),
  radioValueLona: Yup.string().required('Lona é obrigatória'),
  radioValueRastreador: Yup.string().required('Rastreador é obrigatório'),

  // Page 4
  radioValueValor: Yup.string().required('Valor é obrigatório.'),
  radioValuePedagio: Yup.string().required('Pedagio é obrigatório.'),
  freightPrice: Yup.string().required('O Valor do frete é obrigatório.'),
  valueCalculation: Yup.string().required('O Cálculo do valor é obrigatório.'),
  paymentForm: Yup.string().required('A forma de pagamento é obrigatória.'),
  advancePrice: Yup.string(),
  comments: Yup.string(),
  radioPacoteEscolhido: Yup.string().required('Escolha o pacote do frete.'),
});

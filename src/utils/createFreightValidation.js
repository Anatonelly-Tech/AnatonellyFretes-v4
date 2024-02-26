import * as Yup from 'yup';

export const createFreightValidationSchema = Yup.object().shape({
  // page1
  collectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  collectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  radioValueLocalizacao: Yup.string().required(
    'Localização do frete é obrigatória'
  ),
  // page 2
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
});

export const createFreightPage2ValidationSchema = Yup.object().shape({});

export const createFreightPage3ValidationSchema = Yup.object().shape({});

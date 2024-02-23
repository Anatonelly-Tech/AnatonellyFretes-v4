import * as Yup from 'yup';

export const createFreightPage1ValidationSchema = Yup.object().shape({
  colectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  colectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  localizacaoFrete: Yup.string().required('Localização do frete é obrigatória'),
});


export const createFreightPage2ValidationSchema = Yup.object().shape({
  colectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  colectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  LocalizacaoFrete: Yup.string().required('Localização do frete é obrigatória'),
});


export const createFreightPage3ValidationSchema = Yup.object().shape({
  colectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  colectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  LocalizacaoFrete: Yup.string().required('Localização do frete é obrigatória'),
});


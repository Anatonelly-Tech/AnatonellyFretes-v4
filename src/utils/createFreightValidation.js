import * as Yup from 'yup';

export const createFreightPage1ValidationSchema = Yup.object().shape({
  collectCity: Yup.string().required('Cidade de coleta é obrigatória'),
  collectDate: Yup.string().required('Data de coleta é obrigatória'),
  deliveryCity: Yup.string().required('Cidade de entrega é obrigatória'),
  deliveryDate: Yup.string().required('Data de entrega é obrigatória'),
  radioValueLocalizacao: Yup.string().required(
    'Localização do frete é obrigatória'
  ),
});

//refazer schemas

export const createFreightPage2ValidationSchema = Yup.object().shape({
  



});

export const createFreightPage3ValidationSchema = Yup.object().shape({});

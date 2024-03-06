import { api } from '@/services/api';

const BASE_URL = '/formData';

export const getAllFreight = async () => api.get(`${BASE_URL}`);

export const putFreight = async (idForm, data) =>
  api.put(`${BASE_URL}/${idForm}`, data);

export const changeStatus = async (idForm, idResponsible, statusItem) => {
  api.put(`${BASE_URL}?idForm=${idForm}`, {
    idResponsible,
    statusItem,
  });
  window.location.reload(true);
};

export const deleteFreight = async (idForm) => {
  api.delete(`${BASE_URL}/${idForm}`);
  window.location.reload(true);
};

export const getFreightById = async (idForm) =>
  api.get(`${BASE_URL}/${idForm}`);

export const postFreight = async ({
  name,
  collectCity,
  collectDate,
  deliveryCity,
  deliveryDate,
  product,
  species,
  weight,
  volume,
  weightCuban,
  sizeCubic,
  length,
  height,
  width,
  freightPrice,
  paymentForm,
  comments,
  advancePrice,
  valueCalculation,
  radioValueLocalizacao,
  radioValueTipoCarga,
  radioValueLona,
  radioValueRastreador,
  unitMeasurement,
  radioValueValor,
  radioValuePedagio,
  radioPacoteEscolhido,
  veiculos,
  carrocerias,
  idResponsible,
}) =>
  api.post(`${BASE_URL}`, {
    name,
    collectCity,
    collectDate,
    deliveryCity,
    deliveryDate,
    product,
    species,
    weight,
    volume,
    weightCuban,
    sizeCubic,
    length,
    height,
    width,
    freightPrice,
    paymentForm,
    comments,
    advancePrice,
    valueCalculation,
    radioValueLocalizacao,
    radioValueTipoCarga,
    radioValueLona,
    radioValueRastreador,
    unitMeasurement,
    radioValueValor,
    radioValuePedagio,
    radioPacoteEscolhido,
    veiculos,
    carrocerias,
    idResponsible,
  });

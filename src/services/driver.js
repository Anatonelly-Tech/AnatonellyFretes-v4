import { api } from "@/services/api";

const BASE_URL = "/driver";

export const getAllDrivers = async () => api.get(`${BASE_URL}`);

export const getDriverById = async (id) => api.get(`${BASE_URL}/${id}`);

export const getDriverByCPF = async (cpf) => api.get(`${BASE_URL}Auth/${cpf}`);

export const deleteDriver = async (id) => {
  api.delete(`${BASE_URL}/${id}`);
  window.location.reload(true);
};

export const putDriver = async (
  id,
  name,
  email,
  role,
  phone,
  vehicle,
  password,
  cep,
  city,
  state,
  neighborhood,
  street,
  number,
  complement,
  picture
) => {
  api.put(`${BASE_URL}/${id}`, {
    name,
    email,
    role,
    phone,
    password,
    cep,
    city,
    vehicle,
    state,
    neighborhood,
    street,
    number,
    complement,
    picture,
  });
  window.location.reload(true);
};

export const postDriverFreight = async ({
  name,
  email,
  role,
  phone,
  password,
  cep,
  cpf,
  city,
  vehicle,
  state,
  neighborhood,
  street,
  number,
  complement,
  picture,
}) =>
  api.post(`${BASE_URL}`, {
    name,
    email,
    role,
    phone,
    password,
    cep,
    vehicle,
    cpf,
    city,
    state,
    neighborhood,
    street,
    number,
    complement,
    picture,
  });

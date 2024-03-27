import { api } from '@/services/api';

const BASE_URL = '/user';

export const getAllUsers = async () => api.get(`${BASE_URL}`);

export const getUserById = async (id) => api.get(`${BASE_URL}/${id}`);

export const getUserByEmail = async (email) =>
  api.get(`${BASE_URL}Auth/${email}`);

export const deleteUser = async (id) => {
  api.delete(`${BASE_URL}/${id}`);
  window.location.reload(true);
};

export const putUser = async (
  id,
  name,
  email,
  role,
  phone,
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
    state,
    neighborhood,
    street,
    number,
    complement,
    picture,
  });
  window.location.reload(true);
};
export const putUserByEmailEmployees = async (email, employeesID) => {
  api.put(`${BASE_URL}Att/${email}`, {
    employeesID,
  });
};

export const removeRespByUserEmail = async (email, employeesID) => {
  api.put(`${BASE_URL}Rem/${[email]}`, {
    employeesID,
  });
};

export const putUserByEmailFreights = async (email, freightsID) => {
  api.put(`${BASE_URL}Att/${email}`, {
    freightsID,
  });
  return window.location.reload(true);
};

export const removeFreightByUserEmail = async (email, freightsID) => {
  api.put(`${BASE_URL}Rem/${[email]}`, {
    freightsID,
  });
};

export const postUserFreight = async ({
  name,
  email,
  role,
  phone,
  password,
  cep,
  city,
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
    city,
    state,
    neighborhood,
    street,
    number,
    complement,
    picture,
  });

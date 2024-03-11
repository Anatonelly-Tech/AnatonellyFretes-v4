import { api } from '@/services/api';

const BASE_URL = '/responsible';

export const getAllResponsibles = async () => api.get(`${BASE_URL}`);

export const getResponsibleById = async (id) => api.get(`${BASE_URL}/${id}`);

export const getResponsibleByEmail = async (email) => api.get(`${BASE_URL}Auth/${email}`);

export const deleteResponsible = async (id) => {
  api.delete(`${BASE_URL}/${id}`);
  window.location.reload(true);
};

export const putResponsible = async (id,data) => {
  api.put(`${BASE_URL}/${id}`,{
    data
  });
  window.location.reload(true);
}

export const postResponsibleFreight = async ({
  name,
  cpf,
  email,
  phone,
  contactWay,
  department,
  role,
  password,
}) =>
  api.post(`${BASE_URL}`, {
    name,
    cpf,
    email,
    phone,
    contactWay,
    department,
    role,
    password,
  });

import { api } from '@/services/api';

const BASE_URL = '/responsible';


export const getAllResponsibles = async () => api.get(`${BASE_URL}`);

export const postResponsibleFreight = async ({
  name,
  cpf,
  email,
  phone,
  contactWay,
  department,
  isAdmin,
  password,
}) =>
  api.post(`${BASE_URL}`, {
    name,
    cpf,
    email,
    phone,
    contactWay,
    department,
    isAdmin,
    password,
  });

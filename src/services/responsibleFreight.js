import { api } from '@/services/api';

const BASE_URL = '/responsible';

export const getAllClocksByID = async (id) => api.get(`${BASE_URL}/${id}`);

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

export const clockOut = async ({ hash, userId, endAt }) =>
  api.put(`${BASE_URL}`, { userId, hash, endAt });

export const deleteClock = async (hash) => api.delete(`${BASE_URL}/${hash}`);

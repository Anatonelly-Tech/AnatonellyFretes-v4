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

export const putUser = async (id, data) => {
  api.put(`${BASE_URL}/${id}`, {
    data,
  });
  window.location.reload(true);
};
export const putUserByEmail = async (email, employeesID) => {
  api.put(`${BASE_URL}Att/${email}`, {
    employeesID,
  });
};

export const postUserFreight = async ({ name, email, password, role }) =>
  api.post(`${BASE_URL}`, {
    name,
    email,
    password,
    role,
  });

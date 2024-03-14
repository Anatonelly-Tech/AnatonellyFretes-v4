import axios from "axios";

import { API, APICEP } from "@/config/app";

export const api = axios.create({
  baseURL: API,
});

export const apicep = axios.create({
  baseURL: APICEP,
});

import { apicep } from "@/services/api";

const BASE_URL = "json";

export const getCEP = async (cep) => apicep.get(`${cep}/${BASE_URL}`);

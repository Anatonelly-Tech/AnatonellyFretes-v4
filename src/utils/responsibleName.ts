import { getResponsibleById } from '@/services/responsibleFreight';

export const arrayOfResponsibles = async ( data : any) => {

  const responsaveis = data.idResponsible
  
  const responsaveisArray = await Promise.all(responsaveis.map(async (item: any) => {
    const resp=  await getResponsibleById(item);
    return resp.data.response.name
  }));
  return responsaveisArray;
};
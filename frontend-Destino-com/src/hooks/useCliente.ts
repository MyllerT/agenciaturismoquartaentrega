import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { ClienteData } from '../interface/ClienteData';




const API_URL = 'http://localhost:8080/api';

const fetchClientes = async (): Promise<AxiosResponse<ClienteData[]>> => {
  try {
    const response = await axios.get<ClienteData[]>(`${API_URL}/api/clienteDestino`);
    return response;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error; // Lança o erro para ser tratado no código que chama essa função
  }
};

interface UseClientesResult extends UseQueryResult<AxiosResponse<ClienteData[]>> {

}

export function useClientes() {
  const query = useQuery<AxiosResponse<ClienteData[]>, unknown>({
    queryFn: fetchClientes,
    queryKey: ['clientes'],
    retry: 2,
  }) as UseClientesResult;

  return {
    ...query,
    clientes: query.data?.data || [], 
  };
}

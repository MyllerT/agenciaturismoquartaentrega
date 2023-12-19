import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ClienteData } from '../interface/ClienteData';

const API_URL = 'http://localhost:8080/api';

const postCliente = async (data: ClienteData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/api/clienteDestino', data);
    return response;
}

export function useClientesMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postCliente,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['clientes']);
        }
    });

    return mutate;
}

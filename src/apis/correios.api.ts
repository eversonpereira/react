import { configs } from './../configs/index';
import axios from 'axios';

const baseURL = configs.apis.correios;

export interface GetZipCode {
    resultado: string;
    resultado_txt: string;
    uf: string;
    cidade: string;
    bairro: string;
    tipo_logradouro: string;
    logradouro: string;
}

// aqui como preciso esperar ele responder para ter o dado da cidade, utiliza o async com um await na request pedindo para ele esperar. No caso do github, não usa await pq não trata.
export const getZipCode = async (zipCode: number) => {
    const request = await axios.request<GetZipCode>({
        baseURL,
        params: {
            cep: zipCode,
            formato: 'jsonp'
        }
    });

    if (request.data.cidade === '') {
        throw new Error("CEP não encontrado");
    }
    return request;
}
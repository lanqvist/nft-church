import client from '@utils/ky';

import { TGiftsBody, TPaymnetBody, TPaymnetData, TTransactionData } from '../types';

export async function sendGifts(uuid: string, data: TGiftsBody) {
    try {
        const response = await client
            .post(`/api/payments/${uuid}`, {
                json: data,
            })
            .json();

        return response as { url: string; };
    } catch (error) {
        console.error("Can't fetch gift data", error);
        throw error;
    }
}

export async function payment(data: TPaymnetBody): Promise<TPaymnetData> {
    try {
        const response = await client
            .post(`/api/payments`, {
                json: data,
            })
            .json<TPaymnetData>();

        return response;
    } catch (error) {
        console.error("Can't fetch payment data", error);
        throw error;
    }
}

export async function getTransactionData(uuid): Promise<TTransactionData> {
    try {
        const response = await client.get(`/api/payments/${uuid}`).json<TTransactionData>();

        return response;
    } catch (error) {
        console.error("Can't fetch transaction data", error);
        throw error;
    }
}

import { TGiftsBody } from '@/types/gifts';
import { TPaymnetBody, TPaymnetData, TTransactionData } from '@/types/payment';
import client from '@utils/ky';

export async function sendGifts(uuid: string, data: TGiftsBody) {
    try {
        const response = await client
            .post(`/gifts/${uuid}`, {
                json: data,
            })
            .json();

        return response;
    } catch (error) {
        console.error("Can't fetch gift data", error);
        throw error;
    }
}

export async function payment(data: TPaymnetBody): Promise<TPaymnetData> {
    try {
        const response = await client
            .post(`/payments`, {
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
        const response = await client.get(`/payments/${uuid}`).json<TTransactionData>();

        return response;
    } catch (error) {
        console.error("Can't fetch transaction data", error);
        throw error;
    }
}

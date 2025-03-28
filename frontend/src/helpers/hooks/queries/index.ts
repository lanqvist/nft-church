import { useMutation, useQuery } from '@tanstack/react-query';

import { getTransactionData, payment, sendGifts } from '@api/index';

import { TGiftsBody, TPaymnetBody } from '../../../types';

export function useTransactionData(uuid) {
    return useQuery({
        queryKey: ['transaction_data', uuid],
        queryFn: () => getTransactionData(uuid),
        retry: 3,
        refetchOnWindowFocus: false,
        enabled: Boolean(uuid),
    });
}

export function useSendGifts(uuid) {
    return useMutation({
        mutationFn: (payData: TGiftsBody) => sendGifts(uuid, payData),
    });
}

export function usePayment() {
    return useMutation({
        mutationFn: (payData: TPaymnetBody) => payment(payData),
    });
}

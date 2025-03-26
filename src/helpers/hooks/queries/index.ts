import { useMutation, useQuery } from '@tanstack/react-query';

import { getTransactionData, payment, sendGifts } from '@/api';
import { TGiftsBody } from '@/types/gifts';
import { TPaymnetBody } from '@/types/payment';

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

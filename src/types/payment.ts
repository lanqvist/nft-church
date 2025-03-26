export type TPaymnetBody = {
    amount: {
        value: string;
    };
    email: string;
};

export type TPaymnetData = {
    id: string;
    status: string;
    paid: boolean;
    amount: {
        value: string;
    };
    confirmation: {
        confirmation_token: string;
        return_url: string;
    };
    description: string;
};

export enum PaymentStatus {
    PENDING = 'pending',
    WAITING_FOR_CAPTURE = 'waiting_for_capture',
    SUCCEEDED = 'succeeded',
    CANCELED = 'canceled',
}

export type TTransactionData = {
    status: PaymentStatus;
    paid: boolean;
    amount: {
        value: string;
    };
};

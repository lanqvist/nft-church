export enum GiftType {
    Prayer = 'Prayer',
    Engraving = 'Engraving',
    Book = 'Book',
}

export type TGiftsBody = {
    gifts: Array<{
        giftType: GiftType;
        name: string;
        address?: string;
    }>;
    platform_url: string;
};

import { ReactNode } from 'react';

export type CardProps = {
    title: string;
    content: ReactNode;
    imageUrl: string;
    invertedTitle?: boolean;
    className?: string;
};

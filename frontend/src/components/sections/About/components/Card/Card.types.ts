import type { ReactNode } from 'react';

export type CardProps = {
    title: string;
    description: string;
    className?: string;
    icon?: ReactNode;
    footerAddons?: ReactNode;
};

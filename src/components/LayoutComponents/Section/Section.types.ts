import { PropsWithChildren } from 'react';

export type SectionProps = PropsWithChildren<{
    title?: string;
    className?: string;
    containerClassName?: string;
    titleClassName?: string;
}>;

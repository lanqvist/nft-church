import { FactObject } from '@components/sections/Facts/models/facts';

export type ListItemProps = {
    factObject: FactObject;
    isActive: boolean;
    onClick: (factObjectId: string) => void;
};

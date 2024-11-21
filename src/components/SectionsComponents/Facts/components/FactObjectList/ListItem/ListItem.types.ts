import { FactObject } from '@components/SectionsComponents/Facts/models/facts';

export type ListItemProps = {
    factObject: FactObject;
    isActive: boolean;
    onClick: (factObjectId: string) => void;
};

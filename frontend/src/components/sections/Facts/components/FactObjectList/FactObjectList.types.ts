import { FactObject } from '../../models/facts';

export type FactObjectListProps = {
    factObjects: FactObject[];
    currentFactObjectId: string;
    onFactObjectClick: (factObjectId: string) => void;
    className?: string;
};

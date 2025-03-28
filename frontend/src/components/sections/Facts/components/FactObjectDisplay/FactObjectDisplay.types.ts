import { FactObject } from '../../models/facts';

export type FactObjectProps = {
    factObject: FactObject;
    onFactClick: (factId: string) => void;
    currentFactId?: string;
};

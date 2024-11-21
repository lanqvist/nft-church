import { Fact } from '../../models/facts';

export type FactButtonProps = {
    fact: Fact;
    onClick: (factId: string) => void;
};

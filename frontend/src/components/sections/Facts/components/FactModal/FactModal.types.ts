import { Fact, FactObject } from '../../models/facts';

export type FactModalProps = {
    isOpen: boolean;
    factObject: FactObject;
    fact: Fact;
    onClose: () => void;
    onNextFactClick: () => void;
};

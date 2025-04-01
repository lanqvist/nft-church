import { FC, useCallback } from 'react';

import { FactButton } from '../FactButton';

import styles from './FactObjectDisplay.module.css';
import { FactObjectProps } from './FactObjectDisplay.types';

export const FactObjectDisplay: FC<FactObjectProps> = ({ currentFactId, factObject, onFactClick }) => {
    const handleFactClick = useCallback(
        (factId: string) => {
            onFactClick(factId);
        },
        [onFactClick]
    );

    return (
        <div className={styles.root}>
            <img src={factObject.imageSrc} alt={factObject.name} className={styles.image} />
            {factObject.facts.map((fact) => (
                <FactButton isActive={currentFactId === fact.id} key={fact.id} fact={fact} onClick={handleFactClick} />
            ))}
        </div>
    );
};

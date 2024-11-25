import { ActionIcon } from '@mantine/core';
import { FC, useCallback } from 'react';

import QuestionMarkIcon from './assets/icons/questionMark.svg?react';
import styles from './FactButton.module.css';
import { FactButtonProps } from './FactButton.types';

export const FactButton: FC<FactButtonProps> = ({ fact, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(fact.id);
    }, [fact, onClick]);

    return (
        <ActionIcon
            onClick={handleClick}
            className={styles.root}
            variant="filled"
            color="gray"
            style={{
                top: fact.position.top,
                left: fact.position.left,
            }}
        >
            <QuestionMarkIcon className={styles.icon} />
        </ActionIcon>
    );
};

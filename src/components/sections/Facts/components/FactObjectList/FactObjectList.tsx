import clsx from 'clsx';
import { FC } from 'react';

import styles from './FactObjectList.module.css';
import { FactObjectListProps } from './FactObjectList.types';
import { ListItem } from './ListItem';

export const FactObjectList: FC<FactObjectListProps> = ({
    factObjects,
    currentFactObjectId,
    onFactObjectClick,
    className,
}) => (
    <div className={clsx(styles.root, className)}>
        <ul className={styles.list}>
            {factObjects.map((obj) => {
                const isActive = currentFactObjectId === obj.id;
                return (
                    <li key={obj.id} className={styles.listItem}>
                        <ListItem factObject={obj} isActive={isActive} onClick={onFactObjectClick} />
                    </li>
                );
            })}
        </ul>
    </div>
);

import clsx from 'clsx';
import { FC, useCallback } from 'react';

import styles from './ListItem.module.css';
import { ListItemProps } from './ListItem.types';

export const ListItem: FC<ListItemProps> = ({ factObject, isActive, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(factObject.id);
    }, [factObject, onClick]);

    return (
        <button
            type="button"
            className={clsx(styles.button, {
                [styles.active]: isActive,
            })}
            onClick={handleClick}
            disabled={isActive}
        >
            <img src={factObject.imageSrc} alt={factObject.name} className={styles.image} />
        </button>
    );
};

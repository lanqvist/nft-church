import { FC } from 'react';

import styles from './Card.module.css';
import { CardProps } from './Card.types';

// TODO: После согласования дизайна карточки, нужно будет отобразить и другие данные
export const Card: FC<CardProps> = ({ title, imageUrl }) => (
    <div className={styles.root}>
        <img className={styles.image} src={imageUrl} alt={title} />
    </div>
);

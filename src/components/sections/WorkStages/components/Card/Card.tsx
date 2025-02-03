import { FC } from 'react';

import styles from './Card.module.css';
import { CardProps } from './Card.types';

// TODO: После согласования дизайна карточки, нужно будет отобразить и другие данные
export const Card: FC<CardProps> = ({ title, imageUrl, description, date }) => (
    <div className={styles.root}>
        <img className={styles.image} src={imageUrl} alt={title} />
        <div className={styles.front}>
            <div className={styles.date}>{date}</div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
);

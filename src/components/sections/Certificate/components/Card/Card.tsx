import { Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './Card.module.css';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ title, description, className, icon, footerAddons }) => (
    <div className={clsx(styles.root, className)}>
        <div className={styles.content}>
            <div className={styles.titleWrapper}>
                {icon && <div className={styles.iconWrapper}>{icon}</div>}
                <Title className={styles.title} order={4}>
                    {title}
                </Title>
            </div>
            <Text className={styles.description}>{description}</Text>
            <div>{footerAddons}</div>
        </div>
    </div>
);

import { Flip } from '@gfazioli/mantine-flip';
import { Button, Image, Paper, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './Card.module.css';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ title, content, imageUrl, invertedTitle, className }) => (
    <Flip className={className} perspective="10000px">
        <Paper className={styles.paper} radius="md">
            <Image className={styles.image} src={imageUrl} alt={title} />
            <Flip.Target className={styles.flipTarget}>
                <div className={styles.content}>
                    <Title
                        className={clsx(styles.title, {
                            [styles.invertedTitle]: invertedTitle,
                        })}
                        size="h3"
                    >
                        {title}
                    </Title>
                    <Button className={clsx(styles.button, styles.openButton)} variant="outline" color="gray" fullWidth>
                        Подробнее
                    </Button>
                </div>
            </Flip.Target>
        </Paper>
        <Paper className={styles.paper} radius="md">
            <Flip.Target className={styles.flipTarget}>
                <div className={styles.content}>
                    <Title className={styles.title} size="h3">
                        {title}
                    </Title>
                    <Text className={styles.text}>{content}</Text>
                </div>
            </Flip.Target>
        </Paper>
    </Flip>
);

import { Drawer, Title, ActionIcon, CloseIcon, Text, Button } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './FactModal.module.css';
import { FactModalProps } from './FactModal.types';

export const FactModal: FC<FactModalProps> = ({ isOpen, factObject, fact, onClose, onNextFactClick }) => (
    <Drawer
        className={styles.drawer}
        classNames={{ content: styles.drawerContent, body: styles.drawerBody }}
        onClose={onClose}
        withCloseButton={false}
        opened={isOpen}
        position="bottom"
    >
        <Drawer.Header className={styles.drawerHeader}>
            <Title className={styles.drawerTitle} order={4}>
                Интересный факт
            </Title>
            <ActionIcon className={styles.drawerCloseButton} variant="filled" color="gray" onClick={onClose}>
                <CloseIcon className={styles.closeIcon} />
            </ActionIcon>
        </Drawer.Header>
        <div className={styles.factTextWrapper}>
            <Title className={styles.factTitle} order={4}>
                {factObject?.name}
            </Title>
            <Text className={styles.factText}>{fact?.text}</Text>
        </div>
        <div className={styles.buttons}>
            <Button
                className={clsx(styles.button, styles.closeButton)}
                variant="outline"
                color="green"
                fullWidth
                onClick={onClose}
            >
                Закрыть
            </Button>
            <Button
                className={clsx(styles.button, styles.nextFactButton)}
                variant="filled"
                color="green"
                fullWidth
                onClick={onNextFactClick}
            >
                Следующий факт
            </Button>
        </div>
    </Drawer>
);

import { Drawer, ActionIcon, CloseIcon, Button, FocusTrap } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import { NAVBAR_ITEMS } from '../../Navbar.consts';

import styles from './MobileMenu.module.css';
import { MobileMenuProps } from './MobileMenu.types';

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => (
    <Drawer
        className={styles.root}
        classNames={{ content: styles.drawerContent, body: styles.drawerBody }}
        onClose={onClose}
        withCloseButton={false}
        opened={isOpen}
        position="top"
    >
        <FocusTrap.InitialFocus />
        <Drawer.Header className={styles.drawerHeader}>
            <ActionIcon className={styles.drawerCloseButton} variant="filled" color="gray" onClick={onClose}>
                <CloseIcon className={styles.closeIcon} />
            </ActionIcon>
        </Drawer.Header>
        <nav className={styles.content}>
            <ul className={styles.list}>
                {NAVBAR_ITEMS.map(({ name }) => (
                    <li key={name} className={styles.listItem}>
                        <Button
                            className={styles.navButton}
                            classNames={{ inner: styles.navButtonInner }}
                            variant="outline"
                            color="green"
                            fullWidth
                        >
                            {name}
                        </Button>
                    </li>
                ))}
            </ul>
            <Button className={clsx(styles.button)} variant="filled" color="green" fullWidth onClick={onClose}>
                Пожертвовать
            </Button>
        </nav>
    </Drawer>
);

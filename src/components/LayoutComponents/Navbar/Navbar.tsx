import { Button } from '@mantine/core';

import styles from './Navbar.module.css';

export const Navbar = () => (
    <nav className={styles.root}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Button className={styles.button} variant="transparent" color="gray">
                    О проекте
                </Button>
            </li>
            <li className={styles.listItem}>
                <Button className={styles.button} variant="transparent" color="gray">
                    Цель сбора
                </Button>
            </li>
            <li className={styles.listItem}>
                <Button className={styles.button} variant="transparent" color="gray">
                    О храме
                </Button>
            </li>
        </ul>
    </nav>
);

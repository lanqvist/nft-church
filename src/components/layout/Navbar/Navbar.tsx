import { ActionIcon, Button } from '@mantine/core';
import { useCallback, useState } from 'react';

import MenuIcon from './assets/icons/menu.svg?react';
import { MobileMenu } from './components/MobileMenu';
import { NAVBAR_ITEMS } from './Navbar.consts';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = useCallback(() => {
        setIsMobileMenuOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handlePayment = () => {
        const universalLink = 'btripsexpenses://';
        window.location.href = universalLink;
    };

    return (
        <>
            <nav className={styles.root}>
                <ul className={styles.list}>
                    {NAVBAR_ITEMS.map(({ name }) => (
                        <li key={name} className={styles.listItem}>
                            <Button onClick={handlePayment} className={styles.button} variant="outline" color="green">
                                {name}
                            </Button>
                        </li>
                    ))}
                </ul>
                <ActionIcon className={styles.menuButton} variant="filled" color="gray" onClick={handleMobileMenuClick}>
                    <MenuIcon />
                </ActionIcon>
            </nav>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handleClose} navigate={handlePayment} />
        </>
    );
};

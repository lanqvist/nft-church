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
        const universalLink =
            'btripsexpenses://sbolidlogin/sberbankidsso?appLink=partner%3A%2F%2Fpartner.host%2Fauth&storeLink=https%3A%2F%2Fapps.apple.com%2Fuz%2Fapp%2F%25D0%25BC%25D0%25BE%25D0%25B9-%25D0%25B7%25D0%25B2%25D1%2583%25D0%25BA-hifi-%25D0%25BC%25D1%2583%25D0%25B7%25D1%258B%25D0%25BA%25D0%25B0-%25D0%25B8-%25D0%25BA%25D0%25BD%25D0%25B8%25D0%25B3%25D0%25B8%2Fid6443779583';
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

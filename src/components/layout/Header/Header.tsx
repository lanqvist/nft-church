import clsx from 'clsx';

import { Navbar } from '../Navbar';

import styles from './Header.module.css';

export const Header = () => (
    <header>
        <div className={clsx('container', styles.container)}>
            <Navbar />
        </div>
    </header>
);

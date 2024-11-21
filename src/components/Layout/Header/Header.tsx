import { Navbar } from '../Navbar';

import styles from './Header.module.css';

export const Header = () => (
    <header>
        <div className={styles.container}>
            <Navbar />
        </div>
    </header>
);

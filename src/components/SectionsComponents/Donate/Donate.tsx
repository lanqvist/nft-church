import { Section } from '@components/LayoutComponents/Section';

import churchImage from './assets/church.jpeg';
import { DonateForm } from './components/DonateForm';
import styles from './Donate.module.css';

export const Donate = () => (
    <Section title="Пожертвование">
        <div className={styles.content}>
            <div className={styles.left}>
                <img className={styles.image} src={churchImage} alt="Храм" />
            </div>
            <div className={styles.right}>
                <DonateForm />
            </div>
        </div>
    </Section>
);

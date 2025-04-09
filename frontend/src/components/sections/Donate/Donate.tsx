/* eslint-disable consistent-return */
import { FC, useEffect } from 'react';

import { Section } from '@components/layout/Section';
import { usePayment } from '@hooks/queries';

import churchImage from './assets/church.png';
import { DonateForm } from './components/DonateForm';
import styles from './Donate.module.css';

export const Donate: FC = () => {
    const { mutate, data, isPending } = usePayment();

    useEffect(() => {
        const confirmationUrl = data?.confirmation?.confirmation_url;

        if (confirmationUrl) {
            window.location.href = confirmationUrl;
        }
    }, [data])

    return (
        <Section title="Пожертвование" key="donate" id="donate">
            <div className={styles.content}>
                <div className={styles.left}>
                    <img className={styles.image} src={churchImage} alt="Храм" />
                </div>
                <div className={styles.right}>
                    <DonateForm setPaymentFormData={mutate} loading={isPending} />
                </div>
            </div>
        </Section>
    );
};

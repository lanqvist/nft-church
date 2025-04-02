import { Text, Title } from '@mantine/core';

import { Section } from '@components/layout/Section';

import styles from './Contacts.module.css';
import { Map } from './Map';

export const Contacts = () => (
    <Section className={styles.root}>
        <Map className={styles.map} />
        <div className={styles.content}>
            <div className={styles.info}>
                <Title order={3} className={styles.title}>
                    Контакты
                </Title>
                <Text className={styles.address} component="address">
                    Адрес: Россия, Чувашская респ.,
                    <br />
                    Чебоксары г, ул. Калинина 62
                </Text>

                <Text className={styles.phone}>Телефон: +7&nbsp;(8352) 58&#8209;41&#8209;40</Text>
            </div>
        </div>
    </Section>
);

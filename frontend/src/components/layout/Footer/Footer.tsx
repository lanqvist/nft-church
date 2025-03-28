import { Text } from '@mantine/core';
import clsx from 'clsx';

import styles from './Footer.module.css';

export const Footer = () => (
    <footer className={styles.root}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.top}>
                <a href="google.com" className={styles.link}>
                    <Text component="span">Реестр операторов ИС, зарегистрированных в Банке России</Text>
                </a>
                <a href="google.com" className={styles.link}>
                    <Text component="span">Правила информационной системы</Text>
                </a>
            </div>
            <div className={styles.bottom}>
                <Text className={styles.registered}>Зарегистрировано в реестре операторов информационных систем</Text>
                <Text className={styles.address}>Россия, Москва, 117997, ул. Вавилова, 19</Text>
                <div className={styles.copyrightWrapper}>
                    <Text className={styles.domain}>Сбер.ру</Text>
                    <Text className={styles.copyright}>
                        © 1997-2024 ПАО Сбербанк. Генеральная лицензия Банка России на осуществление банковских
                        операций №1481 от 11 августа 2015 года. Регистрационный номер — 1481.
                    </Text>
                </div>
            </div>
        </div>
    </footer>
);

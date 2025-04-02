import { Text } from '@mantine/core';
import clsx from 'clsx';

import styles from './Footer.module.css';
import { useDisclosure } from '@mantine/hooks';
import { PDFModal } from '@components/pdf-modal';

export const Footer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <footer className={styles.root}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.top}>
                <div className={styles.link} onClick={open}>
                    <Text component="span">Политика обработки персональных данных</Text>
                </div>
                <a href="google.com" className={styles.link}>
                    <Text component="span">Подробнее о фонде</Text>
                </a>
            </div>
        </div>
        <PDFModal opened={opened} close={close} />
    </footer>
)};

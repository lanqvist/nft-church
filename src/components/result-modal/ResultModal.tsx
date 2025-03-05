/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import Icon from './assets/check.svg?react';
import styles from './ResultModal.module.css';

export const ResultModal = ({ opened, close, token }) => {
    const isMobile = useMediaQuery('(max-width: 50em)');

    return (
        <Modal.Root
            opened={opened}
            onClose={close}
            fullScreen={isMobile}
            transitionProps={{ transition: 'fade', duration: 200 }}
            centered
            keepMounted
            size="lg"
        >
            <Modal.Overlay />
            <Modal.Content className={styles.content}>
                <Modal.Header className={styles.header}>
                    <div className={styles.title}>Подтверждение</div>
                    <Modal.CloseButton className={styles.closeIcon} />
                </Modal.Header>

                <Modal.Body className={styles.body}>
                    <Icon width={100} height={100} />
                    <div className={styles.title}>Вы успешно выбрали подарки!</div>
                    <div className={styles.description}>
                        Информация о ваших подарках отправлена на почту. Для получения NFT авторизуйтесь на платформе
                        Сбер «Цифровые активы», войдя по Сбер ID.
                    </div>
                    <img alt="token" src={token} className={styles.token} />
                </Modal.Body>
                <div className={styles.footer}>
                    <Button className={styles.button} variant="default" color="green" onClick={close}>
                        Отмена
                    </Button>
                </div>
            </Modal.Content>
        </Modal.Root>
    );
};

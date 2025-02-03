/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDisclosure } from '@mantine/hooks';

import { MessageModal } from '@components/message-modal';

import Icon from './assets/mail.svg?react';
import styles from './FloatingButton.module.css';

export const FloatingButton: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <div className={styles.floatingButton} onClick={open}>
                <Icon />
                <span>Послание от Владыки</span>
            </div>
            <MessageModal opened={opened} close={close} />
        </>
    );
};

/* eslint-disable consistent-return */
import { Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useEffect, useRef, useState, FC } from 'react';

import { Section } from '@components/layout/Section';

import churchImage from './assets/church.png';
import { DonateForm } from './components/DonateForm';
import styles from './Donate.module.css';

const PaymentModal = ({ opened, close, paymenyFormData }) => {
    const isMobile = useMediaQuery('(max-width: 50em)');
    const checkoutWidgetRef = useRef(null);

    const [isWidgetReady, setIsWidgetReady] = useState(false);

    useEffect(() => {
        setIsWidgetReady(!!checkoutWidgetRef.current);
    }, [checkoutWidgetRef, opened]);

    useEffect(() => {
        if (opened && paymenyFormData && isWidgetReady) {
            const checkout = new (window as any).YooMoneyCheckoutWidget({
                confirmation_token: paymenyFormData.confirmation.confirmation_token,
                return_url: paymenyFormData.confirmation.return_url ?? 'https://nft-church.netlify.app/',
                error_callback(error) {
                    console.error('Ошибка инициализации:', error);
                },
            });

            checkout.render('checkout-widget').then(() => {
                console.log('Платежная форма загружена');
            });

            return () => {
                checkout.destroy();
            };
        }
    }, [opened, paymenyFormData, isWidgetReady]);

    return (
        <Modal.Root
            opened={opened}
            onClose={close}
            // title="Modal title"
            fullScreen={isMobile}
            transitionProps={{ transition: 'fade', duration: 200 }}
            centered
            keepMounted
            size="xl"

            // onEnterTransitionEnd={() => {
            //     if (opened && paymenyFormData && isWidgetReady) {
            //         const checkout = new window.YooMoneyCheckoutWidget({
            //             confirmation_token: paymenyFormData.confirmation.confirmation_token,
            //             return_url: paymenyFormData.confirmation.return_url ?? 'https://nft-church.netlify.app/',
            //             error_callback(error) {
            //                 console.error('Ошибка инициализации:', error);
            //             },
            //         });

            //         console.log('Платежная форма checkout', checkout);
            //         checkout.render('checkout-widget').then(() => {
            //             console.log('Платежная форма загружена');
            //         });

            //         return () => {
            //             checkout.destroy();
            //         };
            //     }
            // }}
            // keepMounted={}
        >
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Пожертвовать</Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>

                <Modal.Body>
                    <div
                        style={{
                            width: '100%',
                            height: '468px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        ref={checkoutWidgetRef}
                        id="checkout-widget"
                    />
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export const Donate: FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [paymenyFormData, setPaymentFormData] = useState(false);
    return (
        <Section title="Пожертвование" key="donate" id="donate">
            <div className={styles.content}>
                <div className={styles.left}>
                    <img className={styles.image} src={churchImage} alt="Храм" />
                </div>
                <div className={styles.right}>
                    <DonateForm openPaymentModal={open} setPaymentFormData={setPaymentFormData} />
                </div>
            </div>
            <PaymentModal opened={opened} close={close} paymenyFormData={paymenyFormData} />
        </Section>
    );
};

import { Button, Checkbox, Input, NumberInput, RadioGroup, Title } from '@mantine/core';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { v4 as uuidv4 } from 'uuid';

import { ky } from '@utils/ky';

import { AmountRadioButton } from '../AmountRadioButton';

import { AMOUNTS } from './DonateForm.consts';
import styles from './DonateForm.module.css';

// TODO: Уточнить реальные значения для Select'а
export const DonateForm = () => {
    const [amount, setAmount] = useState(AMOUNTS[0]);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [phone, setPhone] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Реализовать запрос на сервер
        // setLoading(true);
        // setError(null);
        const key = localStorage.getItem('yooKey') || '';

        const paymentData = {
            amount: {
                value: amount,
                currency: 'RUB',
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://nft-church.netlify.app/',
            },
            description: `Заказ #${Math.floor(Math.random() * 1000)}`,
        };

        try {
            const response: any = await ky
                .post('/payments', {
                    headers: {
                        'Idempotence-Key': uuidv4(),
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${btoa(key)}`,
                    },
                    json: paymentData,
                })
                .json();
            console.log('DonateForm response', response);
            window.location.href = response?.confirmation?.confirmation_url;
        } catch (error) {
            console.error('Ошибка DonateForm', error);
            // setError(err.message);
        }
    };

    const handlePhoneAccept = useCallback((value: string) => {
        setPhone(value);
    }, []);

    const handleAgreementChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsAgreementChecked(e.target.checked);
    }, []);

    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <Title order={3} className={styles.title}>
                Сделать пожертвование Храму преподобного Сергия Радонежского
            </Title>
            {/* <Select
                classNames={{ input: styles.input }}
                data={PAYMENT_METHODS}
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                placeholder="Метод оплаты"
            /> */}
            <RadioGroup value={amount} onChange={setAmount}>
                <div className={styles.radioButtonsWrapper}>
                    {AMOUNTS.map((amount) => (
                        <AmountRadioButton key={amount} value={amount} className={styles.radioButton} />
                    ))}
                </div>
            </RadioGroup>
            <NumberInput
                classNames={{ input: styles.input }}
                placeholder="Другая сумма"
                value={amount}
                onChange={(value) => setAmount(`${value}`)}
                hideControls
            />
            <Input
                component={IMaskInput}
                classNames={{ input: styles.input }}
                placeholder="Ваш телефон"
                value={phone}
                onAccept={handlePhoneAccept}
                mask="+{7} (000) 000-00-00"
                unmask
            />
            <Button color="green" variant="filled" className={styles.submitButton} type="submit">
                Пожертвовать
            </Button>

            <Checkbox
                classNames={{ input: styles.checkboxInput, label: styles.checkboxLabel }}
                color="green"
                label="Мне есть 18 лет и я принимаю условия Пользовательского соглашения и Публичной оферты"
                checked={isAgreementChecked}
                onChange={handleAgreementChange}
            />
        </form>
    );
};

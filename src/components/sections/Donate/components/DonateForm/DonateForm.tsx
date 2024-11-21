import { Button, Checkbox, Input, RadioGroup, Select, Title } from '@mantine/core';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { IMaskInput } from 'react-imask';

import { AmountRadioButton } from '../AmountRadioButton';

import { AMOUNTS, PAYMENT_METHODS } from './DonateForm.consts';
import styles from './DonateForm.module.css';

// TODO: Уточнить реальные значения для Select'а
export const DonateForm = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [amount, setAmount] = useState(AMOUNTS[0]);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [phone, setPhone] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Реализовать запрос на сервер
        console.log(selectedPaymentMethod, amount, phone, isAgreementChecked);
    };

    const handlePaymentMethodChange = useCallback((value: string | null) => {
        setSelectedPaymentMethod(value);
    }, []);

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
            <Select
                classNames={{ input: styles.input }}
                data={PAYMENT_METHODS}
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                placeholder="Метод оплаты"
            />
            <RadioGroup value={amount} onChange={setAmount}>
                <div className={styles.radioButtonsWrapper}>
                    {AMOUNTS.map((amount) => (
                        <AmountRadioButton key={amount} value={amount} className={styles.radioButton} />
                    ))}
                </div>
            </RadioGroup>
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

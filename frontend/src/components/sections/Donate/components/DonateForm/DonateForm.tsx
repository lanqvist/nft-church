import { Button, TextInput, NumberInput, RadioGroup, Title } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';

import { AmountRadioButton } from '../AmountRadioButton';

import { AMOUNTS } from './DonateForm.consts';
import styles from './DonateForm.module.css';

interface IProps {
    openPaymentModal: () => void;
    setPaymentFormData: (response: unknown) => void;
    loading?: boolean;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DonateForm: FC<IProps> = ({ openPaymentModal, setPaymentFormData, loading }) => {
    const [amount, setAmount] = useState(AMOUNTS[0]);
    const [additionalAmount, setAdditionalAmount] = useState('');
    const [mail, setMail] = useInputState<string>('');
    const [mailError, setMailError] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!mail) {
            setMailError('Поле обязательно для заполнения');
            return;
        }

        if (!emailRegex.test(mail)) {
          setMailError('Введите корректный адрес электронной почты');
          return;
        }

        const paymentData = {
            amount: {
                value: amount || additionalAmount,
                currency: 'RUB',
            },
            email: mail,
        };

        try {
            await setPaymentFormData(paymentData);

            openPaymentModal();
        } catch (error) {
            console.error('Ошибка DonateForm', error);
        }
    };

    const handlePhoneAccept = useCallback((e: ChangeEvent<HTMLInputElement>, error: string) => {
        if (error) {
            setMailError('');
        }

        setMail(e.target.value);
    }, []);

    return (
        <form className={styles.root} onSubmit={handleSubmit} data-netlify="true">
            <Title order={3} className={styles.title}>
                Сделать пожертвование храму преподобного Сергия Радонежского
            </Title>

            <RadioGroup value={amount} onChange={(amount) => {
                setAdditionalAmount('');
                setAmount(amount);
            }}>
                <div className={styles.radioButtonsWrapper}>
                    {AMOUNTS.map((amount) => (
                        <AmountRadioButton key={amount} value={amount} className={styles.radioButton} />
                    ))}
                </div>
            </RadioGroup>
            <NumberInput
                className={styles.numberInput}
                classNames={{ input: styles.input }}
                placeholder="Другая сумма"
                value={additionalAmount}
                onChange={(value) => {
                    setAmount('');
                    setAdditionalAmount(`${value}`);
                }}
                hideControls
            />
            <div className={styles.label}>
                Почта<span className={styles.required}>*</span>
            </div>
            <TextInput
                classNames={{ input: styles.input }}
                placeholder="Ваша почта"
                value={mail}
                onChange={(e) => handlePhoneAccept(e, mailError)}
                error={mailError}
            />
            <Button
                color="green"
                variant="filled"
                loading={loading}
                disabled={loading}
                className={styles.submitButton}
                type="submit"
                onClick={() => handleSubmit}
            >
                Пожертвовать
            </Button>
        </form>
    );
};

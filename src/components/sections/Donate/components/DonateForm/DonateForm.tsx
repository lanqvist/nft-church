import { Button, TextInput, NumberInput, RadioGroup, Title } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

// import { ky } from '@utils/ky';

import { AmountRadioButton } from '../AmountRadioButton';

import { AMOUNTS } from './DonateForm.consts';
import styles from './DonateForm.module.css';

interface IProps {
    openPaymentModal: () => void;
    setPaymentFormData: (response: unknown) => void;
}
export const DonateForm: FC<IProps> = (/* { openPaymentModal, setPaymentFormData } */) => {
    const navigate = useNavigate();

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

        navigate('/result/1');

        // // TODO: Реализовать запрос на сервер
        // // setLoading(true);
        // // setError(null);
        // const key = localStorage.getItem('yooKey') || '';

        // const paymentData = {
        //     amount: {
        //         value: amount || additionalAmount,
        //         currency: 'RUB',
        //     },
        //     confirmation: {
        //         type: 'embedded',
        //         return_url: 'https://nft-church.netlify.app/',
        //     },
        //     // confirmation: {
        //     //     type: 'redirect',
        //     //     return_url: 'https://nft-church.netlify.app/',
        //     // },
        //     description: `Заказ #${Math.floor(Math.random() * 1000)}`,
        // };

        // try {
        //     const response: any = await ky
        //         .post('/payments', {
        //             headers: {
        //                 'Idempotence-Key': uuidv4(),
        //                 'Content-Type': 'application/json',
        //                 Authorization: `Basic ${btoa(key)}`,
        //             },
        //             json: paymentData,
        //         })
        //         .json();
        //     console.log('DonateForm response', response);
        //     setPaymentFormData(response);
        //     openPaymentModal();
        //     // window.location.href = response?.confirmation?.confirmation_url;
        // } catch (error) {
        //     console.error('Ошибка DonateForm', error);
        //     // setError(err.message);
        // }
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
                Сделать пожертвование Храму преподобного Сергия Радонежского
            </Title>

            <RadioGroup value={amount} onChange={setAmount}>
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
                className={styles.submitButton}
                type="submit"
                onClick={() => handleSubmit}
            >
                Пожертвовать
            </Button>
        </form>
    );
};

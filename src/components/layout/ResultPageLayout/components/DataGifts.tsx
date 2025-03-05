/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import { TOKENS } from '../consts';

import styles from './DataGifts.module.css';
import { DataGiftsPreview } from './DataGiftsPreview';

export const DataGifts = ({ prayerCheck, bookCheck, stoneCheck, selectedToken, setSelectedToken, setStep }) => {
    const [prayerData, setPrayerData] = useInputState('');
    const [prayerDataError, setPrayerDataError] = useState('');

    const [stoneData, setStoneData] = useInputState('');
    const [stoneDataError, setStoneDataError] = useState('');

    const [bookData, setBookData] = useInputState('');
    const [bookAddressData, setBookAddressData] = useInputState('');
    const [bookDataError, setBookDataError] = useState('');
    const [bookAddressDataError, setBookAddressDataError] = useState('');

    const [isPreview, setIsPreview] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isPreview]);

    const validate = () => {
        let isValid = true;

        if (prayerCheck && !prayerData) {
            setPrayerDataError('Поле обязательно для заполнения');
            isValid = false;
        }
        if (stoneCheck && !stoneData) {
            setStoneDataError('Поле обязательно для заполнения');
            isValid = false;
        }
        if (bookCheck && !bookData) {
            setBookDataError('Поле обязательно для заполнения');
            isValid = false;
        }
        if (bookCheck && !bookAddressData) {
            setBookAddressDataError('Поле обязательно для заполнения');
            isValid = false;
        }

        return isValid;
    };

    const handleData = useCallback((e, error, setEttor, setData) => {
        if (error) {
            setEttor('');
        }
        setData(e.target.value);
    }, []);

    if (isPreview) {
        return (
            <DataGiftsPreview
                setIsPreview={setIsPreview}
                prayerData={prayerData}
                stoneData={stoneData}
                bookData={bookData}
                bookAddressData={bookAddressData}
                selectedToken={selectedToken}
            />
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <div className={styles.infoTtile}>Ваши памятные подарки!</div>
                <div className={styles.infoDesc}>
                    Заполните данные, сохраните приятные воспоминания о ваших добрых поступках.
                </div>
            </div>

            <div className={styles.giftsWrapper}>
                {prayerCheck && (
                    <div className={styles.gift}>
                        <div className={styles.giftTitle}>Ежедневная молитва о всех благотворителях</div>
                        <div className={styles.giftDescription}>
                            Мы передаем имена благотворителей и тех, о ком они просят помолиться, в храм для
                            молитвенного поминовения. Ежедневно служители храма будут совершать молебен за всех кто
                            принял участие в сборе средств.
                        </div>
                        <div className={styles.inputWrapper}>
                            <div className={styles.label}>
                                ФИО<span className={styles.required}>*</span>
                            </div>
                            <TextInput
                                classNames={{ input: styles.input }}
                                placeholder="Иванов Иван Иванович"
                                value={prayerData}
                                onChange={(e) => handleData(e, prayerDataError, setPrayerDataError, setPrayerData)}
                                error={prayerDataError}
                            />
                        </div>
                    </div>
                )}

                {stoneCheck && (
                    <div className={styles.gift}>
                        <div className={styles.giftTitle}>Увековечение имён благотворителей</div>
                        <div className={styles.giftDescription}>
                            На гранитном поясе, выложенном в основании внешней части храма, будут выгравированы имена
                            благотворителей. Выберете данный подарок и увековечьте память о своем добром деле.
                        </div>
                        <div className={styles.inputWrapper}>
                            <div className={styles.label}>
                                ФИО<span className={styles.required}>*</span>
                            </div>
                            <TextInput
                                classNames={{ input: styles.input }}
                                placeholder="Иванов Иван Иванович"
                                value={stoneData}
                                onChange={(e) => handleData(e, stoneDataError, setStoneDataError, setStoneData)}
                                error={stoneDataError}
                            />
                        </div>
                    </div>
                )}

                {bookCheck && (
                    <div className={styles.gift}>
                        <div className={styles.giftTitle}>Книга о жизни Владыки Варнавы</div>
                        <div className={styles.giftDescription}>
                            Вы получите лимитированное издание книги о жизни Владыки Варнавы — митрополита Чебоксарского
                            и Чувашского. Книга содержит уникальные материалы: фото, записи, высказывания Владыки.
                        </div>
                        <div className={styles.inputWrapper}>
                            <div className={styles.label}>
                                ФИО<span className={styles.required}>*</span>
                            </div>
                            <TextInput
                                classNames={{ input: styles.input }}
                                placeholder="Иванов Иван Иванович"
                                value={bookData}
                                onChange={(e) => handleData(e, bookDataError, setBookDataError, setBookData)}
                                error={bookDataError}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <div className={styles.label}>
                                Адрес<span className={styles.required}>*</span>
                            </div>
                            <TextInput
                                classNames={{ input: styles.input }}
                                placeholder="Введите вашу почту"
                                value={bookAddressData}
                                onChange={(e) =>
                                    handleData(e, bookAddressDataError, setBookAddressDataError, setBookAddressData)
                                }
                                error={bookAddressDataError}
                            />
                        </div>
                    </div>
                )}

                <div className={styles.tokensWrapper}>
                    <div className={styles.giftTitle}>Ваш «Сертификат благотворителя»</div>
                    <div className={styles.giftDescription}>
                        В качестве нашей благодарности мы предлагаем вам выбрать понравившееся вам изображение, которое
                        мы завернем в цифровой актив (NFT) и подарим вам.
                    </div>
                    <div className={styles.tokens}>
                        {TOKENS.map((token) => (
                            <div
                                key={token.name}
                                className={clsx(styles.tokenWrapper, selectedToken === token.name && styles.selected)}
                                onClick={() => setSelectedToken(token.name)}
                            >
                                <img className={styles.token} src={token.image} alt="Сертификат" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.buttonsWrapper}>
                    <Button
                        onClick={() => setStep('chooseGifts')}
                        className={styles.button}
                        variant="default"
                        color="green"
                    >
                        Вернуться
                    </Button>
                    <Button
                        onClick={() => {
                            const isValid = validate();

                            if (isValid) {
                                setIsPreview((prev) => !prev);
                            }
                        }}
                        className={styles.button}
                        variant="filled"
                        color="green"
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        </div>
    );
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, Checkbox } from '@mantine/core';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

import { useTransactionData } from '@hooks/queries';

import bookImg from '../assets/book.png';
import CloseIcon from '../assets/icons/closePadding.svg?react';
import HouseIcon from '../assets/icons/gift.svg?react';
import InfoIcon from '../assets/icons/infoPadding.svg?react';
import molImg from '../assets/mol.png';
import stoneImg from '../assets/stone.png';
import { TOKENS } from '../consts';
import styles from '../ResultPageLayout.module.css';
import { useMediaQuery } from '@mantine/hooks';

const Prayer = ({ prayerCheck, setPrayerCheck }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = (e) => {
        e.stopPropagation();
        setOverlayVisible((prev) => !prev);
    };

    return (
        <div className={styles.giftIem} onClick={() => setPrayerCheck(!prayerCheck)}>
            <img className={clsx(styles.background, { [styles.unchecked]: !prayerCheck })} src={molImg} alt="Молитва" />
            <div className={clsx(styles.overlay, { [styles.showOverlay]: isOverlayVisible })}>
                <Button variant="subtle" className={styles.closeBtn} onClick={toggleOverlay}>
                    <CloseIcon />
                </Button>
                <p>
                    Мы передаем имена благотворителей и тех, о ком они просят помолиться, в храм для молитвенного
                    поминовения. Ежедневно служители храма будут совершать молебен за всех кто принял участие в сборе
                    средств.
                </p>
            </div>
            <Button variant="subtle" className={styles.toggleBtn} onClick={toggleOverlay}>
                <InfoIcon />
            </Button>
            <Checkbox
                className={styles.checkbox}
                size="xxl"
                defaultChecked
                label={'Ежедневная молитва\nо всех благотворителях'}
                classNames={{
                    input: styles.checkboxInput,
                    label: styles.checkboxLabel,
                    inner: styles.checkboxInner,
                }}
                color="green"
                checked={prayerCheck}
                onChange={(e) => setPrayerCheck(e.target.checked)}
            />
        </div>
    );
};

const Stone = ({ stoneCheck, setStoneCheck }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = (e) => {
        e.stopPropagation();
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <div className={styles.giftIem} onClick={() => setStoneCheck(!stoneCheck)}>
            <img
                className={clsx(styles.background, { [styles.unchecked]: !stoneCheck })}
                src={stoneImg}
                alt="Именой камень"
            />
            <div className={clsx(styles.overlay, { [styles.showOverlay]: isOverlayVisible })}>
                <Button variant="subtle" className={styles.closeBtn} onClick={toggleOverlay}>
                    <CloseIcon />
                </Button>
                <p>
                    На гранитном поясе, выложенном в основании внешней части храма, будут выгравированы имена
                    благотворителей. Выберете данный подарок и увековечьте память о своем добром деле.
                </p>
            </div>
            <Button variant="subtle" className={styles.toggleBtn} onClick={toggleOverlay}>
                <InfoIcon />
            </Button>
            <Checkbox
                className={styles.checkbox}
                size="xxl"
                defaultChecked
                label={'Увековечение имён\nблаготворителей'}
                classNames={{
                    input: styles.checkboxInput,
                    label: styles.checkboxLabel,
                    inner: styles.checkboxInner,
                }}
                color="green"
                checked={stoneCheck}
                onChange={(e) => setStoneCheck(e.target.checked)}
            />
        </div>
    );
};

const Book = ({ bookCheck, setBookCheck }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = (e) => {
        e.stopPropagation();
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <div className={styles.giftIem} onClick={() => setBookCheck(!bookCheck)}>
            <img className={clsx(styles.background, { [styles.unchecked]: !bookCheck })} src={bookImg} alt="Книга" />
            <div className={clsx(styles.overlay, { [styles.showOverlay]: isOverlayVisible })}>
                <Button variant="subtle" className={styles.closeBtn} onClick={toggleOverlay}>
                    <CloseIcon />
                </Button>
                <p>
                    Вы получите лимитированное издание книги о жизни Владыки Варнавы — митрополита Чебоксарского и
                    Чувашского. Книга содержит уникальные материалы: фото, записи, высказывания Владыки.
                </p>
            </div>
            <Button variant="subtle" className={styles.toggleBtn} onClick={toggleOverlay}>
                <InfoIcon />
            </Button>
            <Checkbox
                className={styles.checkbox}
                size="xxl"
                defaultChecked
                label={'Книга о жизни \nВладыки Варнавы'}
                classNames={{
                    input: styles.checkboxInput,
                    label: styles.checkboxLabel,
                    inner: styles.checkboxInner,
                }}
                color="green"
                checked={bookCheck}
                onChange={(e) => setBookCheck(e.target.checked)}
            />
        </div>
    );
};

export const ChooseGift = ({
    prayerCheck,
    bookCheck,
    stoneCheck,
    selectedToken,
    setPrayerCheck,
    setStoneCheck,
    setBookCheck,
    setSelectedToken,
    setStep,
    paymentId,
}) => {
      const isMobile = useMediaQuery('(max-width: 50em)');
      const { data: transactionData, isFetching: loadingTransaction } = useTransactionData(paymentId);

    const getPrizes = useCallback(
        (amount: number) => {
            const prizes = [
                <Prayer key="prayer" prayerCheck={prayerCheck} setPrayerCheck={setPrayerCheck} />,
                <Stone key="stone" stoneCheck={stoneCheck} setStoneCheck={setStoneCheck} />,
                <Book key="book" bookCheck={bookCheck} setBookCheck={setBookCheck} />,
            ];

            if (amount < 5000) {
                prizes.splice(-2, 2);
            }

            if (amount >= 5000 && amount < 15000) {
                prizes.splice(-1, 1);
            }

            return prizes;
        },
        [bookCheck, prayerCheck, stoneCheck, setPrayerCheck, setStoneCheck, setBookCheck]
    );

    if (loadingTransaction || !transactionData) return null;

    const prizes = getPrizes(Number(transactionData.amount?.value));

    return (
        <>
            <div className={clsx(styles.gridContainer, styles.fiveItems)}>
                <div className={clsx(styles.giftIem, styles.giftInfo)}>
                    <div className={styles.iconWrapper}>
                        <HouseIcon className={styles.icon} />
                    </div>
                    <div className={styles.title}>Большое спасибо за ваше пожертвование!</div>
                    <div className={styles.description}>
                        Предлагаем выбрать памятные подарки. Сохраните приятные воспоминания о ваших добрых поступках!
                    </div>
                </div>
                {prizes.map((item) => item)}
                <div
                    className={
                        clsx(styles.giftIem, {
                            [styles.columnsTokens]: prizes.length % 2 === 0 && !isMobile,
                            [styles.fullWidth]: prizes.length === 1
                        })
                    }
                >
                    <div className={styles.tokensTitle}>Ваш «Сертификат благотворителя»</div>
                    <div className={styles.tokensWrapper}>
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
            </div>

            <div className={styles.footer}>
                <Button onClick={() => setStep('dataGifts')} className={styles.button} variant="filled" color="green">
                    Продолжить
                </Button>
            </div>
        </>
    );
};

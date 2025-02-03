/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, Checkbox } from '@mantine/core';
import clsx from 'clsx';

import bookImg from '../assets/book.png';
import HouseIcon from '../assets/icons/gift.svg?react';
import molImg from '../assets/mol.png';
import stoneImg from '../assets/stone.png';
import { TOKENS } from '../consts';
import styles from '../ResultPageLayout.module.css';

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
}) => (
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
            <div className={styles.giftIem}>
                <img
                    className={clsx(styles.background, { [styles.unchecked]: !prayerCheck })}
                    src={molImg}
                    alt="Молитва"
                />
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

            <div className={styles.giftIem}>
                <img
                    className={clsx(styles.background, { [styles.unchecked]: !stoneCheck })}
                    src={stoneImg}
                    alt="Именой камень"
                />
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

            <div className={styles.giftIem}>
                <img
                    className={clsx(styles.background, { [styles.unchecked]: !bookCheck })}
                    src={bookImg}
                    alt="Книга"
                />
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
            <div className={clsx(styles.giftIem, [styles.rowGift])}>
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

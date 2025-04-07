import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMemo } from 'react';

import { ResultModal } from '@components/result-modal';
import { useSendGifts } from '@hooks/queries';

import { GiftType } from '../../../../types';
import InfoIcon from '../assets/icons/info.svg?react';
import { TOKENS } from '../consts';

import styles from './DataGiftsPreview.module.css';

export const DataGiftsPreview = ({
    setIsPreview,
    prayerData,
    stoneData,
    bookData,
    bookAddressData,
    selectedToken,
    paymentId,
}) => {
    const token = useMemo(() => TOKENS.find(({ name }) => name === selectedToken), [selectedToken]);
    const [opened, { open, close }] = useDisclosure(false);

    const platformUrl = `https://dfa.sber.ru/nft/church-token?donateId=${paymentId}&pictureId=${token?.id}`;

    const { mutate, isSuccess } = useSendGifts(paymentId);

    const handleFinish = async () => {
        const gifts = [];

        if (prayerData) {
            gifts.push({
                giftType: GiftType.Prayer,
                name: prayerData,
            });
        }

        if (stoneData) {
            gifts.push({
                giftType: GiftType.Engraving,
                name: stoneData,
            });
        }

        if (bookData && bookAddressData) {
            gifts.push({
                giftType: GiftType.Book,
                name: bookData,
                address: bookAddressData,
            });
        }

        await mutate({ gifts, platformUrl });

        open();
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.infoWrapper}>
                    <div className={styles.infoTtile}>Ваши памятные подарки!</div>
                    <div className={styles.infoDesc}>
                        <div className={styles.infoSubtitle}>
                            <InfoIcon className={styles.icon} />
                            <span>Обратите внимание</span>
                        </div>
                        <div className={styles.description}>
                            После подтверждения выбранные подарки и введённые данные изменить будет невозможно.
                        </div>
                    </div>
                </div>

                <div className={styles.giftsWrapper}>
                    {prayerData && (
                        <div className={styles.gift}>
                            <div className={styles.giftTitle}>Благодарственная молитва за помощь</div>
                            <div className={styles.grayGiftDescription}>
                                <div className={styles.label}>ФИО</div>
                                <div>{prayerData}</div>
                            </div>
                        </div>
                    )}

                    {stoneData && (
                        <div className={styles.gift}>
                            <div className={styles.giftTitle}>Увековечение имён благотворителей</div>
                            <div className={styles.grayGiftDescription}>
                                <div className={styles.label}>ФИО</div>
                                <div>{stoneData}</div>
                            </div>
                        </div>
                    )}

                    {bookData && (
                        <div className={styles.gift}>
                            <div className={styles.giftTitle}>Благодарственная молитва за помощь</div>
                            <div className={styles.grayGiftDescription}>
                                <div className={styles.label}>ФИО</div>
                                <div>{bookData}</div>
                            </div>
                            <div className={styles.giftDescription}>
                                <div className={styles.label}>Адрес</div>
                                <div>{bookAddressData}</div>
                            </div>
                        </div>
                    )}

                    <div className={styles.tokensWrapper}>
                        <div className={styles.giftTitle}>Ваш «Сертификат благотворителя»</div>

                        <div className={styles.tokens}>
                            <div key={token.name} className={styles.tokenWrapper}>
                                <img className={styles.token} src={token.image} alt="Сертификат" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonsWrapper}>
                        <Button
                            onClick={() => setIsPreview((prev) => !prev)}
                            className={styles.button}
                            variant="default"
                            color="green"
                        >
                            Редактировать
                        </Button>
                        <Button onClick={handleFinish} className={styles.button} variant="filled" color="green">
                            Подтвердить
                        </Button>
                    </div>
                </div>
            </div>
            <ResultModal opened={opened && isSuccess} close={close} token={token.image} url={platformUrl} />
        </>
    );
};

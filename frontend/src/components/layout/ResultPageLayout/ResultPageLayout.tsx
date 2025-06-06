import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChooseGift, DataGifts } from './components';
import { TOKENS } from './consts';
import styles from './ResultPageLayout.module.css';

const steps = {
    chooseGifts: ChooseGift,
    dataGifts: DataGifts,
};

export const ResultPageLayout = () => {
    const { uuid: paymentId } = useParams();
    const [prayerCheck, setPrayerCheck] = useState(false);
    const [bookCheck, setBookCheck] = useState(false);
    const [stoneCheck, setStoneCheck] = useState(false);
    const [selectedToken, setSelectedToken] = useState(TOKENS[0].name);
    const [step, setStep] = useState('chooseGifts');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const StepBody = steps[step];

    return (
        <div className={styles.root}>
            <StepBody
                prayerCheck={prayerCheck}
                bookCheck={bookCheck}
                stoneCheck={stoneCheck}
                setPrayerCheck={setPrayerCheck}
                setBookCheck={setBookCheck}
                setStoneCheck={setStoneCheck}
                selectedToken={selectedToken}
                setSelectedToken={setSelectedToken}
                setStep={setStep}
                paymentId={paymentId}
            />
            <div className={styles.backgroundTop} />
            <div className={styles.backgroundDown} />
        </div>
    );
};

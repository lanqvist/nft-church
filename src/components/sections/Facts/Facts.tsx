import { Text, Title } from '@mantine/core';
import { useCallback, useMemo, useState } from 'react';

import { Section } from '@components/layout/Section';
import { useBreakpoint } from '@hooks/useBreakpoint';

import HandClickIcon from './assets/icons/handClick.svg?react';
import { FactModal } from './components/FactModal';
import { FactObjectDisplay } from './components/FactObjectDisplay';
import { FactObjectList } from './components/FactObjectList/FactObjectList';
import { FACT_OBJECTS } from './Facts.consts';
import styles from './Facts.module.css';

export const Facts = () => {
    const [currentFactObjectId, setCurrentFactObjectId] = useState(FACT_OBJECTS[0].id);
    const [currentFactId, setCurrentFactId] = useState(FACT_OBJECTS[0].facts[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isTabletOrMobile = useBreakpoint('md');

    const factObject = useMemo(() => FACT_OBJECTS.find((obj) => obj.id === currentFactObjectId), [currentFactObjectId]);
    const fact = useMemo(
        () => factObject?.facts.find((fact) => fact.id === currentFactId),
        [factObject, currentFactId]
    );

    const handleFactClick = useCallback((factId: string) => {
        setCurrentFactId(factId);
        setIsModalOpen(true);
    }, []);

    const handleFactObjectClick = useCallback((factObjectId: string) => {
        const factObject = FACT_OBJECTS.find((obj) => obj.id === factObjectId);

        if (factObject) {
            const fact = factObject.facts[0];

            if (fact) {
                setCurrentFactObjectId(factObjectId);
                setCurrentFactId(fact.id);
            }
        }
    }, []);

    const handleNextFactClick = useCallback(() => {
        if (factObject) {
            const factIdx = factObject.facts.findIndex((fact) => fact.id === currentFactId);

            if (factIdx !== -1) {
                const nextFactIdx = factIdx >= factObject.facts.length - 1 ? 0 : factIdx + 1;
                const factId = factObject.facts[nextFactIdx].id;

                setCurrentFactId(factId);
            }
        }
    }, [currentFactId, factObject]);

    const handleModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <Section title="Узнай больше о храме">
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.hint}>
                        <HandClickIcon className={styles.handClickIcon} />
                        <Text className={styles.hintText}>Нажми и узнай интересный факт</Text>
                    </div>
                    <div className={styles.factTextWrapper}>
                        <Title className={styles.factTitle} order={4}>
                            {factObject?.name}
                        </Title>
                        {fact?.text}
                    </div>
                    <FactObjectList
                        className={styles.factObjectList}
                        factObjects={FACT_OBJECTS}
                        currentFactObjectId={currentFactObjectId}
                        onFactObjectClick={handleFactObjectClick}
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.factObjectDisplayWrapper}>
                        {factObject && <FactObjectDisplay factObject={factObject} onFactClick={handleFactClick} />}
                    </div>
                    <FactObjectList
                        className={styles.factObjectList}
                        factObjects={FACT_OBJECTS}
                        currentFactObjectId={currentFactObjectId}
                        onFactObjectClick={handleFactObjectClick}
                    />
                </div>
            </div>
            {isTabletOrMobile && factObject && fact && (
                <FactModal
                    isOpen={isModalOpen}
                    factObject={factObject}
                    fact={fact}
                    onClose={handleModalClose}
                    onNextFactClick={handleNextFactClick}
                />
            )}
        </Section>
    );
};

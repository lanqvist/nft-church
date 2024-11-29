import { Text, Title } from '@mantine/core';
import { useCallback, useMemo, useState } from 'react';

import { Section } from '@components/layout/Section';
import { useBreakpoint } from '@hooks/useBreakpoint';

import factObjectImg1 from './assets/factObject1.jpeg';
import HandClickIcon from './assets/icons/handClick.svg?react';
import { FactModal } from './components/FactModal';
import { FactObjectDisplay } from './components/FactObjectDisplay';
import { FactObjectList } from './components/FactObjectList/FactObjectList';
import styles from './Facts.module.css';
import { FactObject } from './models/facts';
import { createFactObjectFactoryBuilder } from './utils/builder';

const factObjects: FactObject[] = createFactObjectFactoryBuilder((builder) => {
    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы')
        .addFact(
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis odio voluptatum illo nostrum. Rem culpa tenetur reiciendis excepturi? Odio modi ut ipsa a quo quis debitis officiis reprehenderit illum minus!',
            { top: '20%', left: '33%' }
        )
        .addFact(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aliquid culpa temporibus eum voluptates in laborum quaerat, et, illum sint illo eveniet nobis inventore sunt consequatur rem reiciendis officiis veritatis.',
            { top: '50%', left: '20%' }
        );

    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы 2')
        .addFact('Veniam consectetur et duis nisi exercitation elit irure ipsum cillum ipsum mollit.', {
            top: '10%',
            left: '30%',
        })
        .addFact('Aute minim fugiat occaecat ex est elit laboris.', { top: '10%', left: '60%' })
        .addFact('Ea occaecat ad sunt consectetur fugiat adipisicing consectetur esse enim dolore.', {
            top: '56%',
            left: '30%',
        });

    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы 3')
        .addFact('Aute occaecat fugiat labore enim minim enim magna enim commodo.', { top: '30%', left: '60%' })
        .addFact(
            'Irure proident pariatur ut culpa deserunt veniam ullamco quis. Sunt irure et aliquip consequat enim aute. Non adipisicing mollit esse veniam nulla eu enim. Et exercitation cillum elit ipsum. Magna adipisicing qui ut qui Lorem veniam ea ut voluptate sint ullamco id qui. Aute ullamco consequat ex officia ipsum esse cillum eiusmod pariatur nisi occaecat ullamco voluptate. Fugiat qui quis exercitation in dolor culpa eu irure fugiat cupidatat laborum.',
            { top: '80%', left: '60%' }
        )
        .addFact(
            'Irure magna eiusmod dolor labore tempor fugiat nisi eu incididunt quis. Sunt veniam do in eu veniam dolore cillum id. Nulla minim reprehenderit dolore incididunt eu velit ipsum deserunt occaecat esse nisi esse. Incididunt excepteur minim consequat cillum occaecat minim velit. Ipsum commodo non incididunt ullamco nulla proident sit veniam culpa. Do do officia deserunt amet culpa non consectetur elit dolor labore mollit ipsum ut qui. Commodo cupidatat Lorem laborum id aliqua.',
            { top: '56%', left: '35%' }
        );
}).toArray();

export const Facts = () => {
    const [currentFactObjectId, setCurrentFactObjectId] = useState(factObjects[0].id);
    const [currentFactId, setCurrentFactId] = useState(factObjects[0].facts[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isTabletOrMobile = useBreakpoint('md');

    const factObject = useMemo(() => factObjects.find((obj) => obj.id === currentFactObjectId), [currentFactObjectId]);
    const fact = useMemo(
        () => factObject?.facts.find((fact) => fact.id === currentFactId),
        [factObject, currentFactId]
    );

    const handleFactClick = useCallback((factId: string) => {
        setCurrentFactId(factId);
        setIsModalOpen(true);
    }, []);

    const handleFactObjectClick = useCallback((factObjectId: string) => {
        const factObject = factObjects.find((obj) => obj.id === factObjectId);

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
                        factObjects={factObjects}
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
                        factObjects={factObjects}
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

import { Text, Title } from '@mantine/core';
import { useCallback, useMemo, useState } from 'react';

import { Section } from '@components/layout/Section';
import { useBreakpoint } from '@hooks/useBreakpoint';

import factObjectImg1 from './assets/factObject1.jpg';
import factObjectImg2 from './assets/factObject2.jpg';
import factObjectImg3 from './assets/factObject3.jpg';
import HandClickIcon from './assets/icons/handClick.svg?react';
import { FactModal } from './components/FactModal';
import { FactObjectDisplay } from './components/FactObjectDisplay';
import { FactObjectList } from './components/FactObjectList/FactObjectList';
import styles from './Facts.module.css';
import { FactObject } from './models/facts';
import { createFactObjectFactoryBuilder } from './utils/builder';

const factObjects: FactObject[] = createFactObjectFactoryBuilder((builder) => {
    builder
        .createFactObjectFactory(factObjectImg1, 'Архитектурный облик храма – символика и традиции')
        .addFact(
            'Выбор цветовой гаммы – это не просто эстетическое решение, а осмысленный символ, отражающий духовное наполнение храма и его посвящение святому покровителю.',
            {
                top: '18%',
                left: '76%',
            }
        )
        .addFact(
            'Зеленый цвет в православии считается преподобническим – он символизирует духовное подвижничество, чистоту души и близость к Богу. Именно поэтому он стал основным цветом верхнего храма, посвященного преподобному Сергию Радонежскому – великому святому, чья жизнь была примером смирения, молитвы и духовного подвига.',
            { top: '41%', left: '50%' }
        )
        .addFact(
            'Белый цвет дополняет общий образ, олицетворяя свет, благодать и святость, делая архитектурный ансамбль храма торжественным и величественным.',
            {
                top: '81%',
                left: '76%',
            }
        );

    builder
        .createFactObjectFactory(factObjectImg2, 'Иконостас храма – дар веры и преданности')
        .addFact(
            'Наш будущий иконостас – это дар благотворителя из Сибири, который еще при жизни Владыки Варнавы оплатил его изготовление. Этот поступок стал актом глубокой веры и любви к храму, ведь иконостас был заказан задолго до того, как появится возможность его установки.',
            {
                top: '10%',
                left: '33%',
            }
        )
        .addFact(
            'Изготавливать его будут в Щиграх Курской области, городе, где расположена одна из самых известных в России мастерских по созданию иконостасов. На данный момент материалы для иконостаса уже закуплены, но его изготовление пока не начато, поскольку процесс создания займет 3-4 месяца',
            { top: '10%', left: '65%' }
        )
        .addFact(
            'Этот будущий иконостас – не просто элемент храмового убранства, а символ преданности, духовного наследия и единения верующих, которые внесли свой вклад в его появление.',
            {
                top: '56%',
                left: '30%',
            }
        );

    builder
        .createFactObjectFactory(factObjectImg3, 'Последняя воля Владыки Варнавы – монашеское смирение')
        .addFact(
            'Когда в Чебоксарах строился Покровско-Татианинский собор, в нем заранее была подготовлена мраморная усыпальница для Владыки. Однако он видел себя не в почетной усыпальнице, а как простой монах, следуя традициям Свято-Троицкой Сергиевой Лавры, где духовные подвижники погребаются скромно – перед алтарем храма, под восьмиконечным деревянным крестом.',
            { top: '85%', left: '10%' }
        )
        .addFact(
            'О своем решении он объявил публично, года за два до кончины, во время заседания епархиального совета. В присутствии всего духовенства республики он заявил, что хочет быть похоронен перед алтарем строящегося храма преподобного Сергия Радонежского на улице Калинина.',
            { top: '85%', left: '30%' }
        )
        .addFact(
            'После его ухода возникла сложность: в месте, которое он избрал, еще велись строительные работы – перед алтарем стоял башенный кран, а подходящей территории просто не было.',
            { top: '85%', left: '50%' }
        )
        .addFact(
            'Однако буквально за одни сутки произошло настоящее чудо: перед храмом находился старый частный дом, хозяева которого уже давно не жили в нем. Благодаря помощи благотворителя удалось оперативно выкупить участок и расчистить место для захоронения Владыки.',
            { top: '85%', left: '70%' }
        )
        .addFact(
            'Теперь могила Владыки Варнавы находится на храмовой территории, а вокруг нее планируется создать сквер митрополита Варнавы – место тишины, молитвы и памяти о человеке, посвятившем свою жизнь служению Богу и людям.',
            { top: '85%', left: '90%' }
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
        <Section title="Узнай больше о храме" key="facts" id="facts">
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

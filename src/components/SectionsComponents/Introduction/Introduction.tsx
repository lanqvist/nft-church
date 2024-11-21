import { Text } from '@mantine/core';
import clsx from 'clsx';

import { Section } from '@components/LayoutComponents/Section';

import cardImg1 from './assets/card1.jpeg';
import cardImg2 from './assets/card2.jpeg';
import cardImg3 from './assets/card3.jpeg';
import cardImg4 from './assets/card4.jpeg';
import cardImg5 from './assets/card5.jpeg';
import { Card, CardProps } from './components/Card';
import styles from './Introduction.module.css';

const cards: CardProps[] = [
    {
        title: 'Храм',
        content: (
            <>
                <Text className={clsx(styles.cardText, styles.cardTextBlock)}>
                    Высота Храма – более 40 метров. Храм состоит из бетонного каркаса с заполнением красным кирпичом.
                    Кирпич произведён в Красноармейском районе Чувашской Республики. Там же добывается и глина для
                    производства кирпича. Кирпич в полном объёме на безвозмездной основе предоставлен чувашским заводом
                    строительной керамики «КЕТРА».
                </Text>
                <Text className={clsx(styles.cardText, styles.cardTextBlock)}>
                    Кресты и купола произведены чувашскими мастерами в Чебоксарах.
                </Text>
                <Text className={clsx(styles.cardText, styles.cardTextBlock)}>
                    Цвет Храма снаружи имеет зелёный цвет. Это канонический преподобнический цвет, аналогичный цвету
                    колокольни Свято-Троицкой Сергиевой Лавры в Сергиевом Посаде, где хранятся мощи преподобного Сергия
                    Радонежского.
                </Text>
                <Text className={clsx(styles.cardText, styles.cardTextBlock)}>
                    В 2015 году митрополит Чувашский и Чебоксарский Варнава и Святейший Патриарх Московский и всея Руси
                    Кирилл заложили в основание Храма памятную капсулу.
                </Text>
            </>
        ),
        imageUrl: cardImg1,
    },
    {
        title: 'Роспись',
        content:
            'Для росписей сводов Храма, его внутреннего убранства и икон планируется пригласить иконописцев из Свято-Троицкой Сергиевой Лавры — крупнейшего мужского монастыря Русской Православной Церкви, основанного преподобным Сергием Радонежским, в котором инок Варнава начал свой монашеский путь.',
        imageUrl: cardImg2,
        invertedTitle: true,
    },
    {
        title: 'Купола',
        content:
            'В Храме установили 10 колоколов, самый большой весит почти 6 тонн. Колокол отлит в городе Каменск-Уральский Свердловской области и носит имя апостола Варнавы. Производство колокола из собственных средств оплатил владыка Варнава.',
        imageUrl: cardImg3,
    },
    {
        title: 'Убранство',
        content:
            'По благословлению владыки Варнавы из Греции привезена утварь и богослужебные приборы для Храма. В том числе и Дарохранительница, изготовленная из серебра, чаша, дискос. Вся утварь произведена в Греции.',
        imageUrl: cardImg4,
    },
    {
        title: 'Иконастас',
        content: (
            <>
                <Text className={styles.cardText}>
                    В Храме будет расположен 5-ярусный иконостас.
                    <br />
                    Со следующими рядами:
                </Text>

                <ul className={styles.cardList}>
                    <Text className={styles.cardText} component="li">
                        Пророческий
                    </Text>
                    <Text className={styles.cardText} component="li">
                        Праотеческий
                    </Text>
                    <Text className={styles.cardText} component="li">
                        Деисус
                    </Text>
                    <Text className={styles.cardText} component="li">
                        Праздничный
                    </Text>
                    <Text className={styles.cardText} component="li">
                        Местный
                    </Text>
                </ul>
            </>
        ),
        imageUrl: cardImg5,
        invertedTitle: true,
    },
];

export const Introduction = () => (
    <Section title="Знакомство с храмом">
        <div className={styles.columns}>
            <div className={styles.column}>
                <div className={styles.row}>
                    <Card className={styles.card} {...cards[0]} />
                </div>
            </div>
            <div className={styles.columnsWrapper}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <Card className={styles.card} {...cards[1]} />
                    </div>
                    <div className={styles.row}>
                        <Card className={styles.card} {...cards[2]} />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <Card className={styles.card} {...cards[3]} />
                    </div>
                    <div className={styles.row}>
                        <Card className={styles.card} {...cards[4]} />
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

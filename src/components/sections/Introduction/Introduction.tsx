import { Section } from '@components/layout/Section';

import cardImg1 from './assets/card1.png';
import cardImg2 from './assets/card2.png';
import cardImg3 from './assets/card3.png';
import cardImg4 from './assets/card4.png';
import cardImg5 from './assets/card5.png';
import cardImg6 from './assets/card6.png';
import { Card, CardProps } from './components/Card';
import styles from './Introduction.module.css';

const cards: CardProps[] = [
    {
        title: 'Храм',
        content:
            'Высота Храма – более 40 метров. Храм состоит из бетонного каркаса с заполнением красным кирпичом. Кирпич произведён в Красноармейском районе Чувашской Республики. Там же добывается и глина для производства кирпича. Кирпич в полном объёме на безвозмездной основе предоставлен чувашским заводом строительной керамики «КЕТРА». Кресты и купола произведены чувашскими мастерами в Чебоксарах.\nЦвет Храма снаружи имеет зелёный цвет. Это канонический преподобнический цвет, аналогичный цвету колокольни Свято-Троицкой Сергиевой Лавры в Сергиевом Посаде, где хранятся мощи преподобного Сергия Радонежского.\nВ 2015 году митрополит Чувашский и Чебоксарский Варнава и Святейший Патриарх Московский и всея Руси Кирилл заложили в основание Храма памятную капсулу',
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
        title: 'Иконастас',
        content:
            'В Храме будет расположен 5-ярусный иконостас.\nСо следующими рядами:\nПророческий\nПраотеческий\nДеисус\nПраздничный\nМестный',
        imageUrl: cardImg3,
        invertedTitle: true,
    },
    {
        title: 'Купола',
        content:
            'В Храме установили 10 колоколов, самый большой весит почти 6 тонн. Колокол отлит в городе Каменск-Уральский Свердловской области и носит имя апостола Варнавы. Производство колокола из собственных средств оплатил владыка Варнава.',
        imageUrl: cardImg4,
    },
    {
        title: 'Витражи',
        content:
            'Витраж - это произведение монументального искусства в виде установленной в оконный проем прозрачной композиции из кусочков разноцветного стекла. Витражи представляют собой важную декоративную составляющую архитектурного сооружения и часто используются для украшения храмов.',
        imageUrl: cardImg5,
    },
    {
        title: 'Убранство',
        content:
            'По благословлению владыки Варнавы из Греции привезена утварь и богослужебные приборы для Храма. В том числе и Дарохранительница, изготовленная из серебра, чаша, дискос. Вся утварь произведена в Греции.',
        imageUrl: cardImg6,
        invertedTitle: true,
    },
];

export const Introduction = () => (
    <Section title="Виды храма" key="introduction" id="introduction">
        <div className={styles.cardsWrapper}>
            <Card className={styles.card} {...cards[0]} />

            <Card className={styles.card} {...cards[1]} />

            <Card className={styles.card} {...cards[2]} />

            <Card className={styles.card} {...cards[3]} />

            <Card className={styles.card} {...cards[4]} />

            <Card className={styles.card} {...cards[5]} />
        </div>
    </Section>
);

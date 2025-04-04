import { Carousel, Embla } from '@mantine/carousel';
import { useState } from 'react';

import { Section } from '@components/layout/Section';

import { Card, CardProps } from './components/Card';
import { Pagination } from './components/Pagination';
import { CARD_IMAGES } from './WorkStages.consts';
import styles from './WorkStages.module.css';

const cards: CardProps[] = [
    {
        date: '06.05.2014',
        title: '',
        description:
            'Митрополит Чебоксарский и Чувашский Варнава совершил молебное пение и освятил место строительства храма в честь преподобного Сергия Радонежского, 700-летие со дня рождения которого отмечалось в том году.',
        imageUrl: CARD_IMAGES[0],
    },
    {
        date: '01.02.2015',
        title: '',
        description: 'Начато строительство храма.',
        imageUrl: CARD_IMAGES[1],
    },
    {
        date: ' 02.08.2015',
        title: '',
        description:
            'Готов цокольный этаж, в котором будет предел в честь святых Кирилла и Мефодия. В тот же день в ходе первосвятительского визита Святейший Патриарх Московский и всея Руси Кирилл совершил чин освящения закладного камня в основание храма в честь преподобного Сергия Радонежского в Чебоксарах. Вместе с митрополитом Чебоксарским и Чувашским Варнавой заложили памятную капсулу.',
        imageUrl: CARD_IMAGES[2],
    },
    {
        date: '16.07.2018',
        title: '',
        description: 'Построен монолит 12 метров. Каменщики выполняют работы с северной стороны.',
        imageUrl: CARD_IMAGES[3],
    },
    {
        date: '01.09.2018',
        title: '',
        description: 'Выполняется кладка пустотелым керамическим блоком "Кетра".',
        imageUrl: CARD_IMAGES[4],
    },
    {
        date: '01.03.2019',
        title: '',
        description: 'Возведена арка бокового входа с южной стороны.',
        imageUrl: CARD_IMAGES[5],
    },
    {
        date: '21.02.2019',
        title: '',
        description: 'Колоннада обкладывается кирпичом.',
        imageUrl: CARD_IMAGES[6],
    },
    {
        date: '01.12.2019',
        title: '',
        description:
            'Каменщики завершают выкладывать арки входа в нижний храм, который будет освящен в честь Кирилла и Мефодия, учителей словенских.',
        imageUrl: CARD_IMAGES[7],
    },
    {
        date: '08.09.2020',
        title: '',
        description:
            'Куратор стройки, Федор Степанов, проводит планерку и рассказывает о движении работ депутату ГД РФ Анатолию Аксакову.',
        imageUrl: CARD_IMAGES[8],
    },
    {
        date: '17.06.2022',
        title: '',
        description: 'Возведен монолитный купол звонниц.',
        imageUrl: CARD_IMAGES[9],
    },
    {
        date: '29.09.2023',
        title: '',
        description: 'Отделочные работы купола.',
        imageUrl: CARD_IMAGES[10],
    },
];

export const WorkStages = () => {
    const [emblaApi, setEmblaApi] = useState<Embla | null>(null); // Store Embla API instance

    // Function to scroll to the next slide
    const handleNextClick = () => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    };

    // Function to scroll to the previous slide
    const handlePrevClick = () => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    };

    return (
        <Section
            title="Ход строительства"
            titleAddons={
                <Pagination
                    className={styles.titlePagination}
                    onNextClick={handleNextClick}
                    onPrevClick={handlePrevClick}
                />
            }
            key="workStages"
            id="workStages"
        >
            <div className={styles.content}>
                <Carousel
                    className={styles.carousel}
                    slidesToScroll={1}
                    slideSize={{ base: '60%', md: '40%' }}
                    slideGap={{ base: '2xs', sm: 'lg' }}
                    align="start"
                    withControls={false}
                    withIndicators={false}
                    containScroll="trimSnaps"
                    getEmblaApi={setEmblaApi} // Get Embla API
                >
                    {cards.map((props) => {
                        const { title, ...restProps } = props;
                        return (
                            <Carousel.Slide key={props.date} className={styles.slide}>
                                <Card title={title} {...restProps} />
                            </Carousel.Slide>
                        );
                    })}
                </Carousel>
            </div>
            <Pagination
                className={styles.bottomPagination}
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
            />
        </Section>
    );
};

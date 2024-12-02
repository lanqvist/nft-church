import { Carousel, Embla } from '@mantine/carousel';
import { useState } from 'react';

import { Section } from '@components/layout/Section';

import { Card, CardProps } from './components/Card';
import { Pagination } from './components/Pagination';
import { CARD_IMAGES } from './WorkStages.consts';
import styles from './WorkStages.module.css';

const cards: CardProps[] = [
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 1',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[0],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 2',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[1],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 3',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[2],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 4',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[3],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 5',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[4],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 6',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[5],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 7',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[6],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 8',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[7],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 9',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[8],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 10',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
        imageUrl: CARD_IMAGES[9],
    },
    {
        date: '25.06.2024',
        title: 'Lorem Ipsum 11',
        description:
            'Laboris et veniam duis laboris cillum amet qui anim velit ipsum commodo. Nostrud et amet anim sunt in incididunt cupidatat. Aliquip anim consectetur exercitation culpa aliquip. Enim veniam aute anim voluptate incididunt mollit laboris culpa.',
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
                            <Carousel.Slide key={title} className={styles.slide}>
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

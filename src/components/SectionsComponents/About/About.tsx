import { Carousel } from '@mantine/carousel';
import { Button, Image } from '@mantine/core';
import clsx from 'clsx';

import { Section } from '@components/LayoutComponents/Section';
import { useBreakpoint } from '@hooks/useBreakpoint';

import styles from './About.module.css';
import aboutImg from './assets/about.jpeg';
import aboutMobileImg from './assets/aboutMobile.jpeg';
import DomeHeartIcon from './assets/icons/domeHeart.svg?react';
import HouseIcon from './assets/icons/house.svg?react';
import { Card, CardProps } from './components/Card';

type ImageSlide = {
    name: string;
    desktopImage: string;
    tabletImage?: string;
    mobileImage?: string;
};

const cards: Omit<CardProps, 'className'>[] = [
    {
        title: 'Храм преподобного\nСергия Радонежского',
        description:
            'Храм в честь преподобного Сергия Радонежского в Чебоксарах был основан в 2014 году. 2 августа 2015 года Патриарх Кирилл освятил закладной камень. В 2021 году митрополит Савватий освятил колокола храма, а в 2022 году – кресты и купола. Храм постепенно развивается, играя важную роль в духовной жизни города.',
    },
    {
        title: 'О проекте',
        description:
            'Храм преподобного Сергия Радонежского строится с 2015 года и станет уникальным духовным центром для жителей Чебоксар для проведения богослужений и работы с молодежью',
        icon: <HouseIcon className={styles.icon} />,
    },
    {
        title: 'Цель сбора',
        description:
            'Денежные средства в размере 50 миллионов рублей собираются на внутреннюю и внешнюю реконструкцию и реставрацию храма',
        icon: <DomeHeartIcon className={styles.icon} />,
        footerAddons: (
            <Button className={styles.button} color="green" fullWidth>
                Пожертвовать
            </Button>
        ),
    },
];

const imageSlides: ImageSlide[] = [
    {
        name: 'Храм 1',
        desktopImage: aboutImg,
        mobileImage: aboutMobileImg,
    },
    {
        name: 'Храм 2',
        desktopImage: aboutImg,
        mobileImage: aboutMobileImg,
    },
    {
        name: 'Храм 3',
        desktopImage: aboutImg,
        mobileImage: aboutMobileImg,
    },
];

export const About = () => {
    const isTablet = useBreakpoint('lg');
    const isMobile = useBreakpoint('sm');

    return (
        <Section title="О храме">
            <div className={styles.content}>
                <Card className={clsx(styles.card, styles.mobileCard)} {...cards[0]} />
                <div className={styles.innerContent}>
                    <div className={styles.cards}>
                        {cards.map((props) => {
                            const { title } = props;
                            return <Card key={title} className={styles.card} {...props} />;
                        })}
                    </div>
                    <Carousel
                        className={styles.carousel}
                        slideGap="md"
                        align="start"
                        withControls={false}
                        withIndicators
                        classNames={{
                            indicators: styles.indicators,
                            indicator: styles.indicator,
                        }}
                    >
                        {imageSlides.map(({ name, desktopImage, tabletImage, mobileImage }) => {
                            const imageSrc = [
                                isMobile ? mobileImage : null,
                                isTablet ? tabletImage : null,
                                desktopImage,
                            ].find(Boolean);

                            return (
                                <Carousel.Slide key={name} className={styles.slide}>
                                    <div className={styles.imageWrapper}>
                                        <Image className={styles.image} src={imageSrc} alt={name} />
                                    </div>
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </Section>
    );
};

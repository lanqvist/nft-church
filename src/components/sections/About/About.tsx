import { Button, Image, Text, Title } from '@mantine/core';

import { Section } from '@components/layout/Section';
import { scrollToSection } from '@utils/index';

import styles from './About.module.css';
import aboutImg from './assets/about.png';
import DomeHeartIcon from './assets/icons/domeHeart.svg?react';
import HouseIcon from './assets/icons/house.svg?react';
import { Card, CardProps } from './components/Card';

type ImageSlide = {
    name: string;
    desktopImage: string;
    tabletImage?: string;
    mobileImage?: string;
};

const imageCard = {
    title: 'Храм преподобного\nСергия Радонежского',
    description:
        'В 2014 году исполнилось 700 лет со дня рождения печальника земли Русской – преподобного Сергия Радонежского, и по благословению Патриарха Московского и всея Руси Кирилла к этой дате в городе Чебоксары был заложен собор в его честь.',
};

const cards: Omit<CardProps, 'className'>[] = [
    {
        title: 'О проекте',
        description:
            '2 августа 2015 года состоялась торжественная закладка капсулы в стену строящегося храма с участием Святейшего Патриарха Московского и всея Руси Кирилла и митрополита Чебоксарского и Чувашского Варнавы. В конце 2015 года на частные пожертвования жителей Чувашской Республики завершены работы по возведению фундамента и нулевого цикла строительства. Сейчас строительство Храма и внешней его части практически завершено.',
        icon: <HouseIcon className={styles.icon} />,
    },
    {
        title: 'Цель сбора',
        description:
            'Сбор средств осуществляется для внутренней отделки Храма, его росписи, а также для строительства просветительского центра на территории Храма, в котором будет находиться и православная гимназия для начальных классов.  Храм рассчитан на 1200 прихожан.',
        icon: <DomeHeartIcon className={styles.icon} />,
        footerAddons: (
            <Button className={styles.button} onClick={() => scrollToSection('donate')} color="green" fullWidth>
                Пожертвовать
            </Button>
        ),
    },
];

const image: ImageSlide = {
    name: 'Храм 1',
    desktopImage: aboutImg,
    // mobileImage: aboutMobileImg,
};

export const About = () => (
    <Section title="О храме" key="about" id="about">
        <div className={styles.content}>
            <div className={styles.innerContent}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image className={styles.image} src={image.desktopImage} alt={image.name} />
                    </div>

                    <div className={styles.textWrapper}>
                        <Title className={styles.title} order={4}>
                            {imageCard.title}
                        </Title>

                        <Text className={styles.description}>{imageCard.description}</Text>
                    </div>
                </div>
                <div className={styles.cards}>
                    {cards.map((props) => {
                        const { title } = props;
                        return <Card key={title} className={styles.card} {...props} />;
                    })}
                </div>
            </div>
        </div>
    </Section>
);

import { Image } from '@mantine/core';

import { Section } from '@components/layout/Section';

import aboutImg from './assets/about.png';
import HouseIcon from './assets/icons/crown.svg?react';
import DomeHeartIcon from './assets/icons/safe.svg?react';
import styles from './Certificate.module.css';
import { Card, CardProps } from './components/Card';

type ImageSlide = {
    name: string;
    desktopImage: string;
    tabletImage?: string;
    mobileImage?: string;
};

const cards: Omit<CardProps, 'className'>[] = [
    {
        title: '',
        description:
            'Уникальный цифровой актив (NFT-токен), подтверждающий участие в благотворительном сборе средств на строительство храма преподобного Сергия Радонежского. Сертификаты выпускаются на платформе "Цифровые активы" Сбера, построенной на базе технологии блокчейн. Благодаря этой инновационной технологии, выпущенные сертификаты невозможно потерять или изменить. Они сохранят память о вашей помощи в сборе средств для строительства храма.',
        icon: <HouseIcon className={styles.icon} />,
    },
    {
        title: '',
        description:
            'NFT-сертификаты передаются благотворителям с использованием технологии блокчейн. Мы ценим вклад всех благотворителей, и будем рады отблагодарить каждого. После пожертвования вместе с цифровым сертификатом вы сможете выбрать один или несколько подарков, который подготовлен для вас: благодарственная молитва, памятная гравировка и другие.',
        icon: <DomeHeartIcon className={styles.icon} />,
        // footerAddons: (
        //     <Button className={styles.button} color="green" fullWidth>
        //         Пожертвовать
        //     </Button>
        // ),
    },
];

const image: ImageSlide = {
    name: 'Храм 1',
    desktopImage: aboutImg,
};

export const Certificate = () => (
    <Section title="Цифровой сертификат благотворителя" key="certificate" id="certificate">
        <div className={styles.content}>
            <div className={styles.innerContent}>
                <div className={styles.cards}>
                    {cards.map((props) => {
                        const { title } = props;
                        return <Card key={title} className={styles.card} {...props} />;
                    })}
                </div>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={image.desktopImage} alt={image.name} />
                </div>
            </div>
        </div>
    </Section>
);

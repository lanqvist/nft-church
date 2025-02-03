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
        title: 'Уникальность',
        description:
            'В качестве нашей благодарности мы подарим вам NFT сертификат «Благотворителя». Каждый NFT сертификат обладает индивидуальными характеристиками, которые прописаны в его коде. NFT сертификат нельзя обменять на другой. Так как все операции с NFT записываются в блокчейне, можно отследить историю объекта.',
        icon: <HouseIcon className={styles.icon} />,
    },
    {
        title: 'Безопастность',
        description:
            'Блокчейн — технология, которая позволяет сохранять и передавать данные в виде последовательности связанных блоков. Каждый блок содержит информацию и ссылку на предыдущий — вместе они образуют цепочку. Так данные в блокчейне защищены от изменений и фальсификации.',
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
    <Section title="NFT сертификат" key="certificate" id="certificate">
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

import { Button, Text, Title } from '@mantine/core';
import clsx from 'clsx';

import { Section } from '@components/layout/Section';

import WorldIcon from './assets/icons/world.svg?react';
import nftImage from './assets/nft.png';
import voskresfondImg from './assets/voskresfond.png';
import styles from './Hero.module.css';

export const Hero = () => (
    <Section className={styles.root} containerClassName={styles.container}>
        <div className={styles.content}>
            <div className={styles.infoWrapper}>
                <div className={styles.infoContent}>
                    <div className={clsx(styles.infoBackground, styles.info)}>
                        <Title order={1} className={styles.title}>
                            Сбор средств{'\n'}на строительство
                        </Title>
                        <Text className={styles.text}>Храма преподобного Сергия Радонежского</Text>
                        <Button color="green" variant="filled" className={styles.button}>
                            Пожертвовать
                        </Button>
                    </div>
                    <div className={styles.infoBottomBlocks}>
                        <div className={clsx(styles.infoBackground, styles.infoBlock)}>
                            <div className={styles.infoBlockTop}>
                                <img className={styles.infoBlockImage} src={voskresfondImg} alt="Фонд «Воскресение»" />
                                <Text className={styles.infoBlockText}>Организатор сбора фонд «Воскресение»</Text>
                            </div>
                            <div className={styles.infoBlockBottom}>
                                <WorldIcon className={styles.infoBlockIcon} />
                                <a className={styles.infoBlockLink} href="voskresfond.ru">
                                    voskresfond.ru
                                </a>
                            </div>
                        </div>
                        <div className={clsx(styles.infoBackground, styles.infoBlock)}>
                            <div className={styles.infoBlockTop}>
                                <img className={styles.infoBlockImage} src={nftImage} alt="NFT" />

                                <Text className={styles.infoBlockText}>Вручаем сертификат NFT «Благотворителя»</Text>
                            </div>
                            <div className={styles.infoBlockBottom}>
                                <WorldIcon className={styles.infoBlockIcon} />
                                <a className={styles.infoBlockLink} href="dfa.sber.ru/nft">
                                    dfa.sber.ru/nft
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

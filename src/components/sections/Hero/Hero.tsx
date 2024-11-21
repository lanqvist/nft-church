import { Button, Text, Title } from '@mantine/core';

import { Section } from '@components/layout/Section';

import styles from './Hero.module.css';

export const Hero = () => (
    <Section containerClassName={styles.container}>
        <div className={styles.infoWrapper}>
            <div className={styles.info}>
                <Title order={1} className={styles.title}>
                    Благотворительный{'\n'}сбор средств
                </Title>
                <Text className={styles.text}>Храма преподобного Сергия Радонежского</Text>
                <Button color="green" variant="filled" className={styles.button}>
                    Пожертвовать
                </Button>
            </div>
        </div>
    </Section>
);

import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import { Section } from '@components/layout/Section';
import { useBreakpoint } from '@hooks/useBreakpoint';

import slideImg1 from './assets/slide-1.jpeg';
import styles from './WorkStages.module.css';

export const WorkStages = () => {
    const isTablet = useBreakpoint('md');
    const isMobile = useBreakpoint('sm');

    let slideSize = '40%';
    let slideGap = 'lg';
    let withIndicators = true;

    if (isTablet) {
        slideSize = '60%';
    }

    if (isMobile) {
        slideGap = '2xs';
        withIndicators = false;
    }

    return (
        <Section title="Этапы работ">
            <div>
                <Carousel
                    className={styles.carousel}
                    slidesToScroll={1}
                    slideSize={slideSize}
                    slideGap={slideGap}
                    align="start"
                    withControls={false}
                    withIndicators={withIndicators}
                    containScroll="trimSnaps"
                >
                    <Carousel.Slide className={styles.slide}>
                        <Image src={slideImg1} alt="Слайд" className={styles.image} />
                    </Carousel.Slide>
                    <Carousel.Slide className={styles.slide}>
                        <Image src={slideImg1} alt="Слайд" className={styles.image} />
                    </Carousel.Slide>
                    <Carousel.Slide className={styles.slide}>
                        <Image src={slideImg1} alt="Слайд" className={styles.image} />
                    </Carousel.Slide>
                    <Carousel.Slide className={styles.slide}>
                        <Image src={slideImg1} alt="Слайд" className={styles.image} />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </Section>
    );
};

import { Title } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './Section.module.css';
import { SectionProps } from './Section.types';

export const Section: FC<SectionProps> = ({ title, className, containerClassName, titleClassName, children }) => (
    <section className={clsx(styles.root, className)}>
        <div className={clsx(styles.container, containerClassName)}>
            {title && (
                <Title order={2} className={clsx(styles.title, titleClassName)}>
                    {title}
                </Title>
            )}
            {children}
        </div>
    </section>
);

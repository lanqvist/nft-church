import { Title } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './Section.module.css';
import { SectionProps } from './Section.types';

export const Section: FC<SectionProps> = ({
    title,
    className,
    containerClassName,
    titleClassName,
    titleAddons,
    children,
    id,
}) => (
    <section className={clsx(styles.root, className)} id={id}>
        <div className={clsx('container', containerClassName)}>
            {(title || titleAddons) && (
                <div className={styles.titleWrapper}>
                    <Title order={2} className={clsx(styles.title, titleClassName)}>
                        {title}
                    </Title>
                    {titleAddons}
                </div>
            )}
            {children}
        </div>
    </section>
);

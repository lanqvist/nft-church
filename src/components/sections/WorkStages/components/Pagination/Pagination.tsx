import { ActionIcon } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import CaretLeft from './assets/icons/caretLeft.svg?react';
import CaretRight from './assets/icons/caretRight.svg?react';
import styles from './Pagination.module.css';
import { PaginationProps } from './Pagination.types';

export const Pagination: FC<PaginationProps> = ({ className, onPrevClick, onNextClick }) => (
    <div className={className}>
        <div className={styles.wrapper}>
            <ActionIcon
                onClick={onPrevClick}
                className={clsx(styles.button, styles.leftButton)}
                variant="filled"
                color="gray"
            >
                <CaretLeft />
            </ActionIcon>
            <ActionIcon
                onClick={onNextClick}
                className={clsx(styles.button, styles.rightButton)}
                variant="filled"
                color="gray"
            >
                <CaretRight />
            </ActionIcon>
        </div>
    </div>
);

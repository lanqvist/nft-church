import { Radio, RadioCardProps } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './AmountRadioButton.module.css';

export const AmountRadioButton: FC<RadioCardProps> = ({ value, className, ...restProps }) => (
    <Radio.Card className={clsx(styles.root, className)} value={value} {...restProps}>
        {value} ₽
    </Radio.Card>
);

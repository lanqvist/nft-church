import {
    ActionIcon,
    ActionIconProps,
    Button,
    ButtonProps,
    Checkbox,
    createTheme,
    defaultVariantColorsResolver,
    MantineTheme,
    VariantColorsResolver,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    if (input.variant === 'filled' && input.color === 'green') {
        return {
            background: 'var(--mantine-color-green-9)',
            hover: 'var(--mantine-color-green-8)',
            color: 'var(--mantine-color-gray-1)',
            border: '1px solid var(--mantine-color-green-9)',
        };
    }

    if (input.variant === 'filled' && input.color === 'gray') {
        return {
            background: 'var(--mantine-color-gray-1)',
            hover: 'var(--mantine-color-green-8)',
            color: 'var(--mantine-color-green-9)',
            hoverColor: 'var(--mantine-color-gray-1)',
            border: 'none',
        };
    }

    if (input.variant === 'filled' && input.color === 'gray') {
        return {
            background: 'var(--mantine-color-gray-1)',
            hover: 'var(--mantine-color-green-8)',
            color: 'var(--mantine-color-green-9)',
            hoverColor: 'var(--mantine-color-gray-1)',
            border: 'none',
        };
    }

    if (input.variant === 'outline' && input.color === 'green') {
        return {
            background: 'transparent',
            hover: 'var(--mantine-color-green-8)',
            color: 'var(--mantine-color-green-9)',
            hoverColor: 'var(--mantine-color-green-8)',
            border: '1px solid var(--mantine-color-green-9)',
        };
    }

    if (input.variant === 'outline' && input.color === 'gray') {
        return {
            background: 'transparent',
            hover: 'var(--mantine-color-green-8)',
            color: 'var(--mantine-color-white)',
            border: '1px solid var(--mantine-color-gray-1)',
        };
    }

    if (input.variant === 'transparent' && input.color === 'gray') {
        return {
            background: 'transparent',
            hover: 'transparent',
            color: 'var(--mantine-color-gray-9)',
            border: 'none',
        };
    }

    return defaultResolvedColors;
};

const createButtonStylesResolver =
    <T extends ButtonProps | ActionIconProps>() =>
    (theme: MantineTheme, props: T) => {
        const { variant } = props;
        const colors = theme.colors.green;

        if (colors && variant !== 'transparent') {
            return {
                root: {
                    '--button-active': colors[7],
                    '--button-active-color': colors[7],
                },
            };
        }

        return {};
    };

export const theme = createTheme({
    fontFamily: 'SBSansDisplay, sans-serif',
    primaryColor: 'green',
    variantColorResolver,
    components: {
        Button: Button.extend({
            classNames: {
                root: 'button',
            },
            styles: createButtonStylesResolver<ButtonProps>(),
        }),
        ActionIcon: ActionIcon.extend({
            classNames: {
                root: 'button',
            },
            styles: createButtonStylesResolver<ActionIconProps>(),
        }),
        Checkbox: Checkbox.extend({
            vars: (theme, props) => {
                const { color } = props;
                if (color === 'green') {
                    return {
                        root: {
                            '--checkbox-color': theme.colors.green[9],
                        },
                    };
                }

                return { root: {} };
            },
        }),
    },
    headings: {
        fontWeight: '700',
        textWrap: 'wrap',
        sizes: {
            h1: { fontSize: '64px', lineHeight: '1.35' },
            h2: { fontSize: '46px', lineHeight: '1.35' },
            h3: { fontSize: '36px', lineHeight: '1.375' },
            h4: { fontSize: '30px', lineHeight: '1.45' },
            h5: { fontSize: '24px', lineHeight: '1.5' },
            h6: { fontSize: '16px', lineHeight: '1.5' },
        },
    },
    fontSizes: {
        '3xs': '12px',
        '2xs': '14px',
        xs: '16px',
        sm: '18px',
        md: '20px',
        lg: '24px',
        xl: '28px',
        '2xl': '30px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '46px',
        '6xl': '56px',
        '7xl': '64px',
    },
    lineHeights: {
        xs: '1',
        sm: '1.3',
        md: '1.5',
        lg: '1.75',
        xl: '2',
    },
    spacing: {
        '3xs': '4px',
        '2xs': '8px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '56px',
        '6xl': '64px',
    },
    // Должны соответствовать тем же значениям что находятся в postcss.config.cjs, но нужно учитывать что mantine ui использует mobile first подход
    breakpoints: {
        '3xs': '320px',
        '2xs': '360px',
        xs: '430px',
        sm: '560px',
        md: '960px',
        lg: '1328px',
        xl: '1568px',
        '2xl': '1920px',
    },
    radius: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
});

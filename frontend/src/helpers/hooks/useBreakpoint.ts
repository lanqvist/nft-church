import { MantineBreakpoint, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useBreakpoint = (breakpoint: MantineBreakpoint) => {
    const theme = useMantineTheme();
    const matched = useMediaQuery(`(max-width: ${theme.breakpoints[breakpoint]})`);

    return !!matched;
};

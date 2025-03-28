import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
// eslint-disable-next-line import/order
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@gfazioli/mantine-flip/styles.css';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ResultPageLayout } from '@components/layout/ResultPageLayout';
import ScrollToTop from '@utils/ScrollToTop';

import App from './App';
import { theme } from './theme';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/result/:uuid',
        element: (
            <>
                <ScrollToTop />
                <ResultPageLayout />
            </>
        ),
    },
]);

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    </MantineProvider>
);

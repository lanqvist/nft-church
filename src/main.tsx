import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@gfazioli/mantine-flip/styles.css';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ResultPageLayout } from '@components/layout/ResultPageLayout';

import App from './App';
import { theme } from './theme';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/result',
        element: <ResultPageLayout />,
    },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <StrictMode>
            <RouterProvider router={router} />
            {/* <App /> */}
        </StrictMode>
    </MantineProvider>
);

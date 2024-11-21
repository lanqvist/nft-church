import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@gfazioli/mantine-flip/styles.css';

import './index.css';

import App from './App';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <StrictMode>
            <App />
        </StrictMode>
    </MantineProvider>
);

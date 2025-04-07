import "core-js/proposals/promise-with-resolvers";
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { pdfjs } from 'react-pdf';
// eslint-disable-next-line import/order
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@gfazioli/mantine-flip/styles.css';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ResultPageLayout } from '@components/layout/ResultPageLayout';
import ScrollToTop from '@utils/ScrollToTop';

import App from './App';
import { theme } from './theme';

function shouldUseLegacyBuild() {
  try {
    if (typeof window === 'undefined') return false;

    const ua = window.navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

    if (!isSafari) return false;

    // Extract Safari version - matches "Version/18" format
    const match = ua.match(/Version\/(\d+)/i);

    if (!match || !match[1]) return true; // If we can't determine version, use legacy to be safe

    const version = parseInt(match[1]);
    return version < 18; // Use legacy build for Safari versions equal or below 18
  } catch (e) {
    console.error('Error detecting Safari version:', e);
    return false;
  }
}

function initPDFWorker() {
  try {
    if (typeof window !== 'undefined') {
      const useLegacy = shouldUseLegacyBuild();
      // Use local worker file instead of unpkg
      const workerSrc = useLegacy 
        ? new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url).href
        : new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).href;

      pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
      pdfjs.GlobalWorkerOptions.workerPort = null;
    }
  } catch (e) {
    console.error('Error setting PDF worker:', e);
  }
}

initPDFWorker();

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

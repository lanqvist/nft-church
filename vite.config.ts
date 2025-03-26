/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/payments': {
                target: 'https://api.yookassa.ru/v3/payments',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/payments/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@consts': path.resolve(__dirname, './src/consts'),
            '@components': path.resolve(__dirname, './src/components'),
            '@utils': path.resolve(__dirname, './src/helpers/utils'),
            '@hooks': path.resolve(__dirname, './src/helpers/hooks'),
            '@services': path.resolve(__dirname, './src/services'),
            '@types': path.resolve(__dirname, './src/types'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@api': path.resolve(__dirname, './src/api'),
            '@queries': path.resolve(__dirname, './src/helpers/hooks/queries'),
        },
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // svgr options
            },
        }),
        createHtmlPlugin({
            minify: true,
            entry: 'src/main.tsx',
            template: 'index.html',
            inject: {
                data: {
                    title: 'Храм',
                    ymapsScript: `<script src="https://api-maps.yandex.ru/2.1?apikey=${process.env.YMAPS_API_KEY}&lang=ru_RU"></script>`,
                },
            },
        }),
    ],
});

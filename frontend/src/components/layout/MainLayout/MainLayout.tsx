import { FC, PropsWithChildren } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

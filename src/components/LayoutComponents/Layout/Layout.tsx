import { FC, PropsWithChildren } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

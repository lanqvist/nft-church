import { FloatingButton } from '@components/floating-button';
import { Certificate } from '@components/sections/Certificate';

import { About, Facts, Hero, Introduction, MainLayout, WorkStages, Donate, Contacts } from './components';

const App = () => (
    <MainLayout>
        <FloatingButton />
        <Hero />
        <About />
        <Certificate />
        <WorkStages />
        <Introduction />
        <Facts />
        <Donate />
        <Contacts />
    </MainLayout>
);

export default App;

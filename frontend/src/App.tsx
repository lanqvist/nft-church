import { useInViewport } from '@mantine/hooks';

import { FloatingButton } from '@components/floating-button';
import { Certificate } from '@components/sections/Certificate';

import { About, Facts, Hero, Introduction, MainLayout, WorkStages, Donate, Contacts } from './components';

const App = () => {
    const { ref, inViewport } = useInViewport();

    return (
        <MainLayout>
            <FloatingButton heroInView={inViewport} />
            <Hero ref={ref} />
            <About />
            <Certificate />
            <WorkStages />
            <Introduction />
            <Facts />
            <Donate />
            <Contacts />
        </MainLayout>
    );
};

export default App;
